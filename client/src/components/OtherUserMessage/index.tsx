import React from "react";
import { OtherUserMessageProps } from "./types";

export const OtherUserMessage: React.FC<OtherUserMessageProps> = ({
  message,
}) => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 text-white font-bold">
          {message.name.substring(0, 2)}
        </div>
        <div className="relative ml-3 text-md bg-white py-2 px-4 shadow rounded-xl">
          <div>{message.text}</div>
        </div>
      </div>
    </div>
  );
};
