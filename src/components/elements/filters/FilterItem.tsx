const FilterItem = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: string
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} py-1 px-2 bg-gray-400 bg-opacity-0 text-gray-300 hover:bg-opacity-20 rounded-md cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default FilterItem;
