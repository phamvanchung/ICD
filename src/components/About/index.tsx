import { About_1, About_2, About_3, About_4 } from "../../assets";
import Button from "../Button";

const AboutUs = () => {
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
      <h1 className="text-[22px] font-bold text-center text-[#F98F29] mb-[14px]">
        ABOUT US
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {sections.map((section, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-auto rounded object-contain"
            />
            <div className="p-2 pl-0">
              <h2 className="text-[15px] text-[#333333] font-medium mb-1">
                {section.title}
              </h2>
              <p className="text-[14px] text-[#333333]">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-[40px] mb-[20px]">
        <Button text="CONTACT" />
      </div>
    </div>
  );
};
export default AboutUs;
