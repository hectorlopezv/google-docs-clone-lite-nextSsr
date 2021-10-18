import { FC } from "react";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import { useRouter } from "next/router";
interface props {
  id: string;
  fileName: string;
  date: string;
}
const DocumentRow: FC<props> = ({ id, fileName, date }) => {
  const router = useRouter();
  const redirectHandler = () => {
    router.push(`/doc/${id}`);
  };
  return (
    <div
      className="flex items-center p-4 rounded-lg hover:bg-gray-100
     text-gray-700 text-sm cursor-pointer max-w-3xl mx-auto"
      onClick={redirectHandler}
    >
      <Icon name="article" size="3xl" color="blue" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
      <p>{date}</p>

      <Button
        color="gray"
        buttonType="outline"
        rounded
        iconOnly
        ripple="dark"
        className="border-0"
      >
        <Icon name="more_vert" size="3xl" />
      </Button>
    </div>
  );
};

export default DocumentRow;
