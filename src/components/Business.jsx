import styles, { layout } from "../style";
import ReactPlayer from 'react-player';
import introVideo from '../videoelectiva.mp4'


const Business = () =>  (



    <div className={`${styles.flexCenter} ${styles.flexRow} mt-28`}>
        <div className={`${styles.flexColumn} ${styles.textColumn} p-10 bg-orange-100 bg-opactity-10 rounded-lg mr-20`}>
            <p className={'text-[20px] mb-16 text-justify'}>
                En este video, exploraremos la importancia de la educación en sexualidad como un pilar fundamental para prevenir violencias basadas en género. Descubriremos cómo el conocimiento y el respeto pueden ser poderosas herramientas para crear sociedades más equitativas y libres de violencia
            </p>
        </div>
        <div className={styles.videoColumn}>
            <ReactPlayer url={introVideo} controls />
        </div>
    </div>


);

export default Business;
