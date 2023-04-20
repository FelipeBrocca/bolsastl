import React, { useState, useEffect, useRef } from 'react'
import Image from '../Image/Image'


const BannerItem = ({ src, text }) => {

    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsActive(true);
                observer.unobserve(entry.target);
            }
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            const observer = new IntersectionObserver(([entry]) => {
                if (!entry.isIntersecting) {
                    setIsActive(false);
                }
            });
            observer.observe(ref.current);
            return () => observer.disconnect();
        }
    }, [isActive]);

    return (
        <div className={`banner-item ${isActive ? 'active' : ''}`} ref={ref}>
            <Image src={src} className='banner-item-img' alt='banner-i' />
            <p className='banner-item-text'>{text}</p>
        </div>
    )
}

export default BannerItem