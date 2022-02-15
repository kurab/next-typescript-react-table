const PrimaryButton = ({
  name,
  callback,
}: {
  name: string;
  callback: (name: string) => void;
}) => {
  return (
    <button className="btn" onClick={() => callback(name)}>
      {name}
    </button>
  );
};

export default PrimaryButton;
