import { useNavigate } from "react-router-dom";
import { About_1, About_2, About_3, About_4 } from "../../assets";
import Button from "../Button";
import Title from "../Title";

const AboutUs = () => {
  const navigate = useNavigate();
  const sections = [
    {
      title: "Teamwork spirit",
      description:
        "Teamwork is key to success; united, we achieve great things.",
      image: About_1,
    },
    {
      title: "Self-improvement",
      description:
        "A company that promotes growth helps employees reach their potential.",
      image: About_2,
    },
    {
      title: "Mutual support",
      description:
        "With mutual support, the team overcomes challenges and succeeds.",
      image: About_3,
    },
    {
      title: "Vibrant setting",
      description:
        "An engaging environment is ideal for those pursuing innovation and learning.",
      image: About_4,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Title text="ABOUT US" className="mt-0" />
      <div className="grid grid-cols-2 gap-3">
        {sections.map((section, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-auto rounded object-contain"
            />
            <div className="p-2 pl-0">
              <h2 className="text-[3.75vw] text-[#333333] font-medium mb-[0.5vh]">
                {section.title}
              </h2>
              <p className="text-[3.3vw] text-[#333333] w-[90%]">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-[4.3vh] mb-[2vh]">
        <Button text="CONTACT" onClick={() => navigate("/contact")} />
      </div>
    </div>
  );
};
export default AboutUs;
