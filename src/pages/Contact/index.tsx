import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect } from "react";
import Title from "../../components/Title";

type FormInputs = {
  name: string;
  email: string;
  phoneNumber: string;
  note: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { name, email, phoneNumber, note } = location.state || {};
    setValue("name", name);
    setValue("email", email);
    setValue("phoneNumber", phoneNumber);
    setValue("note", note);
  }, [location, setValue]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    navigate("/check-input", {
      state: data,
    });
  };

  return (
    <div className="w-full p-5">
      <Title text="CONTACT FORM" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-7">
          <label className="text-[3.3vw] lg:text-[2.5vw] text-black font-medium">
            Name <span className="text-[#FF1313] ml-[-2px]">*</span>
          </label>
          <input
            {...register("name", { required: "Please enter this field" })}
            placeholder="Nguyen Van A"
            className={`input w-full lg:text-[2vw] lg:h-[4vw] text-[3.7vw] h-[10.3vw] rounded focus:outline-none ${
              errors.name ? "input-error" : "border-[#A1A1A1]"
            }`}
          />
          {errors.name && (
            <p className="text-[#FF1313] text-[3vw] lg:text-[2vw] capitalize">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="mb-7">
          <label className="text-[3.3vw] lg:text-[2.5vw] text-black font-medium">
            Mail <span className="text-[#FF1313] ml-[-2px]">*</span>
          </label>
          <input
            {...register("email", {
              required: "Please enter this field",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            placeholder="abc@gmail.com"
            className={`input w-full lg:text-[2vw] lg:h-[4vw] text-[3.7vw] h-[10.3vw] rounded focus:outline-none ${
              errors.email ? "input-error" : "border-[#A1A1A1]"
            }`}
          />
          {errors.email && (
            <p className="text-[#FF1313] text-[3vw] lg:text-[2vw] capitalize">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-7">
          <label className="text-[3.3vw] lg:text-[2.5vw] text-black font-medium">
            Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            placeholder="0000 000 000"
            className="input w-full lg:text-[2vw] lg:h-[4vw] text-[3.7vw] h-[10.3vw] border-[#A1A1A1] rounded focus:outline-none"
          />
        </div>
        <div className="mb-7">
          <label className="text-[3.3vw] lg:text-[2.5vw] text-black font-medium">
            Note
          </label>
          <textarea
            {...register("note")}
            placeholder="Enter here"
            className="textarea border-[#A1A1A1] lg:h-[4vw] min-h-[30vw] rounded w-full text-[3.7vw] lg:text-[2vw] focus:outline-none"
          />
        </div>
        <div className="text-center mt-10 lg:mt-[4vw] lg:mb-[4.5vw]">
          <Button type="submit" text="SUBMIT"></Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
