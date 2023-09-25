import { useTranslation } from "react-i18next";


const SidebarButtons = () => {
  const [t] = useTranslation("global");

  return (
    <div className="w-[90%] mt-6 flex flex-col gap-y-3 md:hidden">
      <div className="flex flex-row items-center w-full p-3 transition-colors bg-green-400 rounded-2xl hover:bg-green-500 gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
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
        <p className={"font-bold text-2xl text-white mt-1.5"}>{t("sidebar.homeMenu")}</p>
      </div>
      <div className="flex flex-row items-center w-full p-3 transition-colors bg-gray-100 rounded-2xl dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="31"
          viewBox="0 0 38 31"
          fill="none"
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
        <p className="font-bold text-2xl text-zinc-700 dark:text-white  mt-1.5">{t("sidebar.courses")}</p>
      </div>
      <div className="flex flex-row items-center w-full p-3 transition-colors bg-gray-100 rounded-2xl dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="25"
          viewBox="0 0 36 25"
          fill="none"
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
        <p className="font-bold text-2xl text-zinc-700 dark:text-white  mt-1.5">{t("sidebar.tickets")}</p>
      </div>
      <div className="flex flex-row items-center w-full p-3 transition-colors bg-gray-100 rounded-2xl dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          >
          <path
            d="M12.6667 18L16.2222 21.5556L23.3333 14.4444M18 2L21.3957 5.32706L26 4.14359L27.2772 8.72276L31.8564 10L30.6729 14.6043L34 18L30.6729 21.3957L31.8564 26L27.2772 27.2772L26 31.8564L21.3957 30.6729L18 34L14.6043 30.6729L10 31.8564L8.72276 27.2772L4.14359 26L5.32706 21.3957L2 18L5.32706 14.6043L4.14359 10L8.72276 8.72276L10 4.14359L14.6043 5.32706L18 2Z"
            className="dark:stroke-white"
            stroke="#3F3F46"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="font-bold text-2xl text-zinc-700  dark:text-white mt-1.5">
        {t("sidebar.requestCertification")}
        </p>
      </div>
      <div className="w-full p-3 rounded-2xl bg-[#f00] transition-colors hover:bg-[#c30000] flex flex-row items-center gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          className="mx-1"
        >
          <g clip-path="url(#a)" fill="#fff">
            <path d="M6.933 0C3.13 0 0 3.13 0 6.933v18.134C0 28.87 3.13 32 6.933 32h9.151c3.534 0 6.483-2.7 6.885-6.133h-4.332c-.326 1.101-1.32 1.866-2.553 1.866h-9.15c-1.515 0-2.667-1.152-2.667-2.666V6.933c0-1.514 1.152-2.666 2.666-2.666h9.151c1.233 0 2.227.764 2.553 1.866h4.332C22.567 2.7 19.618 0 16.084 0h-9.15Z" />
            <path d="M25.433 9.6a2.133 2.133 0 0 0-1.509 3.642l.625.625H8.732a2.133 2.133 0 0 0 0 4.266H24.55l-.625.625a2.134 2.134 0 1 0 3.017 3.017l3.882-3.882A2.133 2.133 0 0 0 32 16a2.133 2.133 0 0 0-1.198-1.915l-3.86-3.86a2.134 2.134 0 0 0-1.51-.625Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h32v32H0z" />
            </clipPath>
          </defs>
        </svg>
        <p className="font-bold text-2xl text-white mt-1.5">{t("sidebar.logOut")}</p>
      </div>
    </div>
  );
};

export default SidebarButtons;
