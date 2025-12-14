import UiButton from "../ui/UiButton";

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-300 h-[10vh] flex justify-between items-center mt-10">
      <div>
        <p>2025 Sevora. Alla rättigheter förbehållna.</p>
      </div>
      <div className="flex gap-5">
        <p>LinkdIn</p>
        <p>Insta</p>
      </div>
    </div>
  );
};

export default Footer;
