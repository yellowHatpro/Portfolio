export const Card = ({title, link, dp}) => (
    <a target={"_blank"} href={link} rel="noreferrer">
     <div className={" min-h-[200px]"}>
        <img className={"min-h-[200px]"} src={dp} alt={""}/>
     </div>
    </a>
)