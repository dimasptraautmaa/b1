import React, { useContext } from 'react'
import sx from "./landingpage.module.css";
import data from '../../data/data';
import Context from '../../utils/context';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className={`${sx["landing-page"]}`}>
            <div className={`${sx["section"]}`}>
                <div className={`${sx["wrapper-text"]}`}>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["bg-text"]}`}>HAPPY BIRTHDAY</div>
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
                    <div className={`${sx["photo-card-text"]}`}>
                        <h3>Every Moments</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;