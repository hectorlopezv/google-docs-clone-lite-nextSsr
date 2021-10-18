import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { doc, collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../store";
const useCollectionOnce = () => {
  const { data: session } = useSession();
  const [isLoading, setloading] = useState(false);
  const [snapshot, setsnapshot] = useState<null | any[]>(null);
  useEffect(() => {
    const getDataOnce = async () => {
      setloading(true);
      const ID: string = session!.user?.email as string;
      const userDoc = collection(db, "userDocs");
      const newCityRef = doc(userDoc, "docs");
      const newDoc = collection(newCityRef, ID);
     
      const q = query(newDoc, orderBy("timestamp", "desc"));
      const querySnapshot: any = await getDocs(q);
      const formatData: any[] = [];
      querySnapshot.forEach((doc: any) => {
        formatData.push({
          key: doc.id,
          id: doc.id,
          fileName: doc.data().fileName,
          date: doc.data().timestamp.toDate().toLocaleDateString(),
        });
      });
      setsnapshot(formatData);
      setloading(false);
    };
    getDataOnce();
  }, []);

  return { snapshot, isLoading };
};
export default useCollectionOnce;
