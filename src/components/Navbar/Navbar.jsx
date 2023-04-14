import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact Us', path: '/contact' },
        // Add more routes here...
    ];


    return (
        <nav className="md:flex list-none ">
            <div onClick={() => setOpen(!open)} className="md:hidden">
                <span>
                    {open === true ? <Bars3Icon className="h-6 w-6 text-blue-500" /> : <XMarkIcon className="h-6 w-6 text-blue-500" />}
                </span>


            </div>
            <ul className={`md:flex absolute md:static duration-500  pl-8 pb-4 bg-purple-400 ${open ? 'top-6' : '-top-36'}`}>

            </ul>
            {
                routes.map(route => <Link
                    key={route.id}
                    route={route}
                ></Link>)
            }
        </nav>
    );
};

export default Navbar;