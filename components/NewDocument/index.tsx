import { FC } from "react";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
interface props {
  setShowModal: any;
}
const NewDocument: FC<props> = ({ setShowModal }) => {
  return (
    <section className="bg-[#F8F9FA] pb-10 px-10">
      <div className="max-w-3xl mx-auto">
        <div className="py-6 flex items-center justify-between">
          <h2 className="text-gray-700 text-md">Start a new document</h2>

          <Button
            color="gray"
            buttonType="outline"
            iconOnly={true}
            ripple="dark"
            className="h-20 w-20 border-0"
          >
            <Icon name="more_vert" size="3xl" color="gray" />
          </Button>
        </div>

        <div>
          <div
            role="button"
            onClick={() => setShowModal(true)}
            onKeyDown={(e) => e.key === "Enter" && setShowModal(true)}
            className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700"
          >
            <Image
              src={
                "https://drive.google.com/uc?export=view&id=1CyTR4O6AYDOqDoOJEAe6ShiMYeIiW5uK"
              }
              layout="fill"
              alt="add new document"
            />
          </div>

          <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
        </div>
      </div>
    </section>
  );
};

export default NewDocument;
