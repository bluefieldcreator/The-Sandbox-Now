import Link from "next/link"
import RightArrow from './RightArrow';


export default function Layout({ children } : any) {
    return (
        <div>
            <div className="bg-black p-1">
                <div className="flex items-center container xl:w-2/4 mx-auto justify-between">
                    <Link href="/">
                        <a className="text-white border-white font-extrabold p-1 border-2 text-2xl">
                            TSB
                        </a>
                    </Link>
                    <Link href="https://discord.gg/cubash">
                        <a className="text-white p-2 text-xs flex gap-1 items-center">
                            Join <span className="font-bold">Cubash</span> <RightArrow/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className=" p-1 border-b border-gray-200">
                <div className="md:container mx-auto lg:w-2/4 md:flex justify-around items-center gap-2">
                    <div className="md:flex gap-4 items-center text-center justify-between text-[1rem] grid content-center w-max mx-auto justify-self-center text-gray-400 ">
                        <Link href="/main">
                            <a className="font-semibold text-blue-500">
                                Sandboxes
                            </a>

                        </Link>
                        <Link href="/">
                            <a className="hover:text-black">
                                Home
                            </a>

                        </Link>
                           <Link href="/members">
                            <a className="hover:text-black">
                                Notable Members
                            </a>

                        </Link>            <Link href="/news">
                            <a className="hover:text-black">
                                Sandbox News
                            </a>

                        </Link>
                        <Link href="/">
                            <a className="font-bold text-black">
                                About Us
                            </a>

                        </Link>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
