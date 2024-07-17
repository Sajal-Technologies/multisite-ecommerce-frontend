import { createContext, useContext, useState } from "react";
import { authFetch } from "../Axios Instance/authAxios";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

const handleAuthError = (error, setError) => {
  console.log(error);
  if (error?.response?.data?.errors) {
    setError(error.response.data.errors);
  } else if (error.response?.data?.Message) {
    setError(error.response.data.Message);
  } else {
    setError("An unexpected error occurred.");
  }
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { addUser } = useLocalStorage();

  // Performed login logic here
  const login = async function (email, password, rememberMe) {
    // Perform logic here
    try {
      setError(null);
      setIsLoading(true);
      const response = await authFetch.post("/login/", {
        email,
        password,
      });
      setUser(response.data);

      if (response.data.verified === false) {
        navigate("/OTPVerification");
        resendOTP(response.data.email);
      } else if (rememberMe && response.data?.token) {
        addUser("user", response.data);
        navigate("/");
      } else navigate("/");
    } catch (error) {
      handleAuthError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  // Performed Register logic here
  const signUp = async function (email, password, name) {
    try {
      setError(null);
      setIsLoading(true);
      const response = await authFetch.post("/register/", {
        email,
        password,
        name,
      });
      setUser(response.data);
      navigate("/OTPVerification");
    } catch (error) {
      console.log(error.response);
      handleAuthError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  //Verification Logic
  const verification = async function (email, otp) {
    try {
      setError(null);
      setIsLoading(true);

      const response = await authFetch.post("/verification/", {
        email,
        verification_code: otp,
      });
      setUser(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response);
      handleAuthError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  //Resend OTP Logic
  const resendOTP = async function (
    email = user?.email,
    setOtpResendMessage = null,
    setSeconds = null
  ) {
    try {
      setError(null);
      setIsLoading(true);
      const response = await authFetch.post("/resendotp/", {
        email,
      });
      if (setOtpResendMessage) {
        setOtpResendMessage(response.data.Message);
        setSeconds(30);
      }
    } catch (error) {
      handleAuthError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async function (email) {
    // Perform logic here
    try {
      setError(null);
      setIsLoading(true);
      const response = await authFetch.post("/forgot-password/", {
        email,
      });
      if (response.statusText === "OK") {
        navigate("/ResetPassword");
        setUser({ email });
      }
    } catch (error) {
      console.log(error.response);
      handleAuthError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async function (
    email,
    password,
    verificationCode,
    setMessage = null
  ) {
    // Perform logic here
    try {
      setError(null);
      setIsLoading(true);
      console.log(verificationCode);
      const response = await authFetch.post("/reset-password/", {
        email,
        new_password: password,
        verification_code: verificationCode,
      });
      if (response.statusText === "OK") {
        setMessage(response.data.Message);
      }
    } catch (error) {
      handleAuthError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        setError,
        isLoading,
        setUser,
        login,
        signUp,
        verification,
        resendOTP,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  return context;
};

export { useAuth, AuthProvider };
