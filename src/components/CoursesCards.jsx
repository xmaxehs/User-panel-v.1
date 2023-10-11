import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const CoursesCards = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <div className="grid grid-rows-2 xs:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              to="#"
              className="block"
              href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons"
              title="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
            >
              <img
                className="block object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/csshtml-852-768x432.jpg"
                alt="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              className="w-full h-full block"
              href="https://sabzlearn.ir/course/html-tutorial/#lessons"
              title="آموزش جامع Html5 (آپدیت ۲۰۲۳)"
            >
              <img
                className="block w-full h-full object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/HTML-852x479-2-1-768x432.png"
                alt="آموزش جامع Html5 (آپدیت ۲۰۲۳)"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}{" "}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              to="#"
              className="block"
              href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons"
              title="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
            >
              <img
                className="block w-full h-full h-full object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/Com_JAVASCRIPT-768x432.png"
                alt="آموزش جاوا اسکریپت رایگان مقدماتی تا پیشرفته + مینی پروژه"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}{" "}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              to="#"
              className="block"
              href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons"
              title="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
            >
              <img
                className="block object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/csshtml-852-768x432.jpg"
                alt="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              className="w-full h-full block"
              href="https://sabzlearn.ir/course/html-tutorial/#lessons"
              title="آموزش جامع Html5 (آپدیت ۲۰۲۳)"
            >
              <img
                className="block w-full h-full object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/HTML-852x479-2-1-768x432.png"
                alt="آموزش جامع Html5 (آپدیت ۲۰۲۳)"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}{" "}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              to="#"
              className="block"
              href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons"
              title="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
            >
              <img
                className="block w-full h-full h-full object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/Com_JAVASCRIPT-768x432.png"
                alt="آموزش جاوا اسکریپت رایگان مقدماتی تا پیشرفته + مینی پروژه"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}{" "}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              to="#"
              className="block"
              href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons"
              title="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
            >
              <img
                className="block object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/csshtml-852-768x432.jpg"
                alt="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              className="w-full h-full block"
              href="https://sabzlearn.ir/course/html-tutorial/#lessons"
              title="آموزش جامع Html5 (آپدیت ۲۰۲۳)"
            >
              <img
                className="block w-full h-full object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/HTML-852x479-2-1-768x432.png"
                alt="آموزش جامع Html5 (آپدیت ۲۰۲۳)"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}{" "}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              to="#"
              className="block"
              href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons"
              title="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
            >
              <img
                className="block w-full h-full h-full object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/Com_JAVASCRIPT-768x432.png"
                alt="آموزش جاوا اسکریپت رایگان مقدماتی تا پیشرفته + مینی پروژه"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}{" "}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              to="#"
              className="block"
              href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons"
              title="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
            >
              <img
                className="block object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/csshtml-852-768x432.jpg"
                alt="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              className="w-full h-full block"
              href="https://sabzlearn.ir/course/html-tutorial/#lessons"
              title="آموزش جامع Html5 (آپدیت ۲۰۲۳)"
            >
              <img
                className="block w-full h-full object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/HTML-852x479-2-1-768x432.png"
                alt="آموزش جامع Html5 (آپدیت ۲۰۲۳)"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}{" "}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative">
            <Link
              to="#"
              className="block"
              href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons"
              title="پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)"
            >
              <img
                className="block w-full h-full h-full object-cover rounded-2xl"
                src="https://sabzlearn.ir/wp-content/uploads/2023/08/Com_JAVASCRIPT-768x432.png"
                alt="آموزش جاوا اسکریپت رایگان مقدماتی تا پیشرفته + مینی پروژه"
              />
            </Link>
          </div>
          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <h4 className="line-clamp-2 text-zinc-700 dark:text-white">
              <a href="https://sabzlearn.ir/course/creative-projects-with-html-css/#lessons">
                {t("courses.item1")}{" "}
              </a>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesCards;
