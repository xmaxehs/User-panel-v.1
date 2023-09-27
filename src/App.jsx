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
        className={`font-main max-w-[1440px] dark:bg-slate-800 dark:max-w-[2160px] mx-auto dark:min-h-screen ${changeFont()}`}
      >
        <div className="flex flex-row mx-3">
          <div className="flex flex-col w-2/3 md:w-full md:h-screen">
            <div className="flex items-center justify-start w-full mt-8 mb-4">
              <div className="flex flex-row items-center justify-center gap-x-3">
                <div className="flex items-center justify-center p-3 transition-colors bg-gray-100 rounded-full dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200">
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
                </div>
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
