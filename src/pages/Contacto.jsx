import React from "react";
import styles from "../style.js"
import { Form, Footer, Navbar, Stats, Testimonials, Hero, Stats2 } from "../components";

const Contacto = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`bg-cover bg-center ${styles.flexStart}`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW5ldHxlbnwwfHwwfHx8Mg%3D%3D')` }}>
            <div className={`${styles.boxWidth}`}>
                <Hero titulo = '¿Buscas algo realmente único?  Te escuchamos' margintop='mt-20 -mb-5'
                      color = 'text-white ' colo2='text-white opacity-75'/>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <h2 className={`font-Heebo font-semibold xs:text-[48px] text-[40px] text-purpleblue text-center xs:leading-[76.8px] leading-[66.8px] w-full mt-10 -mb-10`}>Contáctanos</h2>
                <Stats2 texto1='Nuestro equipo está listo para crear un pedido a tu medida. Comparte tus detalles y haremos que cobren vida de manera extraordinaria.'/>
                <Form/>
            </div>
        </div>

        <div className={`bg-purpleblue ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>

)

export default Contacto