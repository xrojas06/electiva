import React from "react";

import styles from "../style.js";
import { logo1 } from "../assets";
import {Link, NavLink} from "react-router-dom";
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
                                                Inicia sesión con tu cuenta
                                            </h4>

                                        </div>

                                        <form className=" px-8 pt-6 pb-8 mb-4">

                                                <div className="mb-4">
                                                    <label class="uppercase block text-gray-700 text-sm font-bold mb-2" for="username">
                                                        Correo electrónico
                                                    </label>
                                                    <input class="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder=""/>
                                                </div>
                                                <div className="mb-6">
                                                    <label className="uppercase block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                        Contraseña
                                                    </label>
                                                    <input className="bg-gray-200 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />

                                                </div>



                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <Link to={'/Forgot'} className='mb-10 hover:underline'>¿Olvidó su contraseña?</Link>



                                                    <button
                                                        className="w-full mt-4 bg-purpleblue inline-block  rounded px-6 pb-2 pt-2.5 text-ss font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                        type="button"

                                                    >
                                                        Ingresar
                                                    </button>




                                            </div>

                                            {/* <!--Register button--> */}
                                            <div className="flex flex-col items-center pb-6">
                                                <p className="text-center w-full mb-4 mr-2 pb-3 border-b-8 border-babyblue">¿No tienes cuenta?</p>
                                            </div>
                                                    <NavLink to={'/Signin'}>
                                                    <button
                                                        type="button"
                                                        className=" w-full text-primaryred mr-2 inline-block rounded border-2 border-danger border-primaryred px-6 pb-[6px] pt-2 text-ss font-bold uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600  active:border-danger-700 active:text-danger-700"
                                                    >
                                                        Regístrate
                                                    </button>
                                                    </NavLink>


                                        </form>
                                    </div>
                                </div>

                                {/* <!-- Right column container with background and description--> */}
                                <div
                                    className={`flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-cover bg-center ${styles.flexStart}`}
                                    style={{
                                        backgroundImage:
                                            `url('https://images.unsplash.com/photo-1593687395549-400945fed803?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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