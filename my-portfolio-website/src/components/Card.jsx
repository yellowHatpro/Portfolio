// eslint-disable-next-line react/prop-types
const Card = ({ title, link, dp, about }) => (
  <a target={"_blank"} href={link} rel="noreferrer">
    <div className={"min-h-full relative child-hover:opacity-90"}>
      <div
        className={
          "flex flex-col absolute z-20 text-white opacity-0 hover:bg-black w-full h-full justify-center items-center transition-all duration-300 ease-in-out"
        }
      >
        <div className={"text-center text-sm p-2"}>{title}</div>
        <div className={"text-center text-sm p-8"}>{about}</div>
      </div>
      <div className={" min-h-[200px] z-0"}>
        <img className={"min-h-[200px]"} src={dp} alt={""} />
      </div>
    </div>
  </a>
);
export default Card;
