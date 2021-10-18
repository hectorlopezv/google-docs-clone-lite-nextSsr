import { FC } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import SearchBar from "../SearchBar";
import Image from "next/image";
import { signOut } from "next-auth/react";
interface props {}
const Header: FC<props> = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 text-gray-700 text-2xl cursor-pointer">Docs</h1>
      <SearchBar />
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>
      
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0"
        onClick={signOut}
      >
        <Image
          src={"/images/profile_image.jpg"}
          className="hidden md:inline-flex cursor-pointer h-12 w-12 rounded-full ml-2"
          alt="user profile image"
          height={55}
          width={55}
        />
      </Button>
    </div>
  );
};

export default Header;
