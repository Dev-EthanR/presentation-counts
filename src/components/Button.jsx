const Button = ({ children, color }) => {
  return (
    <button
      className={`${color} rounded-sm px-4 py-2 font-semibold whitespace-nowrap cursor-pointer lg:text-xl text-xs`}
    >
      {children}
    </button>
  );
};

export default Button;
