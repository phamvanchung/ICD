interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <h2
      className={`text-[5.5vw] font-bold text-center text-[#F98F29] mb-[1.75vh] mt-[2vh] ${
        className || ""
      }`}
    >
      {text}
    </h2>
  );
};
export default Title;
