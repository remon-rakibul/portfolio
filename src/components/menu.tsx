import { BiUser } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const links = [
  {
    name: <IoHomeOutline className="size-5" />,
    path: "#section1",
    title: "Home",
  },
  {
    name: <BiUser className="size-5" />,
    path: "#section2",
    title: "About Me",
  },
  {
    name: <GrProjects className="size-5" />,
    path: "#section3",
    title: "Projects",
  },
];
const Menu = () => {
  const pathname = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 z-[60] flex -translate-x-1/2 transform items-center justify-between gap-2 rounded-full bg-white/90 dark:bg-gray-800/90 px-3 py-2 backdrop-blur-md ring-1 ring-gray-300 dark:ring-white/10 shadow-2xl md:bottom-10 md:gap-3 md:px-4">
      {links.map((link, index) => {
        const isActive = pathname.hash === link.path || (pathname.pathname === "/" && link.path === "#section1" && index === 0);
        return (
          <a
            href={link.path}
            key={index}
            onClick={(e) => handleClick(e, link.path)}
            className={`flex size-12 items-center justify-center rounded-full text-gray-700 dark:text-white transition-all duration-300 md:size-14 ${
              isActive
                ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/50"
                : "hover:bg-gray-100 dark:hover:bg-white/10 hover:text-teal-600 dark:hover:text-teal-400"
            }`}
            title={link.title}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Menu;
