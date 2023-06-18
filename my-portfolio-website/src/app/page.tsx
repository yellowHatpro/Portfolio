import Image from "next/image";
import image from '../../public/ashu.png';
import { faGithub, faLinkedin, faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
                            <FontAwesomeIcon className={"lg:h-16 lg:w-16 h-10 w-10"} icon={faGithub}
                                             style={{color: "#ffffff",}}/>
                            <FontAwesomeIcon className={"lg:h-16 lg:w-16 h-10 w-10 "} icon={faLinkedin}
                                             style={{color: "#2967b2",}}/>
                            <FontAwesomeIcon className={"lg:h-16 lg:w-16 h-10 w-10 "} icon={faTwitter}
                                             style={{color: "#169def",}}/>
                            <FontAwesomeIcon className={"lg:h-16 lg:w-16 h-10 w-10 "} icon={faDiscord}
                                             style={{color: "#515ce9"}}/>

                        </div>
                    </div>
                </div>

            </main>
            <div className={"grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 px-2 py-2 gap-4"}>
                <div className={"bg-dark-gray rounded-2xl col-span-2"}>
                    <div className={"flex px-2 py-4  justify-between  items-center"}>
                        <text className={"flex text font-bold text-start text-md"}>Portfolio</text>
                        <text className={"flex text-end text-md text-gray-500"}>See All</text>
                    </div>
                    <div className={"grid grid-cols-3 px-4 py-4  justify-between  items-center gap-2"}>
                        <div className={"bg-green-50 h-52 rounded-2xl overflow-auto"}>
                            <text className={"flex px-4 py-4 text-lg font-bold text-black"}><a href={""}>Metabrainz</a></text>
                            <text className={"flex px-4 font-bold text-black"}>Google Summer Of Code'22 Mentee</text>
                            <text className={"flex px-4 text-black"}>Added BrainzPlayer, a local music playback feature in MusicBrainz Android Application. The codebase is now migrated to ListenBrainz Android Application.</text>
                        </div>
                        <div className={"bg-green-50 h-52 rounded-2xl overflow-auto"}>
                            <text className={"flex px-4 py-4 text-lg font-bold text-black"}><a href={""}>Atom EI</a></text>
                            <text className={"flex px-4 font-bold text-black"}>Android Developer Intern</text>
                            <text className={"flex px-4 text-black"}>Worked on the android application, and got my hands dirty on Clean Architecture, Cloud Functions, and FCM.</text>
                        </div>
                        <div className={"bg-green-50 h-52 rounded-2xl overflow-auto"}>
                            <text className={"flex px-4 py-4 text-lg font-bold text-black"}><a href={""}>Sampoorna</a></text>
                            <text className={"flex px-4 font-bold text-black"}>FOSS Overflow</text>
                            <text className={"flex px-4 text-black"}>Developed Sampoorna, an open-source app for women that focuses on their safety and all-round development.</text>
                        </div>

                    </div>
                </div>
                <div className={"bg-dark-gray rounded-2xl col-span-1"}>
                    <div className={"px-2 py-4"}>
                        <text className={"flex text font-bold text-md"}>About</text>
                        <text className={"text-md text-gray-500"}>I am a student developer, who is currently in his senior year of Bachelors degree at Punjab Engineering College, Chandigarh. I have a keen interest in web, android development. I have recently developed interest in De-Fi and AI/ML, and I hope to learn a lot. Besides, I do daily Leetcode, and sometime give Codeforces contests. </text>
                    </div>
                </div>
            </div>
        </>

    )
}
