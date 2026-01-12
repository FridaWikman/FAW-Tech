const Footer = () => {
  return (
    <div className="w-full border-t border-gray-300 h-[10vh] flex justify-between items-center mt-10 px-2">
      <div className="flex flex-col md:flex-row">
        <p className="pt-5 md:pt-0">
          2026 FAW Tech. Alla rättigheter förbehållna.
        </p>
        <p className="md:ps-2">
          Detta är ett fiktivt projekt skapat för portfolio- och
          demonstrationssyfte.
        </p>
      </div>
      <div className="flex gap-5">
        <p>LinkdIn</p>
        <p>Insta</p>
      </div>
    </div>
  );
};

export default Footer;
