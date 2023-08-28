import Card from "../../components/card"
const Blockchain = () => {
 return (
 <div className={"flex flex-col px-2 py-2 min-w-full min-h-screen"}>
      <div className={"text-3xl flex flex-col  bg-red-600 min-w-full justify-center items-center"}>
       <text> Blockchain </text>  
       <text className={"text-2xl"}> Projects I worked on</text>  
      </div>
      <div className={"text-3xl bg-center px-2 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"}>
      <Card name={"Flower"} color={"bg-new_blue"}/>
      <Card name={"GridCoin"} color={"bg-new_orange"}/>
      </div>
    </div>
  )
}

export default  Blockchain;
