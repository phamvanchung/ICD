import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Title from "../../components/Title";

const CheckInput = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = [
    {
      label: "Name",
      value: location.state?.name,
    },
    {
      label: "Mail",
      value: location.state?.email,
    },
    {
      label: "Phone Number",
      value: location.state?.phoneNumber,
    },
    {
      label: "Note",
      value: location.state?.note,
    },
  ];

  return (
    <div className="w-full p-5">
      <Title text="CHECK YOUR INPUT" />
      <div className="space-y-4">
        {data.map((it, idx) => (
          <div
            className="text-sm lg:text-[2vw] leading-normal text-[#333333]"
            key={idx}
          >
            <p className="font-medium">{it.label}</p>
            <p className="min-h-[2.4vh] lg:min-h-[3vw]">{it.value}</p>
            {idx !== data.length - 1 && (
              <div className="mt-4 border-b border-[#A1A1A1]" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 lg:my-20 space-x-4 flex items-center justify-center">
        <Button
          text="EDIT"
          modifier="normal"
          onClick={() =>
            navigate("/contact", {
              state: location.state,
            })
          }
        />
        <Button text="SUBMIT" onClick={() => navigate("/thank-you")} />
      </div>
    </div>
  );
};

export default CheckInput;
