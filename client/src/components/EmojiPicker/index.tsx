import React from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Emoji } from "./types";

interface EmojiPickerProps {
  onEmojiSelect: (emoji: Emoji) => void;
}

const EmojiPickerComponent: React.FC<EmojiPickerProps> = ({
  onEmojiSelect,
}) => {
  return (
    <div className="absolute bottom-8 right-4">
      <Picker
        data={data}
        onEmojiSelect={onEmojiSelect}
        locale="pt"
        theme="dark"
      />
    </div>
  );
};

export default EmojiPickerComponent;
