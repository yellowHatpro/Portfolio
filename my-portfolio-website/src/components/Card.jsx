export const Card = ({title, image}) => (
    <>
     <div className={"border-2 rounded-3xl"}>
         <img src={image} className={""} alt={""}/>
         <text>{title}</text>
     </div>
    </>
)