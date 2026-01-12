const Card = ({ img, title, subText, customStyle }) => {
  return (
    <div
      className={`bg-gray-50 py-4 px-10 flex flex-col items-center rounded-lg h-67.5 w-full ${customStyle}`}
    >
      <img className="w-20 lg:w-30 mb-4" src={img} alt="" />
      <p className="font-bold text-secondary text-base lg:text-2xl pb-1.5">
        {title}
      </p>
      <div className="border-b border-gray-300 w-full  mb-1.5"></div>
      <p className="text-secondary font-semibold text-sm lg:text-lg">
        {subText}
      </p>
    </div>
  );
};

export default Card;
