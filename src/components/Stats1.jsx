import { stats } from "../constants";
import styles from "../style";

const Stats1 = (props) => (
    <section className={`${styles.flexCenter} flex-row flex-wrap mt-5 justify-self-start items-start`}>
        <div className={`flex-1 flex justify-self-start items-start flex-col m-3`}>
            <h4 className="font-Heebo font-semibold  xs:text-[30px] text-[25.89px] xs:leading-[53.16px] leading-[43.16px] text-blackcool m-6">
                {props.texto1}
            </h4>
            <p className="font-Heebo font-normal text-justify xs:text-[20px] text-[20.89px] xs:leading-[30.16px] leading-[23.16px] text-blackcool m-6">
                En cada selección de producto, te brindamos la oportunidad de compartir detalles clave sobre tus necesidades y preferencias.
                Una vez completada tu selección, revisa los detalles y déjanos encargarnos del resto. Mantenemos los servicios en estado pendiente para
                afinarlos según tus indicaciones, garantizando una adaptación precisa.
                Pronto recibirás notificaciones sobre la aprobación o el rechazo de cada servicio, asegurándonos de que el resultado final sea exactamente lo que tenías en mente
            </p>
        </div>
    </section>
);
export default Stats1;
