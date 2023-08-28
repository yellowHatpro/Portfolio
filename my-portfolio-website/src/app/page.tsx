import Image from "next/image";
import image from '../../public/ashu.png';
import gsoc_img from '../../public/gsoc.png';
import atomei_img from '../../public/atomei.jpg';
import fossoverflow_img from '../../public/fossoverflow.png';
import { faGithub, faLinkedin, faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <main className="px-2 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                    <div className={"px-4 py-4 bg-dark-gray rounded-2xl "}>
                        <text className={"font-bold  lg:text-5xl md:text-3xl sm:text-3xl"}>
                            I am a god-knows-what-stack
                            developer
                        </text>
                    </div>
                    <div className={"grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-3  py-2 gap-2"}>
                        <div className={"grid bg-green-500 rounded-2xl justify-items-center"}>
                            <text className={"flex text text-3xl lg:text-6xl font-black"}>2+</text>
                            <text className={"flex text text-xs lg:text-sm py-4 text-center"}>Years of experience</text>

                        </div>
                        <div className={"grid bg-yellow-300 rounded-2xl justify-items-center "}>
                            <text className={"flex text text-3xl lg:text-6xl font-black text-dark-gray"}>10+</text>
                            <text className={"flex text text-xs lg:text-sm py-4 text-center text-dark-gray"}>Handled
                                projects
                            </text>

                        </div>
                        <div className={"grid bg-red-400 rounded-2xl justify-items-center"}>
                            <text className={"flex text text-3xl lg:text-6xl font-black"}>100+</text>
                            <text className={"flex text text-xs lg:text-sm py-4 text-center"}>Open Source Contributions
                            </text>
                        </div>
                    </div>
                </div>
                <div className={"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"}>
                    <div>
                        <Image
                            className={"rounded-2xl"}
                            src={image}
                            alt={"Ashutosh Aswal"}/>
                    </div>
                    <div>
                        <div className={"flex rounded-2xl bg-dark-gray px-2 py-4  justify-between  items-center"}>
                            <text className={"flex text text-gray-500 text-start text-sm"}>Name:</text>
                            <text className={"flex text-end text-sm font-bold"}>Ashutosh Aswal</text>
                        </div>
                        <br/>
                        <div className={"flex rounded-2xl bg-dark-gray px-2 py-4  justify-between  items-center"}>
                            <text className={"flex text text-gray-500 text-start text-sm"}>Based in:</text>
                            <text className={"flex text-end text-sm font-bold"}>Uttarakhand, India</text>
                        </div>
                        <br/>
                        <div className={"grid grid-cols-2 rounded-2xl bg-dark-gray lg:grid-cols-4 px-2 py-4 justify-items-center gap-4"}>
                           <a href="https://github.com/yellowhatpro"> <FontAwesomeIcon className={"lg:h-16 lg:w-16 h-10 w-10"} icon={faGithub}
                                             style={{color: "#ffffff",}}/> </a>
                           <a href="https://www.linkedin.com/in/ashutoshaswal/"> <FontAwesomeIcon className={"lg:h-16 lg:w-16 h-10 w-10 "} icon={faLinkedin}
                                             style={{color: "#2967b2",}}/> </a>
                          <a href="https://twitter.com/yellowhatpro"> <FontAwesomeIcon className={"lg:h-16 lg:w-16 h-10 w-10 "} icon={faTwitter}
                                             style={{color: "#169def",}}/> </a>
                          <a href="https://discord.com/users/787332879054536704"> <FontAwesomeIcon className={"lg:h-16 lg:w-16 h-10 w-10 "} icon={faDiscord}
                                             style={{color: "#515ce9"}}/> </a>

                        </div>
                    </div>
                </div>

            </main>
            <div className={"grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-2 py-2 gap-4"}>
                <div className={"bg-dark-gray rounded-2xl "}>
                    <div className={"flex px-2 py-4  justify-between  items-center"}>
                        <text className={"flex text font-bold text-start text-md"}>Portfolio</text>
            <Link href = "/portfolio">
                        <button className={"flex text-end text-md text-gray-500"}>See My Projects</button>
              </Link>
                    </div>
                    <div className={"flex carousel px-4 py-4 rounded-2xl items-center justify-center"}>
                    <div className={"flex px-4 py-4"}>
                        <div id="portfolio_item_1" className={"carousel-item w-fit flex-col"}>
                           <div className="hero bg-orange-200 px-4 w-fit">
                             <div className="hero-content flex-col lg:flex-row-reverse">
                              <Image src={gsoc_img} className="h-20 w-20 rounded-lg" alt="gsoc"/>
                              <div className={"flex-col "}>
                                <h1 className="text-xl font-bold">Google Summer of Code'22 @MetaBrainz</h1>
                                <p className="py-6">Contributed to MusicBrainz android app. Added BrainzPlayer, a local music playback feature into the app.</p>
                                  <button className="btn btn-primary">Get Started</button>
                                </div>
                              </div>
                            </div>                        
                          </div>
                        <div id="portfolio_item_2" className={"carousel-item w-full flex-col"}>
                            <div className="hero bg-gray-300 px-4 w-fit">
                             <div className="hero-content flex-col lg:flex-row-reverse">
                              <Image alt="" src={atomei_img} className="h-20 w-20 rounded-lg" />
                              <div>
                                <h1 className="text-xl font-bold">Android Developer Intern @Atom EI</h1>
                                <p className="py-6"> Worked on Atom android app, which is a beautiful app to develop a habit of meditation and mindfulness. </p>
                                  <button className="btn btn-primary">Get Started</button>
                                </div>
                              </div>
                            </div>                 
                          </div>
                        <div id="portfolio_item_3" className={"carousel-item w-full flex-col"}>
                            <div className="hero bg-blue-300 px-4 w-fit">
                             <div className="hero-content flex-col lg:flex-row-reverse">
                              <Image alt="" src={fossoverflow_img} className="h-20 w-20 rounded-lg " />
                              <div className={"px-2"}>
                                <h1 className="text-xl font-bold">Mentee @Foss Overflow</h1>
                                <p className="py-6">Got selected for the project "Sampoorna", a women priority app in Foss Overflow 2021. </p>
                                  <button className="btn btn-primary">Get Started</button>
                                </div>
                              </div>
                            </div>                        
                        </div>
                     </div>
                    </div>
                  <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#portfolio_item_1" className="btn btn-xs">1</a> 
                    <a href="#portfolio_item_2" className="btn btn-xs">2</a> 
                    <a href="#portfolio_item_3" className="btn btn-xs">3</a> 
                  </div>
                </div>
                <div className={"bg-dark-gray rounded-2xl col-span-1"}>
                    <div className={"px-2 py-4"}>
                        <text className={"flex text font-bold text-md"}>About</text>
                        <text className={"text-md text-gray-500"}>I am a student developer, who is currently in his senior year of Bachelors degree at Punjab Engineering College, Chandigarh. I have a keen interest in Computer Science, Open Source and sports. I like giving time in honing my skills, and exploring various tech domains. I do programming for fun, and am open to opportunities in this field. </text>
                    </div>
                </div>
            </div>
        </>

    )
}
