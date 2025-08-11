import React from 'react';
import "./navmobile.css";
import { NavLink } from 'react-router-dom';
import Context from '../../../utils/context';
import axios from 'axios';
import swalert from '../../../utils/swalert';
import Loader from '../../../utils/loader';

const Navmobile = () => {

    const path = location.pathname;
    const endpoint = import.meta.env.VITE_API;
    const context = React.useContext(Context);

    const [loading, setLoading] = React.useState(false);
    const [notification, setNotification] = React.useState([]);

    const hide = () => {
        const navmobile = document.querySelector('.navmobile');
        navmobile.classList.remove('show');
    }

    const logout = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${endpoint}/logout/client`)
            response.data.msg && await swalert(response.data.msg, "success", 2500);
            window.location.reload();
        } catch (error) {
            error.response && swalert(error.response.data, "error", 2500);
        } finally {
            setLoading(false);
        }
    }

    // React.useEffect(() => {
    //     const navmobile = document.querySelector('.navmobile');
    //     navmobile.classList.contains('show') && navmobile.classList.remove('show');
    // }, [path])

    if (loading) return <Loader/>

    return (
        <div className='navmobile'>
            <div className='top-nav'>
                <div className='nav-logo'>
                    <img src="/img/logo.ico" width={28} alt="stresslo logo" />
                    <h1>stresslo</h1>
                </div>
                <div className='fa-solid fa-xmark fa-xl' onClick={() => hide()} style={{color: 'var(--yellow)'}}></div>
            </div>
            <div className='bot-nav'>
                <NavLink to={context.username ? "/user" : "/login"} className='bot-nav-item' style={{boxShadow: 'unset'}}>
                    <div className='fa-solid fa-circle-user fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'var(--yellow)', fontFamily: 'sans-serif'}}>{context.username ? context.username : "Sign in"}</h1>
                </NavLink>
                <NavLink className='bot-nav-item ' style={{boxShadow: 'unset'}}>
                    <div className='fa-solid fa-fire fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'var(--yellow)', marginLeft: '2px', fontFamily: 'sans-serif'}}>Top templates</h1>
                </NavLink>
                <NavLink className='bot-nav-item ' style={{boxShadow: 'unset'}}>
                    <div className='fa-solid fa-circle-dollar-to-slot fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'var(--yellow)', fontFamily: 'sans-serif'}}>Sell your project</h1>
                </NavLink>
            </div>
            <div className='mid-nav-notification'>
                <h1 style={{fontSize: '1rem', color: 'var(--text)', fontFamily: 'sans-serif'}}>Notification</h1>
                <div style={{width: '100%', height: "200px", marginTop: '10px', boxShadow: 'unset', border: '1px solid var(--prime)', borderRadius: '4px'}}>
                    {(!notification.length) ?
                    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text)', fontSize: '0.9rem', fontFamily: 'sans-serif'}}>
                        No recent notification
                    </div>
                    :
                    <div className='nav-notification'>
                        <div className='notification-item'>
                            <h1 style={{fontFamily: 'sans-serif', fontSize: '0.85rem', color: 'var(--text)'}}>contoh</h1>
                            <div className='notification-item-wrapper'>
                                <h1 style={{fontFamily: 'sans-serif', fontSize: '0.6rem', color: 'var(--text)'}}>7 Aug 2022</h1>
                                <h1 style={{fontFamily: 'sans-serif', fontSize: '0.6rem', color: 'var(--text)'}}>19.37</h1>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className='mid-nav-route'>
                <NavLink className='nav-route-item'>
                    <div className='box-route-item '>
                        <div className='fa-solid fa-circle-info fa-lg'></div>
                    </div>
                    <div className='text-route-item'>About</div>
                </NavLink>
                <NavLink className='nav-route-item'>
                    <div className='box-route-item '>
                        <div className='fa-brands fa-teamspeak fa-lg'></div>
                    </div>
                    <div className='text-route-item'>T&C</div>
                </NavLink>
                <NavLink className='nav-route-item'>
                    <div className='box-route-item'>
                        <div className='fa-solid fa-envelope fa-lg'></div>
                    </div>
                    <div className='text-route-item'>Contact</div>
                </NavLink>
                <NavLink className='nav-route-item'>
                    <div className='box-route-item'>
                        <div className='fa-solid fa-triangle-exclamation fa-lg'></div>
                    </div>
                    <div className='text-route-item'>Report</div>
                </NavLink>
            </div>
            <div className='bot-nav' style={{marginTop: '30px'}}>
                {(context.token) &&
                <NavLink onClick={() => logout()} className='bot-nav-item' style={{boxShadow: 'unset'}}>
                    <div className='fa-solid fa-right-from-bracket fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'var(--yellow)', fontFamily: 'sans-serif'}}>Keluar</h1>
                </NavLink>
                }
            </div>
        </div>
    )
}

export default Navmobile