import type { NextPage } from "next";
import Head from "next/head";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { db } from "../../store";
import Editor from "../../components/TextEditor";
import Image from "next/image";
import {
  doc,
  collection,
  getDocs,
  query,
  orderBy,
  where,
} from "firebase/firestore";
interface props {
  session: any;
  redirect?: any;
  data: any;
  image: string;
}
const Doc: NextPage<props> = ({ data, session, image }) => {
  const router = useRouter();
  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <Icon name="description" size="5xl" color="blue" />
        </span>
        <div className="flex-grow px-2">
          <h2>{data.fileName}</h2>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>

        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          className="hidden md:inline-flex h-10 mr-4"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >
          <Icon name="people" size="md" /> SHARE
        </Button>
        <Image
          className="rounded-full cursor-pointer h-10 w-10"
          src={image}
          alt="user profile Image"
          height={40}
          width={40}
        />
      </header>
      <Editor session={session} />
    </div>
  );
};

export default Doc;
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  const user = session?.user;
  const { params } = context;
  const documentId = params.id;
  if (!session) {
    return {
      redirect: { destination: "/auth/signin" },
    };
  }
  const ID: string = session!.user?.email as string;
  const userDoc = collection(db, "userDocs");
  const newCityRef = doc(userDoc, "docs");
  const newDoc = collection(newCityRef, ID);
  const q = query(newDoc, where("fileName", "==", documentId));
  const querySnapshot: any = await getDocs(q);
  let data = {};
  querySnapshot.forEach((doc: any) => {
    data = {
      fileName: doc.data().fileName,
      date: doc.data().timestamp.toDate().toLocaleDateString(),
    };
  });
  return {
    props: {
      image: user!.image,
      data: data,
      session: await getSession(context),
    },
  };
};
