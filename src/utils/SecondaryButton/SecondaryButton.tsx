import { cn } from "@/lib/utils";

type TChildren = {
  children: string;
  onClick?: () => void;
};

const SecondaryButton = ({ children, onClick }: TChildren) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "hover:bg-secondaryColor outline outline-[1px] outline-secondaryColor text-secondaryColor hover:text-white font-semibold  px-10 py-2  transition-all"
      )}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
