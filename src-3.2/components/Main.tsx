import 'animate.css';
import MainProps from '../types/main';
import styles from '../styles/Main.module.scss'
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

export function Main({ title, img, url, description1, description2, buttonText, animateClass}: MainProps) {
    const { ref, inView } = useInView({
        rootMargin: '-80px',
        triggerOnce: false,
    });
    const router = useRouter();
    const handleClick = () => {
        router.push(`${url}`);
    }

    return (
    <section className={styles.wrapper} ref={ref}>
        {inView && (
            <div className={`animate__animated ${animateClass}`}>
                <img  src={img} alt={title} />
                <h1>{title}</h1>
                <p>{description1}</p>
                <p>{description2}</p>
                <button onClick={handleClick}>{buttonText}</button>
            </div>
        )}
    </section>
    );
};