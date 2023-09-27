import Image from 'next/image';
import { useWindowWidth } from "./Main";
import { useRouter } from 'next/router'; 
import ProductImageProps from '../types/product';
import styles from '../styles/Product.module.scss'

export function ProductImage({ url, src }: ProductImageProps) {
    const router = useRouter();
    const handleClick = () => {
      router.push(url);
    };

    const { windowWidth, spWidth, tbWidth, pcWidth } = useWindowWidth();
    const width: number = windowWidth > pcWidth ? Math.floor(windowWidth * 0.6 * 0.6) : Math.floor(windowWidth * 0.6);

    return (
        <>
            <Image
            src={src}
            alt="product image"
            width={width}
            height={width}
            style={
              windowWidth < tbWidth
                ? { width: "100%", height: "auto" }
                : { display: 'block', margin: 'auto', height: 'auto' }
            }
            onClick={handleClick}
            />
        </>
    )
}

export function Product() {
    const urlFukugenPro: string = "https://my.ebook5.net/LOUVREDO/fukugen_pro/";
    const urlFukugenStyler: string = "https://my.ebook5.net/LOUVREDO/FUKUGEN_Styler/";
    const urlFukugenMini: string = "https://my.ebook5.net/LOUVREDO/fukugen_mini/";
    const urlPaddleBrush: string = "https://my.ebook5.net/LOUVREDO/PaddleBrush/";
    return (
        <div className="page__template">
            <h1>取扱商品</h1>
            <br />
            <ProductImage url={urlFukugenStyler} src="/assets/LOUVREDO/001.jpg" />
            <ProductImage url={urlFukugenPro} src="/assets/LOUVREDO/002.jpg" />
            <ProductImage url={urlPaddleBrush} src="/assets/LOUVREDO/003.jpg" />
            <ProductImage url={urlFukugenPro} src="/assets/LOUVREDO/004.jpg" />
            <ProductImage url={urlFukugenMini} src="/assets/LOUVREDO/005.jpg" />
            <ProductImage url={urlFukugenStyler} src="/assets/LOUVREDO/006.jpg" />
            <ProductImage url={urlFukugenPro} src="/assets/LOUVREDO/007.jpg" />
            <ProductImage url={urlFukugenPro} src="/assets/LOUVREDO/008.jpg" />
            <ProductImage url={urlPaddleBrush} src="/assets/LOUVREDO/009.jpg" />
            <ProductImage url={urlFukugenPro} src="/assets/LOUVREDO/010.jpg" />
            <ProductImage url={urlFukugenMini} src="/assets/LOUVREDO/011.jpg" />
        </div>
    );
};
