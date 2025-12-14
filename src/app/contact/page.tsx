import Link from "next/link";
import UiButton from "../components/ui/UiButton";
import UiHeader from "../components/ui/UiHeader";
import UiSmallText from "../components/ui/UiSmallText";
import ContactForm from "../components/ui/ContactForm";

const Contact = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col justify-center items-center">
        <UiHeader
          headerContent={
            <>
              Låt oss bygg något{" "}
              <span className="text-orange-400">fantastiskt</span> tillsammans.
            </>
          }
        />
        <UiSmallText textContent="Har du en idé du vill förverkliga? Boka ett kostnadsfritt möte eller fyll i formuläret nedan så hör vi av oss så snart vi kan." />
        <Link href="Möte" className="pt-5">
          <UiButton variant="orange" buttonName="Boka ett möte" />
        </Link>
      </div>
      <div>
        <p className="py-15 text-gray-400">Eller skicka ett meddelande</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
