import { FC, useState } from "react";
import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../store";
interface props {
  showModal: any;
  setShowModal: any;
}
const ModalPop: FC<props> = ({
  showModal = false,
  setShowModal = () => {},
}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [input, setinput] = useState("");
  const createDocument = async () => {
    if (!input) return;
    const ID: string = session!.user?.email as string;
    //create collection for users documents
    const userDoc = collection(db, "userDocs");
    const newCityRef = doc(userDoc, "docs");
    const newDoc = collection(newCityRef, ID);
    const newRef = doc(newDoc, input);
    const data = {
      fileName: input,
      timestamp: serverTimestamp(),
    };

    await setDoc(newRef, data);

    setShowModal(false);
    setinput("");
    router.push(`/doc/${input}`);
  };
  const modalTooogler = () => {
    setShowModal(false);
  };
  return (
    <Modal size="sm" active={showModal} toggler={modalTooogler}>
      <ModalBody>
        <input
          type="text"
          value={input}
          onChange={(e: any) => setinput(e.target.value)}
          className="outline-none w-full"
          placeholder="Enter name of document...."
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="blue"
          buttonType="link"
          onClick={(e: any) => setShowModal(false)}
        >
          Cancel
        </Button>
        <Button color="blue" onClick={createDocument} ripple="ligth">
          Create
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalPop;
