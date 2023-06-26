import { Header } from "../components/Header";
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
            </main>

        <footer className={styles.footer}>
        </footer>
        </div>
    );
}