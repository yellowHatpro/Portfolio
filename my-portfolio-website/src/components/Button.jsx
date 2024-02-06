// eslint-disable-next-line react/prop-types
export const Button = ({children, onClick, border="border-black", text="text-black", isSelected=false}) => (
    <button
        className={`${isSelected ? "border-white": border} ${isSelected ? "text-white": text} p-2 border-2 max-w-[300px] min-w-[140px] rounded-3xl flex justify-center items-center`}
        onClick={onClick}>
        {children}
    </button>
)
