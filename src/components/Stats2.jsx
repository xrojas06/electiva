import { stats } from "../constants";
import styles from "../style";

const Stats2 = (props) => (
    <section className={`${styles.flexCenter} flex-row flex-wrap mt-5 justify-self-start items-start`}>
        <div className={`flex-1 flex justify-self-start items-start flex-col m-3`}>
            <h4 className="font-Heebo font-medium text-center xs:text-[30px] text-[25.89px] xs:leading-[53.16px] leading-[43.16px] text-blackcool m-6">
                {props.texto1}
            </h4>
        </div>
    </section>
);
export default Stats2;