import Link from 'next/link'
import Card from '../components/card'
const Portfolio = () => {
  return (
  <div className={"flex flex-col px-2 py-2 min-w-full"}>
      <div className={"text-3xl flex  bg-red-600 min-w-full justify-center items-center"}>
        What I build
      </div>
      <div className={"text-3xl bg-center px-2 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"}>
     <Link href = "/portfolio/android"> <Card name={"Android"} /> </Link>
      <Link href = "/portfolio/frontend"> <Card name={"Frontend"}/> </Link>
      <Link href = "/portfolio/backend"> <Card name={"Backend"}/> </Link>
      <Link href = "/portfolio/fullstack"> <Card name={"Full Stack"}/> </Link>
      <Link href = "/portfolio/bot"> <Card name={"Bots"}/> </Link>
      <Link href = "/portfolio/ml"> <Card name={"Machine Learning"}/> </Link>
      <Link href = "/portfolio/blockchain"> <Card name={"Blockchain"}/> </Link>
      <Link href = "/portfolio/cool"> <Card name={"Other Cool Stuff"}/> </Link>
      </div>
    </div>
  )
}

export default  Portfolio;
