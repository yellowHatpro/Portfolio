import {Button} from "../components/Button.jsx";

export const Experience = () => (
    <div className={"p-8"}>
        <div className={"bg-black min-w-full text-yellow-300"}>

            <div className={"flex text-4xl font-bold justify-center items-center"}>
                YELLOWHATPRO ✨ OPEN FOR COLLABORATION
            </div>
           <div className={"flex flex-row sm:flex-col md:flex-row"}>
               <div>
                   <div className={"text-7xl font-black text-gray-50"}>
                       EXPERIENCES
                   </div>
                   <div className={"text-gray-400"}>
                       There is a reason why I say I am a god knows what stack developer
                   </div>
               </div>
               <div className={"grid grid-cols-3 child:m-4 child:border-gray-500 text-gray-500 child:text-sm child-hover:text-white child-hover:border-white"}>
                <Button>
                    🌐 Android Development
                </Button>
                   <Button>
                       🌐 Frontend Development
                   </Button>

                   <Button>
                       🌐 Backend Development
                   </Button>
                   <Button>
                       🌐 Design
                   </Button>
                   <Button>
                       🌐 Blockchain Dapp Development
                   </Button>

               </div>
           </div>
            <div className={"text-3xl divide-y divide-gray-500 text-gray-500 font-bold child:py-8 child-hover:text-white"}>
                <div >
                    Google Summer of Code 2022 @ MetaBrainz
                </div>
                <div >
                    Atom EI | Android Developer
                </div>
                <div >
                    FOSS Overflow 2021 Mentee
                </div>
                <div >
                    GirlScript Summer of Code 2021 Mentor
                </div>
            </div>
        </div>
    </div>
)