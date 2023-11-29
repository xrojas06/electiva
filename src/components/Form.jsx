import { stats } from "../constants";
import styles from "../style";
import { Container, Row, Col } from "react-bootstrap";
const Form = (props) => (

    <div className="container mb-20 mt-10 mx-auto md:px-6">
        <section className="mb-10">

            <div className="flex flex-wrap">
                <div className="mb-12 w-full basis-auto md:px-3 lg:mb-0 lg:w-6/12 lg:px-6">
                    <form>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input type="text"
                                   className="peer block min-h-[auto] w-full  rounded border-[#3261a3] border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                   id="exampleInput90" placeholder="Nombre completo" />
                            <label
                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                htmlFor="exampleInput90">Nombre completo
                            </label>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input type="email"
                                   className="peer block min-h-[auto] w-full border-[#3261a3] rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                   id="exampleInput91" placeholder="Email address" />
                            <label
                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                htmlFor="exampleInput91">Email
                            </label>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <textarea
                                className="peer block min-h-[auto] w-full border-[#3261a3] rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                                <label htmlFor="exampleFormControlTextarea1" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                Cuéntanos tu idea</label>
                        </div>

                        <button type="button" data-te-ripple-init data-te-ripple-color="light"
                                className="mb-6 inline-block w-full rounded bg-green-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#007e30] transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(0,133,68,0.12)] focus:bg-green-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(0,133,68,0.12)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(0,133,68,0.12)]">
                            Send
                        </button>
                    </form>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-5/12 sm:ml-10">
                    <div className="flex flex-col">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-10/12 md:px-3 lg:px-6">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <div className="inline-block rounded-md bg-[#3261a3] p-4 text-babyblue">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                             stroke="white" className="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-6 grow">
                                    <p className="mb-2 font-bold dark:text-white">
                                        Número de telefono
                                    </p>
                                    <p className="text-neutral-500 dark:text-neutral-200">
                                        +57 315 367 0951
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-10/12 md:px-3 lg:px-6">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <div className="inline-block rounded-md bg-[#3261a3] p-4 text-primary">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4"
                                             stroke="white" className="h-6 w-6">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341">
                                            </path></svg>
                                    </div>
                                </div>
                                <div className="ml-6 grow">
                                    <p className="mb-2 font-bold dark:text-white">
                                        Correo electrónico
                                    </p>
                                    <p className="text-neutral-500 dark:text-neutral-200">
                                        projas9@integraciontecnologica.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-10/12 md:px-3 lg:px-6">
                            <div className="align-start flex">
                                <div className="shrink-0">
                                    <div className="inline-block rounded-md bg-[#3261a3] p-4 text-primary">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                             stroke="white" className="h-6 w-6">
                                            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-6 grow">
                                    <p className="mb-2 font-bold dark:text-white">
                                        Dirección
                                    </p>
                                    <p className="text-neutral-500 dark:text-neutral-200">
                                        Calle 93 No. 60B-65 Oficina 301
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
);

export default Form;