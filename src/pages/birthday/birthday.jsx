import React, { useContext, useRef } from 'react'
import sx from "./birthday.module.css";
import data from '../../../data/data';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Context from '../../../utils/context';

const Birthday = () => {

    const context = useContext(Context);

    const [showLottie, setShowLottie] = React.useState(false);
    const [isAllow, setIsAllow] = React.useState(false);
    const [isTrue, setIsTrue] = React.useState(false);
    const [fakeAnswer, setFakeAnswer] = React.useState("Engga!")

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

    const handleFakeAnswer = () => {
        if (fakeAnswer == "Engga!") {
            setFakeAnswer("Engga! salah lagi");   
        }
        else {
            setIsTrue(true);
        }
    }

    React.useEffect(() => {
        if (isTrue) {
            const content = document.getElementById("gift-content");
            content.style.filter = "unset";
            const page = document.getElementById("page5");
            page?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [isTrue])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (!showLottie) {
                setShowLottie(true)
            }
        }, 4000);
        return () => clearTimeout(timer);
    }, [showLottie])

    React.useEffect(() => {
        const pageId = ["page1", "page2", "page3"];
        const pages = pageId.map(id => document.getElementById(id));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const texts0 = entry.target.querySelectorAll(`.${sx["animate-text-0"]}`);
                const texts1 = entry.target.querySelectorAll(`.${sx["animate-text-1"]}`);
                const items = entry.target.querySelectorAll(`.${sx["item"]}`);
                const third = entry.target.querySelector(`.${sx["third-container"]}`);

                if (entry.isIntersecting) {
                    // PAGE 1
                    texts0.forEach(el => el.classList.add(sx.animateActive));
                    texts1.forEach(el => el.classList.add(sx.animateActive));

                    // PAGE 2
                    items.forEach((el, i) => {
                    el.style.animationDelay = `${i * 0.30}s`;
                    el.classList.add(sx.animateActive);
                    });

                    // PAGE 3 
                    third.classList.add(sx.animateActive)
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
            <div onClick={() => {(context.isPlay) ? context.pause() : context.play()}} className={`${sx["floating-button"]}`}>
                {(context.isPlay) ? <div className='fas fa-pause fa-lg'></div> : <div className='fas fa-play fa-lg'></div>}
            </div>
            <div id='page1' className={`${sx["page"]}`}>
                {(showLottie) && <DotLottieReact className={`${sx["celebration1"]}`} src='/celebration.lottie' autoplay/>}
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
                        <div className={`${sx["photo-card-image"]}`}><img src={data.heroFoto} className={`${sx["card-img"]}`} alt="" /></div>
                        <div className={`${sx["photo-card-text"]}`}><h3>In Memory</h3></div>
                    </div>
                    <div style={{marginTop: '10px'}} className={`${sx["text"]}`}>{data.heroTitle}</div>
                    <div style={{fontSize: '0.9rem',marginTop: '5px', lineHeight: '1.5', width: '700px', maxWidth: '100%'}} className={`${sx["text"]}`}>{data.heroUcapan}</div>
                </div>
            </div>
            <div id="page2" className={`${sx["page"]}`}>
                <div className={`${sx["gallery-container"]}`}>
                    <div className={`${sx["item"]} ${sx["a"]}`}><img src="/img/1.jpg" alt="1" /></div>
                    <div className={`${sx["item"]} ${sx["b"]}`}><img src="/img/2.jpg" alt="1" /></div>
                    <div className={`${sx["item"]} ${sx["c"]}`}><img src="/img/1.jpg" alt="1" /></div>
                    <div className={`${sx["item"]} ${sx["d"]}`}><img src="/img/2.jpg" alt="1" /></div>
                    <div className={`${sx["item"]} ${sx["e"]}`}><img src="/img/1.jpg" alt="1" /></div>
                    <div className={`${sx["item"]} ${sx["f"]}`}><img src="/img/2.jpg" alt="1" /></div>
                    <div className={`${sx["item"]} ${sx["g"]}`}><img src="/img/1.jpg" alt="1" /></div>
                    <div className={`${sx["item"]} ${sx["h"]}`}><img src="/img/2.jpg" alt="1" /></div>
                    <div className={`${sx["item"]} ${sx["i"]}`}><img src="/img/1.jpg" alt="1" /></div>
                    <div className={`${sx["item"]} ${sx["j"]}`}><img src="/img/2.jpg" alt="1" /></div>
                </div>
            </div>
            <div id='page3' className={`${sx["page"]}`}>
                <div className={`${sx["third-container"]}`}>
                    <DotLottieReact className={`${sx["cake"]}`} src='/cake.lottie' autoplay loop/>
                    <div style={{fontSize: '1.6rem'}} className={`${sx["text"]}`}>{data.thirdUcapan}</div>
                    <div className='fas fa-arrow-right fa-lg' style={{color: 'var(--primary)', margin: '30px 0px', transform: 'rotateZ(90deg)'}}></div>
                    <div style={{marginTop: '10px', fontSize: '0.95rem'}} className={`${sx["text"]}`}>AKU PUNYA HADIAH BUAT KAMU!</div>
                    <DotLottieReact className={`${sx["celebration1"]}`} src='/celebration.lottie' autoplay loop/>
                </div>
            </div>
            {(!isTrue) && 
            <div id='page4' className={`${sx["page"]}`}>
                <div className={`${sx["question-container"]}`}>
                    {(isAllow) ?
                        <>
                            <div style={{fontSize: '1.6rem'}} className={`${sx["text"]}`}>KAMU MASIH SAYANG GA SAMA AKU?!</div>
                            <div className={`${sx["question-wrapper"]}`}>
                                <div onClick={() => handleFakeAnswer()} style={{backgroundColor: 'unset', color: 'var(--primary)'}} className={`${sx["question-button"]}`}>{fakeAnswer}</div>
                                <div onClick={() => setIsTrue(true)} className={`${sx["question-button"]}`}>Sayang dong</div>
                            </div>
                        </>
                    : 
                        <>
                            <div style={{fontSize: '1.6rem'}} className={`${sx["text"]}`}>TAPI JAWAB PERTANYAAN AKU DULU YAA!!!</div>
                            <div className={`${sx["question-wrapper"]}`}>
                                <div onClick={() => setIsAllow(true)} className={`${sx["question-button"]}`}>Iya, boleh</div>
                            </div>
                        </>
                    }
                </div>
            </div>
            }
            <div id='page5' className={`${sx["page"]}`}>
                <div className={`${sx["gift-container"]}`}>
                    <DotLottieReact className={`${sx["box"]}`} src='/box.lottie' autoplay/>
                    <div style={{fontSize: '1.6rem'}} className={`${sx["text"]}`}>PILIH SALAH SATU HADIAH YAAA!</div>
                    <DotLottieReact className={`${sx["celebration1"]}`} src='/celebration.lottie' autoplay/>
                    <div id='gift-content' className={`${sx["gift-wrapper"]}`}>
                        <div className={`${sx["gift-button"]}`}>Pajero</div>
                        <div className={`${sx["gift-button"]}`}>Skincare</div>
                        <div className={`${sx["gift-button"]}`}>Civic</div>
                        <div className={`${sx["gift-button"]}`}>Gacoan lv 8</div>
                        <div className={`${sx["gift-button"]}`}>Umroh</div>
                        <div className={`${sx["gift-button"]}`}>Ke Jepang</div>
                        <div className={`${sx["gift-button"]}`}>Vespa</div>
                        <div className={`${sx["gift-button"]}`}>Mie Ayam</div>
                        <div className={`${sx["gift-button"]}`}>Aerox</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Birthday