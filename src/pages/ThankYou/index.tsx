import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Title from "../../components/Title";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5 text-center">
      <Title text="THANK YOU" className="mb-3" />
      <div className="text-[#333333] text-center text-[3.6vw] lg:text-[3vw]">
        Thank you for your contact.
        <br /> Our staff will contact you as soon as possible. <br />
        Thank you for your patience.
      </div>
      <div className="mt-10 lg:mt-[4vw]">
        <Button text="TOP" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default ThankYou;
