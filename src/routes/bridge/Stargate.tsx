"use client"
import Script from "next/script";

const Bridge = () => {
    return (
        <>
            <div className="container mx-auto h-[640px] w-[320px]">
                <stargate-widget partnerId="0x0021" feeCollector="0xc13b65f7c53Cd6db2EA205a4b574b4a0858720A6" tenthBps="10" theme="dark" />
            </div>
            <Script src='https://unpkg.com/@layerzerolabs/stargate-ui@latest/element.js' strategy='afterInteractive' />
        </>
    );
};

export default Bridge;
