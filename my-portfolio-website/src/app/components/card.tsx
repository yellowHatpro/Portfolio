const  Card = ( props : {name: string}) => {
 return(
  <div className={"bg-sky-50 rounded-md"}>
       <text className={"text-black"}> 
      {props.name}
      </text>
  </div>
 )
}

export default Card;
