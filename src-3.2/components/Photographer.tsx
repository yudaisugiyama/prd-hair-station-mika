import Image from 'next/image';

export function Photographer() {
    return (
        <div className='photographer'>
            <a href="https://www.instagram.com/_mchn.tx/">
                <Image
                    src="/assets/img/instagram.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    style={{ margin: "5px auto 5px auto"}}/>
            </a>
            <a href="https://www.instagram.com/_mchn.tx/">
                <p>Photos by @_mchn.tx</p>
            </a>
        </div>
    );
};
