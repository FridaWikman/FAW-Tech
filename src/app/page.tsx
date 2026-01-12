"use client";
import UiButton from "./components/ui/UiButton";
import UiHeader from "./components/ui/UiHeader";
import UiSmallText from "./components/ui/UiSmallText";
// import ServiceBox from "./components/ui/ServiceBox";
import { useRouter } from "next/navigation";
import ServiceCard from "./components/ui/ServiceBox";
import { Braces, Rocket, Users } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <main className="flex flex-col justify-center items-center pt-15">
        <div className="max-w-5/6">
          <div className="flex flex-col justify-center items-center">
            <UiHeader
              headerContent={
                <>
                  Vi bygger <span className="text-theme-orange">snygga</span>,{" "}
                  <span className="text-theme-teal">snabba</span> och
                  användarvänliga webbplatser som stärker ditt varumärke.
                </>
              }
            />
            <UiSmallText
              textContent="Vi hjälper företag att nå sina digitala mål genom skräddarsydd
              webbutveckling, från strategi och design till lansering."
            />
            <div className="flex gap-5 pt-5">
              <UiButton
                buttonName="Se våra projekt"
                buttonAction={() => router.push("/projects")}
              />
              <UiButton buttonName="Få offert" variant="gray" />
            </div>
          </div>

          <div className="pt-30">
            <UiHeader headerContent="Varför välja oss?" />
            <UiSmallText
              textContent="Vi kombinerar design, teknik och strategi för att skapa
              webbplatser som inte bara ser bra ut, utan också levererar
              resultat."
            />

            <div className="flex flex-col lg:flex-row justify-evenly gap-5 pt-10">
              <ServiceCard
                icon={Rocket}
                iconBgClass="bg-orange-100"
                iconColorClass="text-theme-orange"
                header="Snabb Leverans"
                textContent="Vi arbetar effektivt för att leverera ditt projekt i tid, utan att kompromissa med kvaliteten."
              />

              <ServiceCard
                icon={Users}
                iconBgClass="bg-teal-100"
                iconColorClass="text-theme-teal"
                header="Personlig Service"
                textContent="Du får en dedikerad kontaktperson som lyssnar på dina behov och guidar dig genom hela processen."
              />

              <ServiceCard
                icon={Braces}
                iconBgClass="bg-orange-100"
                iconColorClass="text-theme-orange"
                header="Modern Teknik"
                textContent="Vi använder de senaste och mest pålitliga teknikerna för att bygga, säkra och ta fram dina önskemål."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
