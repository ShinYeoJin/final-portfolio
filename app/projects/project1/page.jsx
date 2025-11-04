import Link from "next/link";

const page = () => {
    return ( <>
    <section className="w-full h-screen flex flex-col justify-start items-center bg-black text-white">
        <h2 className="text-5xl text-left">HTML&CSS</h2>
        <div className="flex flex-row ">
            <div className="w-sm h-300px bg-gray rounded-2xl "><image className="w-sm h-300px object-cover" src="" alt="" /></div>
            <div className="flex flex-col justify-start items-center">
                <h3 className="text-3xl text-left">Project Description</h3>
                <div className="rounded-2xl"><span className="text-xl"></span></div>
                <Link className=" bg-white rounded-2xl text-2xl text-center" href={""}>Visit Site</Link>
            </div>
        </div>
        
    </section></> );
}   
 
export default page;