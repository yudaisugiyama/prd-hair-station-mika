import Image from 'next/image';
import MainProps from '../types/main';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Main.module.scss'
import { useInView } from 'react-intersection-observer';

export function useWindowWidth() {
    const spWidth = 480;
    const tbWidth = 748;
    const pcWidth = 1024;
    const [windowWidth, setWidth] = useState<number>(0);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { windowWidth, spWidth, tbWidth, pcWidth };
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    useEffect(() => {
        function handleResize() {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
            }
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return windowSize;
  }

export function Main({ title, img, pathname, description1, description2, buttonText, animateClass}: MainProps) {
    const { ref, inView } = useInView({
        rootMargin: '-40px',
        triggerOnce: false,
    });
    const router = useRouter();
    const handleClick: () =>void = () => {
        router.push(`${pathname}`);
    }
    const { windowWidth, spWidth, tbWidth, pcWidth } = useWindowWidth();
    const width: number = windowWidth > pcWidth ? Math.floor(windowWidth * 0.6 * 0.6) : Math.floor(windowWidth * 0.6);

    var className;
    if (`${animateClass}` === 'animate__slideInLeft') {
        className = styles.animate__slideInLeft;
    } else {
        className= styles.animate__slideInRight;
    }

    return (
    <section className={styles.wrapper} ref={ref}>
        <div className={styles.image}>
            <Image
                src={img}
                alt={title}
                width={`${width}`}
                height={`${width}`}
                style={{display: 'block', margin: 'auto' , height: 'auto'}}
            />
        </div>
        {inView && (
            <div className={className}>
                <h1>{title}</h1>
                <div>
                    <p>{description1}</p>
                    <p>{description2}</p>
                </div>
                <button onClick={handleClick}>{buttonText}</button>
            </div>
        )}
    </section>
    );
};