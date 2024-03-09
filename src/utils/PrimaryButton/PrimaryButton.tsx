type TChildren = {
  children: string;
  onClick?: () => void;
};

const PrimaryButton = ({ children }: TChildren) => {
  return (
    <button className="bg-secondaryColor hover:bg-transparent hover:outline hover:outline-[1px] hover:outline-secondaryColor hover:text-secondaryColor px-10 py-2 text-white font-semibold transition-all">
      {children}
    </button>
  );
};

export default PrimaryButton;
