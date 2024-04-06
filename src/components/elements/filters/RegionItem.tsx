const RegionItem = ({ region }: { region: string }) => {
  return (
    <div className="p-2 bg-gray-400 bg-opacity-0 text-gray-300 hover:bg-opacity-20 rounded-md cursor-pointer">
      {region}
    </div>
  );
};

export default RegionItem;
