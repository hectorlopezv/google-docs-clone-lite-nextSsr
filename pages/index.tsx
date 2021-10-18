import type { NextPage } from "next";

import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import NewDocument from "../components/NewDocument";
import Icon from "@material-tailwind/react/Icon";
import { getSession } from "next-auth/react";
import ModalPop from "../components/modalPopUp";
import useCollectionOnce from "../hooks/useCollectionConce";
import DocumentRow from "../components/DocumentRow";
interface props {
  session: any;
}
const Home: NextPage<props> = () => {
  const [showModal, setShowModal] = useState(false);
  const { snapshot } = useCollectionOnce();
  return (
    <div className="">
      <Head>
        <title>Google Docs Lite Clone</title>
        <meta name="description" content="google docs lite clone" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ModalPop showModal={showModal} setShowModal={setShowModal} />
      <NewDocument setShowModal={setShowModal} />
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
        {snapshot?.map((item: any) => {
          return (
            <DocumentRow
              key={item.key}
              id={item.id}
              date={item.date}
              fileName={item.fileName}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Home;
export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: { destination: "/auth/signin" },
    };
  }
  return { props: { session: await getSession(context) } };
}
