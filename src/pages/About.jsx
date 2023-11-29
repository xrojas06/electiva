import React from "react";
import styles from "../style.js"
import { LogSection, Info, Form, Footer, Navbar, Stats, Testimonials, Hero, Stats2 } from "../components";

const About = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`bg-cover bg-center ${styles.flexStart}`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
            <div className={`${styles.boxWidth}`}>
                <Hero titulo = 'Descubre nuestro compromiso : Haciendo que cada viaje sea más eficiente con nuestros equipos' margintop='mt-28 -mb-5 '
                      color = 'text-dimWhite ' color2='text-white opacity-75'/>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                < Info />
            </div>
        </div>

        <div className={`bg-cover bg-top ${styles.flexStart}`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469514115399-80ff752812ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
            <div className={`${styles.boxWidth}`}>
                <LogSection />
            </div>
        </div>

        <div className={`bg-purpleblue ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>

)

export default About
