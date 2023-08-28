import React from "react";
import { LeaveChatButtonProps } from "./types";
import { useTranslation } from "react-i18next";

export const LeaveChatButton: React.FC<LeaveChatButtonProps> = ({
  handleLeaveChat,
}) => {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-4 left-4">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold m-2 py-2 px-4 rounded"
        onClick={handleLeaveChat}
      >
        {t("components.leaveChatButton.leaveChat")}
      </button>
    </div>
  );
};
