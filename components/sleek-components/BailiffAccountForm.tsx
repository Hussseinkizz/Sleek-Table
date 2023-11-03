import { useEffect, useState } from "react";
import AccountEditForm from "./AccountEditForm";
import AccountView from "./AccountView";
import { $Bailiff } from "data/data_types";

// use a sample avatar
import sampleAvatar from "../public/assets/me.jpg";
import sampleDocumentShot from "../public/assets/SampleCertificateOfIncorporation.jpg";

//NOTE - The bailiff image apparently has any type but in production it should be a string of the image url
const BailiffAccount = {
  id: "3j2k", // uuid
  email: "",
  password: "ssksap2k32k",
  bailiff_name: "John Doe",
  bailiff_image_url: "",
  // bailiff_image_url:
  //   "https://fastly.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE",
  phone_number: "0704353301",
  rating: 1,
  tin_number: 0,
  company_doc_url: "",
  trading_license_image_url: sampleDocumentShot,
  highcourt_license_image_url: "",
};

interface Props {}

const BailiffAccountForm = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bailiff, setBailiff] = useState<any>();
  // const [bailiff, setBailiff] = useState<$Bailiff>();

  const handleAccountChange = (newData: $Bailiff) => {
    setBailiff(newData);
    setIsEditing(false);
  };

  useEffect(() => {
    // fetch Bailiff Data onLoad from api or backend
    // show loader or catch errors if cant fetch data
    setBailiff(BailiffAccount);
  }, []);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-4">
      {!isEditing ? (
        <AccountView
          accountDetials={bailiff!}
          onEdit={() => setIsEditing(true)}
        />
      ) : (
        <AccountEditForm
          onDetailsChange={(newData: $Bailiff) => handleAccountChange(newData)}
          accountDetials={bailiff!}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </section>
  );
};

export default BailiffAccountForm;
