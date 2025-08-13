import React, { useRef } from 'react'
import sx from "./birthday.module.css";
import data from '../../../data/data';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Birthday = () => {

    const [showLottie, setShowLottie] = React.useState(false);

    const handleAfterAnimate = () => {
        const photoCard = document.getElementById('photo-card');
        photoCard.style.transform = 'unset';
        photoCard.style.animation = 'none';
        const page = document.getElementById('page1')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    document.getElementById('page2')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    observer.disconnect();
                }
            })
        })
        observer.observe(page);
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (!showLottie) {
                setShowLottie(true)
            }
        }, 4000);
        return () => clearTimeout(timer);
    }, [showLottie])

    React.useEffect(() => {
        const pageId = ["page1", "page2"];
        const pages = pageId.map(id => document.getElementById(id));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const texts0 = entry.target.querySelectorAll(`.${sx["animate-text-0"]}`);
                const texts1 = entry.target.querySelectorAll(`.${sx["animate-text-1"]}`);
                const items = entry.target.querySelectorAll(`.${sx["item"]}`);

                if (entry.isIntersecting) {
                    // PAGE 1
                    texts0.forEach(el => el.classList.add(sx.animateActive));
                    texts1.forEach(el => el.classList.add(sx.animateActive));

                    // PAGE 2
                    items.forEach((el, i) => {
                    el.style.animationDelay = `${i * 0.30}s`;
                    el.classList.add(sx.animateActive);
                    });
                } else {
                    // texts0.forEach(el => el.classList.remove(sx.animateActive));
                    // texts1.forEach(el => el.classList.remove(sx.animateActive));
                }
            })
        }, { threshold: 0.8 });

        pages.forEach(page => { if (page) observer.observe(page); })
        return () => observer.disconnect()
        
    }, [])

    return(
        <div className={`${sx["container"]}`}>
            <div id='page1' className={`${sx["page"]}`}>
                {(showLottie) && <DotLottieReact className={`${sx["celebration1"]}`} src='/celebration.lottie' autoplay loop/>}
                <div className={`${sx["animate-text-container"]}`}>
                    <div className={`${sx["animate-text-0"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["animate-text-1"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["animate-text-0"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["animate-text-1"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["animate-text-0"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["animate-text-1"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["animate-text-0"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["animate-text-1"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["animate-text-0"]}`}>HAPPY BIRTHDAY</div>
                    <div className={`${sx["animate-text-1"]}`}>HAPPY BIRTHDAY</div>
                </div>
                <div className={`${sx["hero-container"]}`}>
                    <div id='photo-card' onAnimationEnd={() => handleAfterAnimate()} className={`${sx["photo-card"]}`}>
                        <div className={`${sx["photo-card-image"]}`}>
                            <img src="/img/2.jpg" className={`${sx["card-img"]}`} alt="" />
                        </div>
                        <div className={`${sx["photo-card-text"]}`}>
                            <h3>19-11-2003</h3>
                        </div>
                    </div>
                    <div style={{marginTop: '10px'}} className={`${sx["text"]}`}>HAPPY BIRTHDAY {data.nama.toUpperCase()}</div>
                    <div style={{fontSize: '0.9rem',marginTop: '5px', lineHeight: '1.5', width: '700px', maxWidth: '100%'}} className={`${sx["text"]}`}>Selamat ulang tahun sayang, semoga tahun ini bawa banyak senyum, cerita seru, dan semua mimpi kamu pelan-pelan jadi nyata. Terima kasih udah jadi rumah terhangat buat hatiku — semoga kita terus saling jaga, saling dukung, dan saling sayang sampai nanti</div>
                </div>
            </div>
            <div id="page2" className={`${sx["page"]}`}>
                <div className={`${sx["gallery-container"]}`}>
                    <div className={`${sx["item"]} ${sx["a"]}`}>
                        <img src="/img/1.jpg" alt="1" />
                    </div>

                    <div className={`${sx["item"]} ${sx["b"]}`}>
                        <img src="/img/2.jpg" alt="1" />
                    </div>

                    <div className={`${sx["item"]} ${sx["c"]}`}>
                        <img src="/img/1.jpg" alt="1" />
                    </div>

                    <div className={`${sx["item"]} ${sx["d"]}`}>
                        <img src="/img/2.jpg" alt="1" />
                    </div>

                    <div className={`${sx["item"]} ${sx["e"]}`}>
                        <img src="/img/1.jpg" alt="1" />
                    </div>

                    <div className={`${sx["item"]} ${sx["f"]}`}>
                        <img src="/img/2.jpg" alt="1" />
                    </div>

                    <div className={`${sx["item"]} ${sx["g"]}`}>
                        <img src="/img/1.jpg" alt="1" />
                    </div>

                    <div className={`${sx["item"]} ${sx["h"]}`}>
                        <img src="/img/2.jpg" alt="1" />
                    </div>

                    <div className={`${sx["item"]} ${sx["i"]}`}>
                        <img src="/img/1.jpg" alt="1" />
                    </div>

                    <div className={`${sx["item"]} ${sx["j"]}`}>
                        <img src="/img/2.jpg" alt="1" />
                    </div>
                </div>
            </div>
            <div id='page3' className={`${sx["page"]}`}>
                <div className={`${sx["third-container"]}`}>
                    <DotLottieReact className={`${sx["cake"]}`} src='/cake.lottie' autoplay loop/>
                    <div style={{fontSize: '1.6rem'}} className={`${sx["text"]}`}>SELAMAT 21 TAHUN YA SEMOGA MAKIN CANTIK, PANJANG UMUR, SEHAT SELALU!</div>
                    <div className='fas fa-arrow-right fa-lg' style={{color: 'var(--primary)', margin: '30px 0px', transform: 'rotateZ(90deg)'}}></div>
                    <div style={{marginTop: '10px', fontSize: '0.95rem'}} className={`${sx["text"]}`}>AKU PUNYA HADIAH BUAT KAMU!</div>
                    <DotLottieReact className={`${sx["celebration1"]}`} src='/celebration.lottie' autoplay loop/>
                </div>
            </div>
        </div>
    )
}

export default Birthday