import dynamic from "next/dynamic";
import { useEffect, useState, memo } from "react";
import "@nick4fake/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import useDocumentOnce from "../../hooks/useDocumentOnce";
import { convertFromRaw, convertToRaw } from "draft-js";
import { db } from "../../store";
import { useRouter } from "next/router";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
const Editor = dynamic(
  () =>
    import("@nick4fake/react-draft-wysiwyg").then(
      (module: any) => module.Editor
    ),
  {
    ssr: false,
  }
);

function TextEditor({ session }: { session: any }) {

  const router = useRouter();
  const { id } = router.query;
  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );

  const { snapshot } = useDocumentOnce();

  // db.collection("userDocs").doc(user!.email).collection("docs").doc(id)

  useEffect(() => {
    const dataEditor: any = snapshot;

    if (dataEditor?.editorState) {
  
      setEditorState(
        EditorState.createWithContent(convertFromRaw(dataEditor?.editorState))
      );
    }
  }, [snapshot]);

  const onEditorStateChange = async (editorState: EditorState) => {

    setEditorState(editorState);

    const ID: string = session!.user?.email as string;
    //create collection for users documents
    const userDoc = collection(db, "userDocs");
    const newCityRef = doc(userDoc, "docs");
    const newDoc = collection(newCityRef, ID);
    const newRef = doc(newDoc, id as string);
    const data = {
      editorState: convertToRaw(editorState.getCurrentContent()),
    };

    await setDoc(newRef, data, { merge: true });
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        //@ts-ignore
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border  min-h-screen"
      />
    </div>
  );
}

export default memo(TextEditor);
