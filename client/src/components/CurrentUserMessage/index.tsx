import React from "react";
import { CurrentUserMessageProps } from "./types";

export const CurrentUserMessage: React.FC<CurrentUserMessageProps> = ({
  message,
}) => {
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-800 flex-shrink-0 text-white font-bold">
          {message.name.substring(0, 2)}
        </div>
        <div className="relative mr-3 text-md bg-indigo-100 py-2 px-4 shadow rounded-xl ">
          <div>{message.text}</div>
        </div>
      </div>
    </div>
  );
};
