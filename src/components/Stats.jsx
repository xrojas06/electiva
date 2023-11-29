import { stats } from "../constants";
import styles from "../style";

const Stats = (props) => (
    <section className={`${styles.flexCenter} flex-row flex-wrap mt-20 mb-20 justify-center items-center`}>
      <div className={`flex-1 flex justify-center items-center flex-row m-3`}>
        <h4 className="font-Heebo font-semibold  text-center xs:text-[30px] text-[40.89px] xs:leading-[32.16px] leading-[43.16px] text-black">
            La parafilia se refiere a patrones de comportamiento sexual en los que la gratificación sexual se obtiene de objetos, situaciones, o actividades atípicas o inusuales.
            Estos patrones pueden ser considerados atípicos en el sentido de que se
            desvían de las prácticas sexuales convencionales o normativas. La clasificación de ciertos comportamientos como parafilias a menudo depende del contexto cultural y social.
        </h4>
      </div>
    </section>
);
export default Stats;
