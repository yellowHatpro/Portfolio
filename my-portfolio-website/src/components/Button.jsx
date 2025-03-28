/* eslint-disable react/prop-types */
const Button = ({
  children,
  onClick,
  border = "border-black",
  text = "text-black",
  isSelected = false,
}) => (
  <button
    className={`${isSelected ? "border-white" : border} ${
      isSelected ? "text-white" : text
    } p-1 sm:p-2 border-2 w-[220px] sm:w-[240px] md:w-[260px] text-xs sm:text-sm md:text-base rounded-3xl flex justify-center items-center transition-all duration-300 hover:scale-105`}
    onClick={onClick}
  >
    {children}
  </button>
);
export default Button;
