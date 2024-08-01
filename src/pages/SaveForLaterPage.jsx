import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function SaveForLaterPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="pt-[15rem]  mobile:pt-[7rem] flex justify-center flex-col items-center">
        <h1>Missing Cart items?</h1>
        <p>Login to see the items you added previously</p>
        <Link to={"/SignIn"}>SignIn</Link>
      </div>
    );
  }
  return <div>Save For Later Items Appear Here</div>;
}

export default SaveForLaterPage;
