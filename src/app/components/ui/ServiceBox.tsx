import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  iconBgClass: string; // t.ex. "bg-orange-100"
  iconColorClass: string; // t.ex. "text-theme-orange"
  header: string;
  textContent: string;
  align?: "center" | "left";
}

const ServiceCard = ({
  icon: Icon,
  iconBgClass,
  iconColorClass,
  header,
  textContent,
  align = "center",
}: ServiceCardProps) => {
  const textAlignClass = align === "left" ? "text-left" : "text-center";

  const itemsAlignClass = align === "left" ? "items-start" : "items-center";

  return (
    <div className="border border-gray-300 rounded-xl bg-theme-lightGray lg:w-80 lg:h-60 flex justify-center items-center">
      <div
        className={`flex flex-col ${itemsAlignClass} ${textAlignClass} px-4 py-6 w-full`}
      >
        <div
          className={`min-w-15 min-h-15 rounded-full flex justify-center items-center ${iconBgClass}`}
        >
          <Icon className={iconColorClass} size={40} />
        </div>

        <p className="font-bold text-lg pt-4">{header}</p>
        <p className="text-gray-500 pt-2">{textContent}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

// import { Rocket, Braces, Users } from "lucide-react";
// import UiSmallText from "./UiSmallText";

// const ServiceBox = () => {
//   const serviceDataObjects = [
//     {
//       icon: Rocket,
//       iconColor: "theme-orange",
//       backgroundColor: "orange-100",
//       header: "Snabb Leverans",
//       textContent:
//         "Vi arbetar effektivt för att leverera ditt projekt i tid, utan att kompromissa med kvaliteten.",
//     },
//     {
//       icon: Users,
//       iconColor: "theme-teal",
//       backgroundColor: "teal-100",
//       header: "Personlig Service",
//       textContent:
//         "Du får en dedikerad kontaktperson som lyssnar på dina behov och guidar dig genom hela processen.",
//     },
//     {
//       icon: Braces,
//       iconColor: "theme-orange",
//       backgroundColor: "orange-100",
//       header: "Modern Teknik",
//       textContent:
//         "Vi använder de senaste och mest påligtliga teknikerna för att bygga, säkra och ta fram dina önskemål.",
//     },
//   ];

//   return (
//     <>
//       <div className="flex flex-col lg:flex-row justify-evenly gap-5 pt-10">
//         {serviceDataObjects.map((object, index) => {
//           return (
//             <div
//               key={index}
//               className="border border-gray-300 rounded-xl bg-theme-lightGray lg:w-80 lg:h-60 flex justify-center items-center"
//             >
//               <div className="flex flex-col justify-center items-center py-8 px-3 text-center">
//                 <p
//                   className={`min-w-15 min-h-15 rounded-full flex justify-center items-center bg-${object.backgroundColor}`}
//                 >
//                   <object.icon
//                     className={`text-${object.iconColor}`}
//                     size={40}
//                   />
//                 </p>

//                 <p className="font-bold text-lg pt-4">{object.header}</p>
//                 <p className="text-gray-500 pt-2">{object.textContent}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ServiceBox;
