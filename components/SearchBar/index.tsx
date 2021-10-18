import { FC } from "react";
import Icon from "@material-tailwind/react/Icon";

interface props {}
const SearchBar: FC<props> = () => {
  return (
    <div
      className="mx-5 rounded-lg flex flex-grow items-center px-5 py-2 
    bg-gray-100 text-gray-600 md:mx-20 focus-within:text-gray-600 focus-within:shadow-md"
    >
      <Icon name="search" size="3xl" color="gray" />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        className="flex-grow px-5 text-small bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;
