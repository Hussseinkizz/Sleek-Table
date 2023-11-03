import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { bailiffs } from "data/UI_data";
import React from "react";
import * as Icons from "react-icons/hi";
import RatingStars from "./RatingStars";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export default function BailiffSelectModal(props: Props) {
  const [isSelected, setIsSelected] = useState("");

  const handleSelection = (val: string) => {
    setIsSelected(val);
    props.onSelect(val);
    props.onClose();
    // console.log(isSelected);
  };

  return (
    <section>
      <Modal show={props.isOpen} size="md" popup={true} onClose={props.onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Assign To Any Of Bailiff Below!
            </h3>
            <div className="p2 flex h-full w-full flex-col items-start justify-between gap-2 overflow-y-auto">
              {bailiffs.map((bailiff) => (
                <div
                  key={bailiff.id}
                  className={`group flex w-full items-center justify-start gap-2 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white ${
                    isSelected === bailiff.id
                      ? "bg-blue-200 text-blue-500"
                      : "bg-blue-100"
                  }`}
                  onClick={() => handleSelection(bailiff.id)}
                >
                  <span className="flex">
                    <Icons.HiUser className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="flex">{bailiff.bailiff_name}</span>
                    <span className="flex">
                      <RatingStars rating={bailiff.bailiff_rating} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
