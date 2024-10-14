import { LogoFooter } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-white h-[40px] w-full border-t-[#a1a1a1] border-t">
      <div className="w-full h-full flex items-center justify-center gap-2">
        <img src={LogoFooter} alt="logo-footer" className="w-[20px] h-[24px]" />
        <div className="text-gray-800 text-[11px]">
          90/88B Nguyen Dinh Chieu, Da Kao Ward, District 1, Ho Chi Minh City
        </div>
      </div>
    </footer>
  );
};

export default Footer;
