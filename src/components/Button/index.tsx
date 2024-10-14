
interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="btn btn-warning w-[165px] h-[44px] rounded-[33px] bg-[#F98F29] text-white">
      {text}
    </button>
  );
};

export default Button;
