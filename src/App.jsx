import { useState, useEffect, Fragment } from "react";
import { Logo } from "./assets";
import { Card, SidebarButtons } from "./components";

import { useTranslation } from "react-i18next";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [theme, setTheme] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    if (lang === "en") {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  const changeFont = () => {
    return isRunning ? "font-main" : "!font-fa";
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div
        className={`font-main max-w-[2160px] dark:bg-slate-800 dark:max-w-[2160px] mx-auto dark:min-h-screen ${changeFont()}`}
      >
        <div className="flex flex-row mx-3">
          <div className="flex flex-col w-2/3 md:w-full md:h-screen">
            <div className="flex items-center justify-start w-full mt-8 mb-4">
              <div className="flex flex-row items-center justify-center gap-x-3">
                <Menu
                  as="div"
                  className="relative flex items-center justify-center p-3 transition-colors bg-gray-100 rounded-full dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200"
                >
                  <Menu.Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="44"
                      viewBox="0 0 34 44"
                      fill="none"
                      className="w-6 h-6"
                    >
                      <path
                        d="M17 19.5C19.3206 19.5 21.5462 18.5781 23.1872 16.9372C24.8281 15.2962 25.75 13.0706 25.75 10.75C25.75 8.42936 24.8281 6.20376 23.1872 4.56282C21.5462 2.92187 19.3206 2 17 2C14.6794 2 12.4538 2.92187 10.8128 4.56282C9.17187 6.20376 8.25 8.42936 8.25 10.75C8.25 13.0706 9.17187 15.2962 10.8128 16.9372C12.4538 18.5781 14.6794 19.5 17 19.5ZM12 27H22C24.6522 27 27.1957 28.0536 29.0711 29.9289C30.9464 31.8043 32 34.3478 32 37V42H2V37C2 34.3478 3.05357 31.8043 4.92893 29.9289C6.8043 28.0536 9.34784 27 12 27Z"
                        stroke="#636363"
                        className="dark:stroke-white"
                        stroke-width="3.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-left bg-gray-100 rounded-md shadow-lg dark:bg-gray-700 top-14 w-64 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-2">
                        <Menu.Item>
                          <div className="flex flex-row items-center mx-4">
                            <div className="flex items-center justify-center p-3 rounded-full mx-1 h-12 bg-gray-200 dark:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="44"
                                viewBox="0 0 34 44"
                                fill="none"
                                className="w-6 h-6"
                              >
                                <path
                                  d="M17 19.5C19.3206 19.5 21.5462 18.5781 23.1872 16.9372C24.8281 15.2962 25.75 13.0706 25.75 10.75C25.75 8.42936 24.8281 6.20376 23.1872 4.56282C21.5462 2.92187 19.3206 2 17 2C14.6794 2 12.4538 2.92187 10.8128 4.56282C9.17187 6.20376 8.25 8.42936 8.25 10.75C8.25 13.0706 9.17187 15.2962 10.8128 16.9372C12.4538 18.5781 14.6794 19.5 17 19.5ZM12 27H22C24.6522 27 27.1957 28.0536 29.0711 29.9289C30.9464 31.8043 32 34.3478 32 37V42H2V37C2 34.3478 3.05357 31.8043 4.92893 29.9289C6.8043 28.0536 9.34784 27 12 27Z"
                                  stroke="#636363"
                                  className="dark:stroke-white"
                                  stroke-width="2.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="flex flex-col gap-y-1 p-2">
                              <p className="dark:text-gray-100 text-slate-800">{t("userBtn.username")}</p>
                              <p className="dark:text-gray-100 text-slate-800">{t("userBtn.balance")}</p>
                            </div>
                          </div>
                        </Menu.Item>
                      </div>
                      <div className="border-[0.01px] dark:border-slate-600 mx-4 rounded-lg border-gray-200"></div>
                      <div className="py-2">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:rounded-md hover:rounded-md hover:bg-gray-200 dark:text-gray-100"
                                  : "text-gray-700",
                                "flex flex-row items-center mx-4 px-2 gap-x-2"
                              )}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                className="w-4 h-4"
                              >
                                <path
                                  d="M5.55556 14.4444V32.2222C5.55556 32.6937 5.74286 33.1459 6.07625 33.4793C6.40965 33.8127 6.86184 34 7.33333 34H14.4444V25.1111C14.4444 24.6396 14.6317 24.1874 14.9651 23.854C15.2985 23.5206 15.7507 23.3333 16.2222 23.3333H19.7778C20.2493 23.3333 20.7015 23.5206 21.0349 23.854C21.3683 24.1874 21.5556 24.6396 21.5556 25.1111V34H28.6667C29.1382 34 29.5903 33.8127 29.9237 33.4793C30.2571 33.1459 30.4444 32.6937 30.4444 32.2222V14.4444M2 18L18 2L34 18"
                                  stroke="#3F3F46"
                                  className="dark:stroke-white"
                                  stroke-width="3.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <div className="mt-1 py-2 text-sm dark:text-gray-100">
                              {t("userBtn.homeTitle")}
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:rounded-md hover:rounded-md hover:bg-gray-200 dark:text-gray-100"
                                  : "text-gray-700",
                                "flex flex-row items-center mx-4 px-2 gap-x-2"
                              )}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="31"
                                viewBox="0 0 38 31"
                                fill="none"
                                className="w-4 h-4"
                              >
                                <path
                                  d="M26.1111 27.8889C25.4388 24.8459 22.5106 22.5556 19 22.5556C15.4894 22.5556 12.5612 24.8459 11.8889 27.8889M19 15.4444H19.0178M19.1115 4.88932L18.8885 4.66624C18.2736 4.05129 17.966 3.74382 17.6073 3.52395C17.2891 3.329 16.9422 3.18533 16.5796 3.09824C16.1703 3 15.7355 3 14.8658 3H8.68889C6.6976 3 5.70194 3 4.94137 3.38754C4.27234 3.72841 3.72841 4.27234 3.38754 4.94137C3 5.70194 3 6.69758 3 8.68889V22.2C3 24.1913 3 25.187 3.38754 25.9476C3.72841 26.6165 4.27234 27.1605 4.94137 27.5013C5.70194 27.8889 6.69758 27.8889 8.68889 27.8889H29.3111C31.3024 27.8889 32.2981 27.8889 33.0587 27.5013C33.7276 27.1605 34.2716 26.6165 34.6124 25.9476C35 25.187 35 24.1913 35 22.2V12.2444C35 10.2532 35 9.25749 34.6124 8.49692C34.2716 7.82789 33.7276 7.28396 33.0587 6.94309C32.2981 6.55556 31.3024 6.55556 29.3111 6.55556H23.1342C22.2645 6.55556 21.8297 6.55556 21.4204 6.45732C21.0578 6.37022 20.7109 6.22656 20.3927 6.03161C20.034 5.81173 19.7264 5.50427 19.1115 4.88932ZM20.7778 15.4444C20.7778 16.4263 19.9819 17.2222 19 17.2222C18.0181 17.2222 17.2222 16.4263 17.2222 15.4444C17.2222 14.4626 18.0181 13.6667 19 13.6667C19.9819 13.6667 20.7778 14.4626 20.7778 15.4444Z"
                                  className="dark:stroke-white"
                                  stroke="#3F3F46"
                                  stroke-width="4.33"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <div className="mt-1 py-2 text-sm dark:text-gray-100">
                              {t("userBtn.coursesTitle")}
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:rounded-md hover:rounded-md hover:bg-gray-200 dark:text-gray-100"
                                  : "text-gray-700",
                                "flex flex-row items-center mx-4 px-2 gap-x-2"
                              )}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="25"
                                viewBox="0 0 36 25"
                                fill="none"
                                className="w-4 h-4"
                              >
                                <path
                                  d="M5.55556 12.667C5.55556 10.3449 4.07145 8.3693 2 7.63716V4.84444C2 3.8488 2 3.35097 2.19376 2.97068C2.36421 2.63618 2.63618 2.36421 2.97068 2.19376C3.35097 2 3.8488 2 4.84444 2H31.1556C32.1513 2 32.6491 2 33.0293 2.19376C33.3639 2.36421 33.6357 2.63618 33.8062 2.97068C34 3.35097 34 3.8488 34 4.84444V7.63682C31.9285 8.36896 30.4444 10.3449 30.4444 12.667C30.4444 14.9892 31.9285 16.9644 34 17.6965V20.4889C34 21.4846 34 21.9824 33.8062 22.3627C33.6357 22.6972 33.3639 22.9691 33.0293 23.1396C32.6491 23.3333 32.1513 23.3333 31.1556 23.3333H4.84444C3.8488 23.3333 3.35097 23.3333 2.97068 23.1396C2.63618 22.9691 2.36421 22.6972 2.19376 22.3627C2 21.9824 2 21.4846 2 20.4889V17.6969C4.07145 16.9648 5.55556 14.9892 5.55556 12.667Z"
                                  className="dark:stroke-white"
                                  stroke="#3F3F46"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <div className="mt-1 py-2 text-sm dark:text-gray-100">
                              {t("userBtn.ticketsTitle")}
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="border-[0.01px] dark:border-slate-600 mx-4 rounded-lg border-gray-200"></div>
                      <div className="py-2">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "dark:bg-gray-700 transition-colors dark:hover:bg-rose-600 dark:hover:rounded-md hover:rounded-md hover:bg-rose-300 dark:text-gray-100"
                                  : "text-gray-700",
                                "flex flex-row items-center mx-4 px-2 gap-x-2"
                              )}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-4 h-4"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  className="dark:stroke-white"
                                  stroke="#3F3F46"
                                  d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"
                                />
                              </svg>
                              <div className="mt-1 py-2 text-sm dark:text-gray-100">
                              {t("userBtn.exitTitle")}
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  onClick={handleThemeToggle}
                  className="flex items-center justify-center w-12 h-12 p-3 transition-colors bg-gray-100 rounded-full dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="34"
                    viewBox="0 0 32 34"
                    fill="none"
                    id="moon"
                    className={`w-6 h-6" + ${
                      theme === "light" ? "" : "hidden"
                    }`}
                  >
                    <path
                      d="M15.1374 9.50001C15.1374 6.8653 15.8327 4.27648 17.1562 2.00001H17.0133C14.3793 1.99767 11.7912 2.68896 9.50918 4.00432C7.22717 5.31969 5.33176 7.21276 4.01358 9.49314C2.6954 11.7735 2.00092 14.3608 2 16.9948C1.99908 19.6287 2.69175 22.2165 4.00834 24.4978C5.32492 26.7791 7.21901 28.6735 9.50009 29.9904C11.7812 31.3074 14.3688 32.0005 17.0028 32C19.6367 31.9995 22.2241 31.3055 24.5047 29.9876C26.7853 28.6698 28.6787 26.7747 29.9944 24.4929C26.0422 24.4553 22.2646 22.8593 19.4826 20.0518C16.7006 17.2444 15.1391 13.4524 15.1374 9.50001Z"
                      stroke="#636363"
                      className="dark:stroke-white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    id="sun"
                    className={`w-6 h-6" + ${
                      theme === "light" ? "hidden" : ""
                    }`}
                  >
                    <path
                      d="M20 6V2M20 38V34M10.1 10.1L7.272 7.272M32.728 32.728L29.9 29.9M6 20H2M38 20H34M10.1 29.9L7.272 32.728M32.728 7.272L29.9 10.1M28 20C28 22.1217 27.1571 24.1566 25.6569 25.6569C24.1566 27.1571 22.1217 28 20 28C17.8783 28 15.8434 27.1571 14.3431 25.6569C12.8429 24.1566 12 22.1217 12 20C12 17.8783 12.8429 15.8434 14.3431 14.3431C15.8434 12.8429 17.8783 12 20 12C22.1217 12 24.1566 12.8429 25.6569 14.3431C27.1571 15.8434 28 17.8783 28 20Z"
                      stroke="white"
                      stroke-width="3.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <Menu
                  as="div"
                  className="relative flex items-center justify-center p-3 transition-colors bg-gray-100 rounded-full dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200"
                >
                  <Menu.Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      className="w-6 h-6"
                    >
                      <path
                        d="M12.816 3.492C12.816 11.876 20 6.812 22 15C22 16.656 24 18 26 18C28 18 30 16.656 30 15C30 14.2044 30.3161 13.4413 30.8787 12.8787C31.4413 12.3161 32.2043 12 33 12H36M3.96 12.942C12 17.438 7.512 21.374 13.716 24.232C20.202 27.22 17.842 38 17.842 38M36.574 26H32C30.4087 26 28.8826 26.6321 27.7573 27.7574C26.6321 28.8826 26 30.4087 26 32V36M38 20C38 22.3638 37.5344 24.7044 36.6298 26.8883C35.7252 29.0722 34.3994 31.0565 32.7279 32.7279C31.0565 34.3994 29.0722 35.7252 26.8883 36.6298C24.7044 37.5344 22.3638 38 20 38C17.6362 38 15.2956 37.5344 13.1117 36.6298C10.9278 35.7252 8.94353 34.3994 7.27208 32.7279C5.60062 31.0565 4.27475 29.0722 3.37017 26.8883C2.46558 24.7044 2 22.3638 2 20C2 15.2261 3.89642 10.6477 7.27208 7.27208C10.6477 3.89642 15.2261 2 20 2C24.7739 2 29.3523 3.89642 32.7279 7.27208C36.1036 10.6477 38 15.2261 38 20Z"
                        stroke="#636363"
                        className="dark:stroke-white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-gray-100 rounded-md shadow-lg dark:bg-gray-700 top-14 w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={() => handleChangeLang("en")}
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 dark:text-gray-100"
                              )}
                            >
                              English
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={() => handleChangeLang("fa")}
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 dark:text-gray-100"
                              )}
                            >
                              فارسی
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="w-full h-full md:h-min bg-gray-100 p-7 rounded-3xl dark:bg-gray-900 shrink-0">
              <Card />
              <div className="bg-white dark:bg-gray-800 p-3.5 md:p-4.5 rounded-2xl mt-3">
                <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-200 dark:border-b-gray-700">
                  <span className="md:text-xl text-zinc-700 dark:text-white w-full flex justify-end px-4">
                    {t("boxQA.title")}
                  </span>
                </div>
                <div>
                  <div className="text-zinc-700 dark:text-white font-light mt-7 mb-2 leading-7 text-center">
                    {t("boxQA.placeholder")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-1/3 mt-8 md:hidden">
            <img
              src={Logo}
              alt="Logo Image"
              className="md:block w-[150px] h-[99px] lg:hidden"
            />
            <SidebarButtons />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
