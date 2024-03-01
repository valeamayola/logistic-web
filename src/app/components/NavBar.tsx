'use client'

import { faTruckFast } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react';
import Link from "next/link";

export default function NavBar() {

    return (
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/about">Sobre nosotros</Link>
                        </li>
                        <li>
                            <Link href="/services">Servicios</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl text-orange-700 font-bold hover:bg-transparent">Logistic<FontAwesomeIcon className="w-5 text-orange-700 font-bold" icon={faTruckFast} /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a></a></li>
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/about">Sobre nosotros</Link>
                        </li>
                        <li>
                            <Link href="/services">Servicios</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-2xl border-4 bg-orange-700 text-white text-base hover:bg-transparent hover:border-orange-700 hover:text-orange-700 hover:border-4">Contactános</a>
                </div>
            </div>
    )
};
