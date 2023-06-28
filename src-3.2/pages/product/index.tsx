import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import home from '../../styles/Home.module.scss'
import main from '../../styles/Main.module.scss'

export default function Product() {
    return (
        <div className={home.container}>
          <Header pathname={"/product"}/>
          <main className={main.main}>
          </main>
          <Footer />
        </div>
    );
};