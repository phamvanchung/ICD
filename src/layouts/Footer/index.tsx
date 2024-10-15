import { LogoFooter } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-white h-[11vw] lg:h-[4.8vw] w-full border-t-[#a1a1a1] border-t">
      <div className="w-full h-full flex items-center justify-center gap-2">
        <img
          src={LogoFooter}
          alt="logo-footer"
          className="w-[5vw] lg:w-[3vw]"
        />
        <div className="text-[#333333] text-[2.6vw] lg:text-[2vw]">
          90/88B Nguyen Dinh Chieu, Da Kao Ward, District 1, Ho Chi Minh City
        </div>
      </div>
    </footer>
  );
};

export default Footer;
