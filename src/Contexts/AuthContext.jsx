import { createContext, useContext, useState } from "react";
import { authFetch } from "../Axios Instance/authAxios";
import { useNavigate } from "react-router-dom";

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

  // Perform login logic here
  const login = async function (email, password) {
    // Perform logic here
    try {
      setError(null);
      setIsLoading(true);
      const response = await authFetch.post("/login/", {
        email,
        password,
      });
      setUser(response.data);
      console.log(response.data);
      if (response.data.verified === false) {
        navigate("/OTPVerification");
        resendOTP(response.data.email);
      } else navigate("/");
    } catch (error) {
      handleAuthError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  // Perform Register logic here

  const signUp = async function (email, password, name) {
    // Perform logic here
    try {
      setError(null);
      setIsLoading(true);
      const response = await authFetch.post("/register/", {
        email,
        password,
        name,
      });
      console.log(response.data);
      setUser(response.data);
      navigate("/OTPVerification");
    } catch (error) {
      console.log(error.response);
      handleAuthError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  const verification = async function (email, otp) {
    // Perform logic here
    try {
      setError(null);
      setIsLoading(true);

      const response = await authFetch.post("/verification/", {
        email,
        verification_code: otp,
      });
      console.log(response.data);
      setUser(response.data);
      navigate("/SignIn");
    } catch (error) {
      console.log(error.response);
      handleAuthError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  const resendOTP = async function (
    email = user?.email,
    setOtpResendMessage = null,
    setSeconds = null
  ) {
    // Perform logic here
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
      console.log(error.response);
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
