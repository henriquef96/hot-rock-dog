import { useState, useEffect, useRef } from 'react';
import Logo from "/logo.png";
import videoFile from '../assets/video/video.mp4';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function Home() {
    function checkRestaurantOpen(): boolean {
        const data = new Date();
        const hora = data.getHours();
        return hora >= 19 && hora < 23;
    }
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const restaurantIsOpen = checkRestaurantOpen();
        setIsOpen(restaurantIsOpen);

        if (!restaurantIsOpen) {
            Toastify({
                text: "Estamos fechado no momento!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, rgb(200, 0, 0), red)",
                },
            }).showToast();
        }
    }, []);

    const statusClass = isOpen ? 'bg-green-600' : 'bg-red';

    const scrollCardapio = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        };

        if (scrollCardapio.current) {
            scrollCardapio.current.addEventListener('click', handleScroll);
        }

        return () => {
            if (scrollCardapio.current) {
                scrollCardapio.current.removeEventListener('click', handleScroll);
            }
        };
    }, []);

    return (
        <main >
            <div className='h-dvh w-full flex flex-col justify-center items-center'>
                <video className='absolute w-full h-full object-cover' src={videoFile} autoPlay loop muted></video>
                <div className='z-10 flex flex-col justify-center items-center'>

                    <div className='flex flex-col justify-center items-center mb-16'>
                        <img src={Logo} alt="Logo" className='w-32 h-32 rounded-full hover:rotate-2 hover:scale-110 duration-300' />
                        <h1 className='text-4xl mt-4 mb-2 font-bold text-gray-200'>Hot Rock Dog</h1>
                        <span className='text-gray-200 '><i className="fa-solid fa-location-dot mr-1 text-red"></i>Rua Curitiba, 520 - Fazenda Rio Grande - PR</span>

                        <div className={`px-4 py-1 rounded-lg mt-5 ${statusClass}`}>
                            <span className='text-gray-200'>Ter a Dom - 19:00 às 23:00</span>
                        </div>

                        <div className='mt-5'>
                            <a href="https://api.whatsapp.com/send?phone=5541987479523" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp m-2 text-2xl hover:scale-125 duration-300 text-gray-200"></i>
                            </a>
                            <a href="https://www.instagram.com/hotrockdog_frg/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram m-2 text-2xl hover:scale-125 duration-300 text-gray-200"></i>
                            </a>
                            <a href="https://www.facebook.com/hotrockdog" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook m-2 text-2xl hover:scale-125 duration-300 text-gray-200"></i>
                            </a>
                        </div>
                    </div>

                    <div className='absolute bottom-0 mb-16 text-center'>
                        <h2 className='text-2xl md:text-3xl text-gray-200'>Conheça nosso menu</h2>
                        <i className="fas fa-chevron-down text-gray-200 cursor-pointer" ref={scrollCardapio}></i>
                    </div>

                </div>
            </div>
        </main>
    );
}