import Card from "../../components/card"

const Android = () => {
  return (
  <div className={"flex flex-col px-2 py-2 min-w-full"}>
      <div className={"text-3xl flex flex-col  bg-red-600 min-w-full justify-center items-center"}>
       <text> Android </text>  
       <text className={"text-2xl"}> Projects I worked on</text>  
      </div>
      <div className={"text-3xl bg-center px-2 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"}>
      <Card name={"ListenBrainz-Android"}/>
      <Card name={"Sampoorna"}/>
      <Card name={"ReciBoi"}/>
      <Card name={"Better-Focus"}/>
      <Card name={"YADA"}/>
      <Card name={"GibMeJob"}/>
      <Card name={"GithubPro-Compose"}/>
      <Card name={"ShoppinCart"}/>
      </div>
    </div>
  )
}

export default  Android;

