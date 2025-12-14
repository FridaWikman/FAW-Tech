import Image from "next/image";
import UiSmallText from "../components/ui/UiSmallText";
import UiHeader from "../components/ui/UiHeader";

const Services = () => {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      header: "Webbutveckling",
      content: "Skräddarsydda lösningar med modern teknik.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VVh8ZW58MHx8MHx8fDA%3D",
      header: "Design och UX",
      content:
        "Användarcentrerad design som skapar intuitiva och engagerade upplevelser.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VvfGVufDB8fDB8fHww",
      header: "SEO och Prestanda",
      content:
        "Optimering för maximal synlighet på sökmotorer och blixtsnabba laddningstider.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFpbnRlbmFuY2V8ZW58MHx8MHx8fDA%3D",
      header: "Underhåll och support",
      content:
        "Påligtlig och proaktiv support för att säkerställa att din webbplats alltid är säker och uppdaterad.",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center pt-15 pb-15 gap-2">
        <div className="w-1/2 flex flex-col items-start justify-start gap-3">
          <h1 className="text-4xl font-extrabold text-start">
            Vi bygger digitala{" "}
            <span className="text-orange-400">lösningar</span> som ger{" "}
            <span className="text-orange-400">resultat</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Specialiserade på att skapa moderna, snabba och användarvänliga
            webbplatser för företag som vill växa.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            alt="computer-image"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="pt-15 bg-theme-lightGray min-h-2/3">
        <UiHeader headerContent="Våra tjänster" />
        <UiSmallText
          textContent="Vi erbjuder ett utbud av tjänster för att ta din digitala närvaro till
          nästa nivå. Från idé till lansering."
        ></UiSmallText>
        <div className="grid grid-cols-2 grid-rows-2 items-center justify-center">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="bg-theme-white w-60 h-auto rounded-xl flex flex-col justify-center items-center p-5"
              >
                <Image
                  alt="service image"
                  src={service.image}
                  width={0}
                  height={0}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  className="rounded-xl"
                />
                <p className="font-bold">{service.header}</p>
                <p className="text-gray-400">{service.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
