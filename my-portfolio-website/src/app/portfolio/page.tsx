import Link from 'next/link'
import Card from '../components/card'
const Portfolio = () => {
  return (
  <div className={"flex flex-col px-2 py-2 min-w-full min-h-screen"}>
      <div className={"text-3xl flex  bg-red-600 min-w-full justify-center items-center rounded-md"}>
        What I build
      </div>
      <div className={"text-3xl bg-center px-2 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"}>
     <Link href = "/portfolio/android"> <Card name={"Android"} color={"bg-new_yellow"} /> </Link>
      <Link href = "/portfolio/frontend"> <Card name={"Frontend"} color={"bg-new_carrot"}/> </Link>
      <Link href = "/portfolio/backend"> <Card name={"Backend"} color={"bg-new_green"}/> </Link>
      <Link href = "/portfolio/fullstack"> <Card name={"Full Stack"} color={"bg-new_rust"}/> </Link>
      <Link href = "/portfolio/bot"> <Card name={"Bots"} color={"bg-new_gray"}/> </Link>
      <Link href = "/portfolio/ml"> <Card name={"Machine Learning"} color={"bg-new_blue"}/> </Link>
      <Link href = "/portfolio/blockchain"> <Card name={"Blockchain"} color={"bg-new_lightblue"}/> </Link>
      <Link href = "/portfolio/cool"> <Card name={"Other Cool Stuff"} color={"bg-new_orange"}/> </Link>
      </div>
    </div>
  )
}

export default  Portfolio;
