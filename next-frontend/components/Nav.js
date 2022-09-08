
const Nav = () => {
    return (
        <div>
            <div className="w-full z-50 top-0 py-3 sm:py-5 absolute bg-[#493798] 
  ">
                <div className="container flex items-center justify-between">
                    <div className="mx-12">
                        <a href="/">
                            <img src="/assets/img/logo.svg" className="w-24 lg:w-30 py-1 m" alt="logo image" />
                        </a>
                    </div>
                    <div className="lg:block">
                        <ul className="flex items-center">

                            <li className="group pl-6">

                                <a href="#about">  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >About</span
                                ></a>

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Services</span
                                >

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Portfolio</span
                                >

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <span

                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Clients</span
                                >

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Work</span
                                >

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Statistics</span
                                >

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">
                                <a href='#blog'>
                                    <span
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    >Blog</span
                                    > </a>

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <span
                                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                >Contact</span
                                >

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li >

                        </ul >
                    </div >
                    <div className="block lg:hidden">
                        <button>
                            <i className="bx bx-menu text-4xl text-white"></i>
                        </button>
                    </div >
                </div >
            </div >
        </div>

    )
}

export default Nav