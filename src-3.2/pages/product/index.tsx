import { Header } from "../../components/Header";
import { Product } from "../../components/Product";
import { Footer } from "../../components/Footer";
import home from '../../styles/Home.module.scss'
import main from '../../styles/Main.module.scss'

export default function ProductPage() {
    return (
        <div className={home.container}>
          <Header pathname={"/product"}/>
          <main className={main.main}>
            <Product />
          </main>
          <Footer />
        </div>
    );
};