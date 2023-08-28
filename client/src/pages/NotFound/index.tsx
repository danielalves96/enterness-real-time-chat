import React from "react";
import { useTranslation } from "react-i18next";
import { PiSealWarningBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <section className="bg-gray-900 ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-gray-800">
            <PiSealWarningBold size={40} />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            {t("pages.notFound.errorMessage")}
          </h1>
          <p className="mt-4 text-gray-400">{t("pages.notFound.pageError")}</p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={goToHome}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto hover:bg-blue-500 bg-blue-600"
            >
              {t("pages.notFound.backToHome")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
