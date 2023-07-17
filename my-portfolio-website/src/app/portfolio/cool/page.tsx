import Card from "../../components/card"

const CoolStuff= () => {
  return (
 <div className={"flex flex-col px-2 py-2 min-w-full"}>
      <div className={"text-3xl flex flex-col  bg-red-600 min-w-full justify-center items-center"}>
       <text> Cool </text>  
       <text className={"text-2xl"}> Stuff I tinkered with</text>  
      </div>
      <div className={"text-3xl bg-center px-2 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"}>
      <Card name={"dotfiles"}/>
      </div>
    </div>
  )
}

export default  CoolStuff;
