import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import styles from "../style.js";
import { logo1 } from "../assets";
import {NavLink} from "react-router-dom";
function LogSection()  {
    return (
        <section className="h-full bg-neutral-200 ">

            <div className="container h-full p-10">

                <div className="w-full sm:ml-10">
                    <div className="block rounded-lg bg-white shadow-lg">
                        <div className="g-0 lg:flex lg:flex-wrap">

                            <div className="px-4 md:px-0 lg:w-6/12">
                                <div className="md:mx-6 md:p-12">

                                    <div className="text-center mb-12 pt-5">

                                        <h4 className="mt-1 pb-1 text-xl font-semibold">
                                            Registra tus datos
                                        </h4>

                                    </div>

                                    <form className="w-full max-w-lg">
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    Nombre
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    Apellido
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Correo Electrónico
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" />

                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Contraseña
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" />

                                            </div>
                                        </div>
                                    </form>

                                    <NavLink to={'/Login'}>
                                        <button
                                            type="button"
                                            className=" w-full text-white bg-purpleblue mr-2 inline-block rounded border-2 border-danger border-purpleblue px-6 pb-[6px] pt-2 text-ss font-bold uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-purpleblue  active:border-danger-700 active:text-danger-700"
                                        >
                                            Continuar
                                        </button>
                                    </NavLink>
                                </div>
                            </div>

                            {/* <!-- Right column container with background and description--> */}
                            <div
                                className={`flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-cover bg-bottom ${styles.flexStart}`}
                                style={{
                                    backgroundImage:
                                        `url('https://images.unsplash.com/photo-1634027423259-b44d7802e101?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVmdCUyMGFycm93fGVufDB8MXwwfHx8MA%3D%3D')`,
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LogSection