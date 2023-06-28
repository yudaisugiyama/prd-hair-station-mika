import { Header } from "../../components/Header";
import { Access } from "../../components/Access";
import { Footer } from "../../components/Footer";
import home from '../../styles/Home.module.scss'
import main from '../../styles/Main.module.scss'

export default function AccessPage() {
    return (
        <div className={home.container}>
          <Header pathname={"/access"}/>
          <main className={main.main}>
            <Access/>
          </main>
          <Footer />
        </div>
    );
};