// eslint-disable-next-line react/prop-types
const Card = ({ title, link, dp }) => (
  <a target={"_blank"} href={link} rel="noreferrer">
    <div className={"min-h-full relative child-hover:opacity-90"}>
      <div
        className={
          "absolute z-20 text-white opacity-0 hover:bg-black w-full h-full flex justify-center items-center transition-all duration-300 ease-in-out"
        }
      >
        {title}
      </div>
      <div className={" min-h-[200px] z-0"}>
        <img className={"min-h-[200px]"} src={dp} alt={""} />
      </div>
    </div>
  </a>
);
export default Card;
