import { stats } from "../constants";
import styles from "../style";

const Info = (props) => (
    <section className={`${styles.flexCenter} flex-row flex-wrap mt-5 justify-self-start items-start`}>
        <div className={`flex-1 flex justify-self-start items-start sm:flex-row flex-col mb-3 mr-3 ml-3 mt-10`}>
            <div className={'flex flex-col sm:my-20 sm:mr-20 mb-10'}>
            <p className="font-Heebo font-normal text-justify xs:text-[20px] text-[20.89px] xs:leading-[30.16px] leading-[30.16px] text-purpleblue">
                Somos una empresa con veinte años de experiencia dedicada al suministro deproductos y servicios, para integración de tecnologías para
                la industria yestaciones de peaje.
                 </p>
            <p  className="font-Heebo font-normal text-justify xs:text-[20px] text-[20.89px] xs:leading-[30.16px] leading-[30.16px] text-purpleblue mt-6">
                Contamos con la asistencia y respaldo de excelentes marcas en el mercado.Hacemos el diseño y desarrollo de circuitos a la medida de sus necesidades.
            </p>
            </div>
            <img src="https://images.unsplash.com/photo-1611839267623-8a861c18d52c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="" className="w-[500px] h-[400px] sm:ml-30 mb-20"/>

        </div>
    </section>
);
export default Info;
