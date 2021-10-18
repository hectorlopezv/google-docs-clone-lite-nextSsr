import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { doc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../store";
import { useRouter } from "next/router";
const useDocumentOnce = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  const user = session!.user;
  const [isLoading, setloading] = useState(false);
  const [snapshot, setsnapshot] = useState<null | {}>(null);
  useEffect(() => {
    const getDataOnce = async () => {
      setloading(true);
      const ID: string = session!.user?.email as string;
      const userDoc = collection(db, "userDocs");
      const newCityRef = doc(userDoc, "docs");
      const newDoc = collection(newCityRef, ID);
      const q = query(newDoc, where("fileName", "==", id));
      const querySnapshot: any = await getDocs(q);
      let data = {};
      querySnapshot.forEach((doc: any) => {
        data = {
          ...doc.data(),
          fileName: doc.data().fileName,
          date: doc.data().timestamp.toDate().toLocaleDateString(),
        };
      });
      setsnapshot(data);
      setloading(false);
    };
    getDataOnce();
  }, []);

  return { snapshot, isLoading };
};
export default useDocumentOnce;
