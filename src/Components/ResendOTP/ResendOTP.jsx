import { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";

function ResendOTP({ setOtpResendMessage = null }) {
  const [seconds, setSeconds] = useState(30);
  const { user, resendOTP, isLoading } = useAuth();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);
  return (
    <div>
      <p className="text-[#121212] tablet:text-2xl font-medium ">
        Didn&apos;t receive code?{" "}
        <button
          className={`text-[#005F85] ${
            seconds > 0 ? "text-[#5C5C5C] cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => resendOTP(user.email, setOtpResendMessage, setSeconds)}
          disabled={!seconds === 0}
        >
          {!isLoading ? ` Resend OTP` : ` Sending OTP`}{" "}
          {seconds > 0 && (
            <span className="text-[#5c5c5c] font-bold text-lg">
              in {String(seconds).length === 1 ? `0${seconds}` : `${seconds}`}s
            </span>
          )}
        </button>
      </p>
    </div>
  );
}

export default ResendOTP;
