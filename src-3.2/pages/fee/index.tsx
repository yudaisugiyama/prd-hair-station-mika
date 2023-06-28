import { Header } from "../../components/Header";
import { Fee } from "../../components/Fee";
import { Footer } from "../../components/Footer";
import home from '../../styles/Home.module.scss'
import main from '../../styles/Main.module.scss'

export default function FeePage() {
    return (
        <div className={home.container}>
          <Header pathname={"/fee"}/>
          <main className={main.main}>
            <Fee/>
          </main>
          <Footer />
        </div>
    );
};