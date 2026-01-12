import Link from "next/link";
import UiButton from "../ui/UiButton";

const Navbar = () => {
  const links = [
    // { name: "Projekt", to: "/projects" },
    { name: "Tjänster", to: "/services" },
    { name: "Om oss", to: "/about" },
    { name: "Kontakt", to: "/contact" },
  ];

  return (
    <>
      <div className="border-b border-gray-300 h-[10vh] flex items-center justify-between p-7 font-bold ">
        <div>
          <Link href="/" className="text-orange-400">
            FAW Tech
          </Link>
        </div>
        <div className="flex justify-end gap-5 text-gray-400 hover:cursor-pointer">
          {links.map((link, index) => {
            return (
              <Link href={link.to} key={index}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div>
          <UiButton buttonName="Få offert" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
