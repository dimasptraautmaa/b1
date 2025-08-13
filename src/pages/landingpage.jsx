import React, { useContext } from 'react'
import sx from "./landingpage.module.css";
import data from '../../data/data';
import Context from '../../utils/context';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();
    const context = useContext(Context);

    return(
        <div className={`${sx["landing-page"]}`}>
            <div className={`${sx["section"]}`}>
                <div className={`${sx["wrapper-text"]}`}>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                    <div className={`${sx["bg-text"]}`}>THIS IS FOR YOU !!!</div>
                </div>
                <div className={`${sx["photo-card-1"]}`}>
                    <div className={`${sx["photo-card-image"]}`}>
                        <img src="/img/2.jpg" className={`${sx["card-img"]}`} alt="" />
                    </div>
                    <div className={`${sx["photo-card-text"]}`}>
                        <h3>Every Moments</h3>
                    </div>
                </div>
                <div className={`${sx["photo-card-2"]}`}>
                    <div className={`${sx["photo-card-image"]}`}>
                        <img src="/img/2.jpg" className={`${sx["card-img"]}`} alt="" />
                    </div>
                    <div className={`${sx["photo-card-text"]}`}>
                        <h3>Every Moments</h3>
                    </div>
                </div>
                <div className={`${sx["photo-card-3"]}`}>
                    <div className={`${sx["photo-card-image"]}`}>
                        <img src="/img/1.jpg" className={`${sx["card-img"]}`} alt="" />
                    </div>
                    <div onClick={() => {context.play(); navigate('/birthday')}} style={{display: 'flex', gap: '5px', color: '#404040', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}} className={`${sx["photo-card-text"]}`}>
                        <h3>Check this out</h3>
                        <div className='fas fa-arrow-right fa-lg'></div>
                    </div>
                </div>
            </div>
            {/* <div onClick={() => {context.play(); navigate('/birthday')}} className={`${sx["button"]}`}>
                Check this out
                <div className='fas fa-arrow-right fa-lg'></div>
            </div> */}
        </div>
    )
}

export default LandingPage;