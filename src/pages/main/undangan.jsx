import React, { useContext } from 'react'
import sx from "./undangan.module.css";
import Context from '../../../utils/context';
import data from '../../../data/data';
import ScrollFadeIn from '../../fragments/scrollFadeIn/scrollFadeIn';

const Undangan = () => {

    const context = useContext(Context);

    return (
        <div className={`${sx["container"]}`}>
            <div className={`${sx["page"]}`}>
                <img src="/img/f1.png" className={`${sx["f1"]}`} alt="" />
                <img src="/img/f2.png" className={`${sx["f2"]}`} alt="" />
                <ScrollFadeIn>
                    <div className={`${sx["wrapper"]}`}>
                        <div className={`${sx["title"]}`}>THE WEDDING OF</div>
                        <div className={`${sx["groom"]}`}>{data.namaPria}</div>
                        <div className={`${sx["and"]}`}>&</div>
                        <div className={`${sx["bride"]}`}>{data.namaWanita}</div>
                        <div className={`${sx["date"]}`}>{data.tanggalAcara}</div>
                        <div className={`${sx["box-doa"]}`}>
                            <div>"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."</div>
                            <div>Q.S. Ar-Rum : 21</div>
                        </div>
                    </div>
                </ScrollFadeIn>
            </div>
            <div style={{ backgroundColor: 'var(--primary)' }} className={`${sx["page"]}`}>
                
            </div>
        </div>
    )
}

export default Undangan;