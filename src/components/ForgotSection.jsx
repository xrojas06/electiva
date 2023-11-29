import React, {useState} from "react";
import { TEInput, TERipple } from "tw-elements-react";
import styles from "../style.js";
import { logo1 } from "../assets";
import {Link, NavLink} from "react-router-dom";



const Modal = ({onClose}) => {
    return(
    <>
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-center text-3xl font-semibold">
                                Recuperación de contraseña
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                Si tu dirección de correo electrónico ya existe en nuestra base de datos, recibirás un enlace de recuperación de contraseña en tu dirección de correo electrónico en unos minutos
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <NavLink to={'/Login'}>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onClose}
                            >
                                Entendido
                            </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

    </>
    );
}
function ForgotSection()  {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <section className="h-full bg-neutral-200 ">

            <div className="container h-full p-10">

                <div className="w-full sm:ml-10">
                    <div className="block rounded-lg bg-white shadow-lg">
                        <div className="g-0 lg:flex lg:flex-wrap">

                            <div className="px-4 md:px-0 lg:w-6/12">
                                <div className="md:mx-6 md:p-12">

                                    <div className="text-center mb-5 pt-5">

                                        <h4 className="mt-1 pb-1 text-xl font-semibold">
                                            ¿Olvidó su contraseña?
                                        </h4>

                                    </div>
                                    <p className="text-center mt-5 sm:mx-4 mb-5">Por favor ingrese el correo que utilizó para registrarse.</p>

                                    <form className=" px-8 pt-6 pb-8 mb-4">

                                        <div className="mb-4">
                                            <label class="uppercase block text-gray-700 text-sm font-bold mb-2" for="username">
                                                Correo electrónico
                                            </label>
                                            <input class="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder=""/>
                                        </div>



                                        <div className="mb-12 pb-1 pt-1 text-center">

                                            <button
                                                onClick={openModal}
                                                className="w-full mt-4 bg-purpleblue inline-block  rounded px-6 pb-2 pt-2.5 text-ss font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                type="button"

                                            >
                                                Recuperar contraseña
                                            </button>




                                        </div>


                                        <div className="flex flex-col items-center ">
                                            <NavLink to={'/Login'}>
                                            <p className="text-center w-60 mb-4 mr-2 pb-3 border-b-8 border-babyblue hover:underline">Regresar a iniciar sesión</p>
                                            </NavLink>
                                        </div>

                                    </form>
                                </div>
                            </div>


                            <div
                                className={`flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-cover bg-center ${styles.flexStart}`}
                                style={{
                                    backgroundImage:
                                        `url('https://images.unsplash.com/photo-1536675572774-1b66ac2e26e9?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal onClose={closeModal} />}
        </section>
    );
}

export default ForgotSection