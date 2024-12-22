import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="h-[95vh] flex flex-col items-center justify-center w-[100vw]">

                <div className="flex items-center justify-center h-[15vh] w-[100vw]">
                    {/* <img src="#" alt="" /> */}
                    <div className="w-[100%] text-white h-[56px] rounded-[20px] bg-white bg-opacity-5 flex items-center justify-around ">
                        <ul className="flex justify-between w-[35vw] ">
                            <li className="flex gap-2 cursor-pointer ">
                                <img src="/dot.svg" alt="" />
                                <div className="text-[#BAD7F5] ">Home</div>
                            </li>
                            <li className="text-[#BAD7F5] cursor-pointer hover:text-[#80d1f6] ">
                                Enterprise
                            </li>
                            <li className="text-[#BAD7F5] cursor-pointer hover:text-[#80d1f6] ">
                                Expertise
                            </li>
                            <li className="text-[#BAD7F5] cursor-pointer hover:text-[#80d1f6] ">
                                Pricing
                            </li>
                            <li className="text-[#BAD7F5] cursor-pointer hover:text-[#80d1f6] ">
                                Contact
                            </li>
                        </ul>
                        <ul className="flex justify-between w-[32vw]">
                            <li className="flex items-center cursor-pointer group relative w-[8vw]">
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
                                <div className="text-[#BAD7F5] absolute group-hover:left-6 left-0 transition-all duration-300 ease-in-out">About us</div>
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out absolute right-0" />
                            </li>
                            <li className="flex items-center cursor-pointer group relative w-[5.5vw]">
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
                                <div className="text-[#BAD7F5] absolute group-hover:left-[1.3rem] left-0 transition-all duration-300 ease-in-out">Stacks</div>
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out absolute right-0" />
                            </li>
                            <li className="flex items-center cursor-pointer group relative w-[10.5vw]">
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
                                <div className="text-[#BAD7F5] absolute group-hover:left-6 left-0 transition-all duration-300 ease-in-out">Case Studies</div>
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out absolute right-0" />
                            </li>
                            <li className="flex items-center cursor-pointer group relative w-[4.8vw]">
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
                                <div className="text-[#BAD7F5] absolute group-hover:left-6 left-0 transition-all duration-300 ease-in-out">Docs</div>
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out absolute right-0" />
                            </li>



                        </ul>
                        <div className="flex gap-3">
                            <button className="flex items-center group relative w-[65px]">
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                                <div className="text-[#BAD7F5] transition-all duration-300 ease-in-out absolute left-0 group-hover:left-4">Sign in</div>
                                <img src="/arrow.png" alt="" className="h-[16px] w-[16px] group-hover:opacity-0 absolute right-0 transition-all duration-300 ease-in-out" />
                            </button>
                            <button>
                                <div className="text-black bg-[#BAD7F5] w-[130.61px] h-[42.76px] flex items-center justify-center rounded-[16px] text-[18px] hover:scale-95 transition-all duration-500 ease-in-out">
                                    Sign up
                                </div>
                                <img src="" alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1A263E] h-[55px] w-[483px] rounded-[16px] border border-[#2A3D5E] hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3 mt-10">
                    <img src="/logo.webp" alt="" className="h-[30px] w-[30px]" />
                    <div className=" flex gap-3 items-center">
                        <div className="text-[#BAD7F5] text-[1.3rem] transition-all duration-300 ease-in-out">
                            Discover our user journey 
                        </div>
                        <div className="text-[#355083]">
                            |
                        </div>
                        <button className="flex items-center group relative w-[65px]">
                            <img src="/arrow.png" alt="" className="h-[16px] w-[16px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                            <div className="text-[#BAD7F5] transition-all duration-300 ease-in-out absolute left-0 group-hover:left-4">Sign in</div>
                            <img src="/arrow.png" alt="" className="h-[16px] w-[16px] group-hover:opacity-0 absolute right-0 transition-all duration-300 ease-in-out" />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar