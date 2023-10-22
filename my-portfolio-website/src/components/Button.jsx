// eslint-disable-next-line react/prop-types
export const Button = ({children, onClick}) => (
    <button
        className={"p-2 border-2 max-w-[300px] min-w-[140px] rounded-3xl border-black flex justify-center items-center"}
        onClick={onClick}>
        {children}
    </button>
)