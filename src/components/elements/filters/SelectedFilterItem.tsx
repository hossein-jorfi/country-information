import CrossIcon from "@/icons/icons8-cross-50.png";
import Image from "next/image";

type SelectedFilterItemProps = {
  onClick?: () => void;
  children: string;
};

const SelectedFilterItem = ({
  children,
  onClick = () => {},
}: SelectedFilterItemProps) => {
  return (
    <div
      onClick={onClick}
      className="
      bg-sky-500 bg-opacity-70
      p-1.5 
      rounded-xl
      cursor-pointer
      hover:outline hover:bg-opacity-80
      outline-2
      "
    >
      <div className="flex items-center">
        <p>{children}</p>
        <Image src={CrossIcon} alt="cross icon" width={20} height={20} />
      </div>
    </div>
  );
};

export default SelectedFilterItem;
