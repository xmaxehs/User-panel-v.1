const Card = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-4 lg:grid-cols-2 md:flex md:flex-wrap md:justify-center">
      <div className="flex justify-center items-center px-3 py-2 min-w-[250px] max-w-[310px] bg-yellow-400 rounded-2xl gap-x-2">
        <div className="w-[90px] h-[90px] flex flex-col justify-center items-center bg-amber-300 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
          >
            <path
              d="M9.04169 25.8333H52.9583"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M15.5 36.1667H20.6667"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M28.4167 36.1667H33.5834"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M7.75 23.25C7.75 18.3788 7.75 15.9432 9.26329 14.4299C10.7766 12.9167 13.2121 12.9167 18.0833 12.9167H31H43.9167C48.7878 12.9167 51.2234 12.9167 52.7367 14.4299C54.25 15.9432 54.25 18.3788 54.25 23.25V31V38.75C54.25 43.6211 54.25 46.0567 52.7367 47.57C51.2234 49.0833 48.7878 49.0833 43.9167 49.0833H31H18.0833C13.2121 49.0833 10.7766 49.0833 9.26329 47.57C7.75 46.0567 7.75 43.6211 7.75 38.75V31V23.25Z"
              stroke="white"
              stroke-width="3"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center w-36">
          <p className="text-2xl text-white">Cash Back</p>
          <p className="text-4xl font-bold text-white">0$</p>
        </div>
      </div>
      <div className="flex px-3 py-2 min-w-[250px] max-w-[310px] bg-blue-500 rounded-2xl gap-x-2">
        <div className="w-[90px] h-[90px] flex flex-col justify-center items-center bg-blue-400 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_3_134)">
              <path
                d="M13.095 16.6667H3.57C1.60333 16.6667 0 15.0667 0 13.095V3.57167C0 1.6 1.6 0 3.57 0H13.095C15.0667 0 16.6667 1.6 16.6667 3.57167V13.095C16.6667 15.0667 15.0667 16.6667 13.095 16.6667ZM3.57 3.33333C3.44333 3.33333 3.33333 3.445 3.33333 3.57167V13.095C3.33333 13.2217 3.44333 13.3333 3.57 13.3333H13.095C13.2217 13.3333 13.3333 13.2217 13.3333 13.095V3.57167C13.3333 3.445 13.2217 3.33333 13.095 3.33333H3.57ZM13.095 40H3.57C1.60333 40 0 38.4 0 36.4283V26.9033C0 24.9367 1.6 23.3333 3.57 23.3333H13.095C15.0667 23.3333 16.6667 24.9333 16.6667 26.905V36.43C16.6667 38.3967 15.0667 40 13.095 40ZM3.57 26.6667C3.44333 26.6667 3.33333 26.7767 3.33333 26.905V36.43C3.33333 36.5567 3.44333 36.6667 3.57 36.6667H13.095C13.2217 36.6667 13.3333 36.5567 13.3333 36.4283V26.9033C13.3333 26.7767 13.2217 26.6667 13.095 26.6667H3.57ZM36.4283 40H26.9033C24.9333 40 23.3333 38.4 23.3333 36.4283V26.9033C23.3333 24.9333 24.9333 23.3333 26.9033 23.3333H36.4283C38.4 23.3333 40 24.9333 40 26.9V36.425C40 38.4 38.3967 40 36.4283 40ZM26.9033 26.6667C26.7767 26.6667 26.665 26.7767 26.665 26.905V36.43C26.665 36.5567 26.7733 36.6683 26.9017 36.6683H36.4267C36.5533 36.6683 36.665 36.56 36.665 36.4317V26.9067C36.665 26.78 36.555 26.6683 36.4267 26.6683H26.9017L26.9033 26.6667ZM29.6967 20.6067C28.78 20.6067 27.8667 20.26 27.17 19.5633L20.4367 12.83C19.0417 11.4367 19.0417 9.17 20.4367 7.78L27.1667 1.04167C28.5133 -0.305 30.875 -0.303333 32.2167 1.04167L38.95 7.775C40.345 9.16667 40.345 11.4333 38.95 12.825L32.2167 19.5583C31.52 20.2583 30.605 20.605 29.6933 20.605L29.6967 20.6067ZM29.6967 3.33333C29.65 3.33333 29.585 3.345 29.5267 3.4L22.7933 10.1333C22.7017 10.225 22.7017 10.3833 22.7933 10.4717L29.5267 17.205C29.6183 17.2967 29.7717 17.2983 29.8633 17.205L36.5967 10.4717C36.6883 10.3817 36.6883 10.225 36.5967 10.135L29.8633 3.40167C29.8067 3.34667 29.7417 3.33333 29.6967 3.33333Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_134">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col justify-center w-36">
          <p className="text-2xl text-white">My Courses</p>
          <p className="text-4xl font-bold text-white">11</p>
        </div>
      </div>
      <div className="flex px-3 py-2 min-w-[250px] max-w-[310px] bg-rose-500 rounded-2xl gap-x-2">
        <div className="w-[90px] h-[90px] flex flex-col justify-center items-center bg-rose-400 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
          >
            <path
              d="M48.8508 37.9554C48.8508 41.2879 51.5891 44.0004 54.9216 44.0004C54.9216 53.6879 52.4933 56.1162 42.8058 56.1162H18.5742C8.88666 56.1162 6.45833 53.6879 6.45833 44.0004V42.812C9.79083 42.812 12.5292 40.0737 12.5292 36.7412C12.5292 33.4087 9.79083 30.6704 6.45833 30.6704V29.482C6.48417 19.7945 8.88666 17.3662 18.5742 17.3662H42.78C52.4675 17.3662 54.8958 19.7945 54.8958 29.482V31.9104C51.5633 31.9104 48.8508 34.597 48.8508 37.9554Z"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M41.8787 17.3664H18.3962L25.9653 9.79728C32.1395 3.62312 35.2395 3.62312 41.4137 9.79728L42.9637 11.3473C41.3362 12.9748 40.9487 15.3773 41.8787 17.3664Z"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.5205 17.3669V56.117"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="5 5"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center w-36">
          <p className="text-2xl text-white">Total Tickets</p>
          <p className="text-4xl font-bold text-white">1</p>
        </div>
      </div>
      <div className="flex px-3 py-2 min-w-[250px] max-w-[310px] bg-green-500 rounded-2xl gap-x-2">
        <div className="w-[90px] h-[90px] flex flex-col justify-center items-center bg-green-400 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
          >
            <path
              d="M31 41.3333H33.5833C35.3056 41.3333 38.75 40.3 38.75 36.1667C38.75 32.0333 35.3056 31 33.5833 31H28.4167C26.6944 31 23.25 29.9667 23.25 25.8333C23.25 21.7 26.6944 20.6667 28.4167 20.6667H31M31 41.3333H23.25M31 41.3333V46.5M31 20.6667H38.75M31 20.6667V15.5M54.25 31C54.25 43.8407 43.8407 54.25 31 54.25C18.1594 54.25 7.75 43.8407 7.75 31C7.75 18.1594 18.1594 7.75 31 7.75C43.8407 7.75 54.25 18.1594 54.25 31Z"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center w-36">
          <p className="text-2xl text-white">Balance</p>
          <p className="text-4xl font-bold text-white">12$</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
