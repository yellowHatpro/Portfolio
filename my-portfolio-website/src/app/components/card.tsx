const  Card = ( props : {name: string, color: string}) => {
 return(
  <div className={`rounded-md h-[200px] ${props.color}`}>
       <text className={"text-black"}> 
      {props.name}
      </text>
  </div>
 )
}

export default Card;
