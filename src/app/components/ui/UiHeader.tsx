interface HeaderProps {
  headerContent: React.ReactNode;
}

const UiHeader = ({ headerContent }: HeaderProps) => {
  return (
    <h1 className="text-4xl font-extrabold text-center pt-5">
      {headerContent}
    </h1>
  );
};

export default UiHeader;
