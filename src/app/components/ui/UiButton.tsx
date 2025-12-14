interface ButtonProps {
  buttonName: string;
  buttonAction?: () => void;
  variant?: "orange" | "gray" | "teal";
}

const UiButton = ({
  buttonName,
  buttonAction,
  variant = "orange",
}: ButtonProps) => {
  const baseClasses = "rounded-md hover:cursor-pointer";
  const colorClasses =
    variant === "orange"
      ? "bg-theme-orange text-theme-white"
      : variant === "teal"
      ? "bg-theme-teal text-theme-white"
      : "bg-theme-lightGray text-black-500";
  return (
    <button onClick={buttonAction} className={`${baseClasses} ${colorClasses}`}>
      <p className="px-3 py-2 font-bold text-sm">{buttonName}</p>
    </button>
  );
};

export default UiButton;
