import React, { useRef, useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";

interface Props {
  title: string;
  color?: string;
  onUpload: (event: any) => void;
}

const SimpleInlineDocUploader = (props: Props) => {
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  const [title, setTitle] = useState(props.title);

  let docRef = useRef<any>();

  const handleFileChange = (event: any) => {
    const selectedFile = event?.target?.files[0];
    if (selectedFile) {
      setSelectedDoc(selectedFile);
      setTitle(selectedFile?.name);
      props.onUpload(selectedDoc);
    } else {
      console.error("Couldn't pick file!");
    }
  };

  let colorCode = props.color ? props.color : "blue";

  return (
    <div
      className={`_hover-settings flex w-full cursor-pointer items-center justify-start gap-2 rounded-lg bg-${colorCode}-100 px-4 py-2 text-${colorCode}-500 hover:text-${colorCode}-400`}
      onClick={() => docRef?.current?.click()}
    >
      {selectedDoc ? (
        <div className="flex gap-4">
          <AiFillFileAdd className="h-5 w-5" />
          <span className="flex">{selectedDoc?.name}</span>
        </div>
      ) : (
        <div className="flex gap-4">
          <AiFillFileAdd className="h-5 w-5" />
          <span className="flex">upload {title} doc</span>
        </div>
      )}
      <input
        ref={docRef}
        id="file-picker"
        type="file"
        className="hidden"
        accept=".jpg, .jpeg, .png, .gif, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default SimpleInlineDocUploader;
