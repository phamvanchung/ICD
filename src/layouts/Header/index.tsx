import { Logo } from "../../assets";
import { EmailIcon } from "../../assets/icons/Email";

const Header = () => {
  return (
    <div className="h-[4.3vh] w-full bg-white flex items-center justify-between pl-2">
      <img src={Logo} alt="logo" className="w-[25vw] h-auto" />
      <div className="w-[10vw] h-full bg-[#F98F29] flex items-center justify-center">
        <EmailIcon />
      </div>
    </div>
  );
};

export default Header;
