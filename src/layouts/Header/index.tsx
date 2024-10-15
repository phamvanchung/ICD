import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { EmailIcon } from "../../assets/icons/Email";
import { HomeIcon } from "../../assets/icons/Home";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname === "/";
  const handleClickIcon = () => {
    if (homePage) {
      navigate("/contact");
    } else {
      navigate("/");
    }
  };
  return (
    <header className="h-[11vw] lg:h-[4.8vw] w-full bg-white flex items-center justify-between pl-2 [filter:drop-shadow(0_0_3px_#00000029)]">
      <img
        src={Logo}
        alt="logo"
        className="w-[25vw] lg:w-[12vw] h-auto"
        onClick={() => navigate("/")}
      />
      <div
        className="w-[10vw] h-full bg-[#F98F29] flex items-center justify-center"
        onClick={handleClickIcon}
      >
        {homePage ? (
          <EmailIcon className="w-[3vw] h-[3vw] cursor-pointer" />
        ) : (
          <HomeIcon className="w-[3vw] h-[3vw] cursor-pointer" />
        )}
      </div>
    </header>
  );
};

export default Header;
