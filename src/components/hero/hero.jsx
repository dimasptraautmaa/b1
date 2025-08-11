import React from 'react';
import axios from 'axios';
import Loader from '../../../utils/loader';
import swalert from '../../../utils/swalert';
import { useNavigate } from 'react-router-dom';
import "./hero.css";

const Hero = () => {

    const navigate = useNavigate();
    const endpoint = import.meta.env.VITE_API
    const [ loading, setLoading ] = React.useState(false);

    if (loading) return <Loader text={'scraping content'}/>

    return (
        <div className='hero'>
            <div style={{width: 'max-content', padding: '8px 20px', color: 'var(--text)', borderRadius: '30px', border: '1px solid var(--text)', font: '0.85rem sans-serif', marginBottom: '10px'}}>Powered By OpenAI</div>
            <div className='hero-wrapper'>
                <h1 className='hero-title'><span>Pesan Gak Ribet,</span> Semua Senang!</h1>
                <h3 className='hero-desc'>Bikin operasional tempat ngopi & makan lebih efisien pake Stresslo! Pelanggan cukup scan QR Code di meja, pilih menu, dan pesan tanpa harus antri atau malu. Cocok buat kafe, restoran, atau tempat makan yang mau bikin proses pemesanan lebih cepat dan praktis.</h3>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', position: 'relative', width: '100%'}}>
                <div className='button' style={{ width: '170px', maxWidth: '50%', backgroundColor: 'var(--prime)', color: 'var(--yellow)' }}>
                    <div className='fa-solid fa-play fa-md'/>
                    Lihat Demo
                </div>
                <div onClick={() => navigate('/dashboard')} className='button' style={{ fontFamily: 'sans-serif', maxWidth: '50%', fontWeight: '600', width: '170px' }}>
                    Cobain Yuk!
                </div>
            </div>
        </div>
    )
}

export default Hero;