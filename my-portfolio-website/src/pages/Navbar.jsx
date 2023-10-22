export const Navbar = () => (
    <div className={" bg-yellow-400 flex flex-row justify-between py-4 px-8"}>
    <h1 className={"font-extralight text-2xl"}>yellowhatpro</h1>
        <div className={"child:px-4 flex flex-row child-hover:underline child-hover:animate-bounce"}>
            <a href = {"#projects"}><h1>PROJECTS</h1></a>
            <a href={"#education"}><h1>EDUCATION</h1></a>
            <a href={"#connect"}><h1>LET&apos;S CONNECT</h1></a>
        </div>
    </div>
)