"use client";
import Image from "next/image";
import UiHeader from "../components/ui/UiHeader";
import UiButton from "../components/ui/UiButton";
import { useRouter } from "next/navigation";
import ServiceCard from "../components/ui/ServiceBox";
import { Layers, MessagesSquare, Handshake } from "lucide-react";
import UiSmallText from "../components/ui/UiSmallText";

const About = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-15">
        <div className="max-w-5/6">
          <div className="flex flex-col md:flex-row justify-between items-center pb-15 gap-6">
            <div className="flex-3 flex flex-col items-start justify-start gap-3">
              <h1 className="text-4xl font-extrabold text-start flex flex-col">
                Möt teamet bakom <span className="text-orange-400">koden</span>
              </h1>
              <p className="text-gray-400 text-lg flex text-start">
                Vi är ett passionerat team av utvecklare och designers som drivs
                av en gemensam vision: att bygga enkla, kraftfulla och vackra
                webbupplevelser.
              </p>

              <UiButton
                buttonAction={() => router.push("/projects")}
                buttonName="Se våra projekt"
                variant="teal"
              />
            </div>
            <div className="md:flex-2 w-full h-68 relative">
              <Image
                alt="computer-image"
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="pt-10 flex items-start flex-col">
            <UiHeader headerContent="Vår filosofi" />
            <p className="text-lg text-gray-400 pt-5 w-2/3">
              Vi tror på en transparent och kollaboration process, där vi bygger
              partnerskap, inte bara projekt. Vårt arbetssätt grundar sig i
              dessa kärnvärden.
            </p>

            <div className="flex flex-col xl:flex-row justify-start gap-5 pt-10">
              <ServiceCard
                align="left"
                icon={Layers}
                iconBgClass="bg-orange-100"
                iconColorClass="text-theme-orange"
                header="Enkelhet i varje steg"
                textContent="Vi fokuserar på rena, effektiva lösningar som är enkla att använda och underhålla."
              />

              <ServiceCard
                align="left"
                icon={MessagesSquare}
                iconBgClass="bg-teal-100"
                iconColorClass="text-theme-teal"
                header="Kommunikation är nyckeln"
                textContent="Vi håller dig uppdaterad med tydlig och kontinuerlig kommunikation genom hela projektet."
              />

              <ServiceCard
                align="left"
                icon={Handshake}
                iconBgClass="bg-orange-100"
                iconColorClass="text-theme-orange"
                header="Partnerskap och strategi"
                textContent="Vi arbetar med dig för att förstå dina mål och bygga en strategi för framgång."
              />
            </div>
          </div>

          <div className="bg-theme-charcoalBlue text-theme-white flex flex-col justify-center items-center rounded-xl mt-20 py-6 px-4">
            <UiHeader
              headerContent={
                <>
                  Låt oss bygga något
                  <span className="text-theme-teal"> stort</span> tillsammans.
                </>
              }
            />
            <UiSmallText textContent="Har du en idé du vill förverkliga? Vi är redo att hjälpa dig att ta nästa steg. Kontakta oss för ett förutsättningslöst samtal." />
            <div className="flex gap-5 pt-5">
              <UiButton
                buttonName="Starta ditt projekt"
                buttonAction={() => router.push("/projects")}
                variant="orange"
              />
              {/* <UiButton buttonName="Få offert" variant="orange" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
