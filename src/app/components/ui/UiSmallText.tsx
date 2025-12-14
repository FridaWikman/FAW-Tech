interface SmallTextProps {
  textContent: string;
}

const UiSmallText = ({ textContent }: SmallTextProps) => {
  return (
    <p className="text-center text-lg text-gray-400 pt-5">{textContent}</p>
  );
};

export default UiSmallText;
