import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeProps } from "./types";
import imgUrl from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";

const roomOptions = [
  { value: "Geral", label: "Geral" },
  { value: "Engenharia", label: "Engenharia" },
  { value: "Marketing", label: "Marketing" },
  { value: "Vendas", label: "Vendas" },
];

const Home: React.FC<HomeProps> = ({ socket }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName || !room) {
      return;
    }

    socket.emit("newUser", { userName, socketID: socket.id, room });

    navigate({
      pathname: "chat",
      search: `?username=${userName}&room=${room}`,
    });
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-center">
        <div className="flex items-center mb-6 text-2xl font-semibold text-white">
          <img className="w-8 h-8 mr-2" src={imgUrl} alt="logo" />
          {t("pages.home.appName")}
        </div>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              {t("pages.home.loginToAccessChat")}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="room"
                  className="block mb-2 text-sm font-medium text-white text-start"
                >
                  {t("pages.home.selectSomeRoom")}
                </label>
                <select
                  id="room"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  required
                >
                  <option value=""></option>
                  {roomOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-white text-start"
                >
                  {t("pages.home.typeYourName")}
                </label>
                <input
                  type="text"
                  minLength={4}
                  name="username"
                  id="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                {t("pages.home.signIn")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
