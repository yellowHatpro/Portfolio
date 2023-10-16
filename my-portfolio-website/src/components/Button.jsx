// eslint-disable-next-line react/prop-types
export const Button = ({children, onClick}) => (
    <button
        className={"px-2 border-2 rounded-3xl border-black flex justify-center items-center"}
        onClick={onClick}>
        {children}
    </button>
)