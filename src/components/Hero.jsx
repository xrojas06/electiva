import styles from "../style";
import { discount, robot } from "../assets";


const Hero = (props) => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ${props.margintop}`}>

        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className={`flex-1 font-Heebo font-semibold ss:text-[60x] text-[45px] ${props.color} ss:leading-[70.8px] leading-[75px] ${props.margintop}`}>
            {props.titulo} <br className="sm:block hidden" />{" "}
            <span className={`${props.color}`}>{props.subtitulo}</span>{" "}
          </h1>
        </div>

        <h1 className={`font-Heebo font-semibold ss:text-[68px] text-[52px] ${props.color2} ss:leading-[100.8px] leading-[75px] w-full`}>
          {props.subsubtitulo}
        </h1>
        <p className={`${styles.paragraph2} ${props.margint} font-semibold max-w-[800px] `}>
          {props.texto}

        </p>
      </div>

        
    </section>
  );
};

export default Hero;
