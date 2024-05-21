import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socailIds = [
  { icon: <FaGithub />, path: "https://github.com/iamhanif" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/iamhanif/" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socailIds.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
