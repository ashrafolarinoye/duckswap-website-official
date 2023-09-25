"use client"
import Script from "next/script";

const Bridge = () => {
    return (
        <div className="container mx-auto w-[95%] md:w-2/6">
            <stargate-widget partnerId="0x0021" feeCollector="0xc13b65f7c53Cd6db2EA205a4b574b4a0858720A6" tenthBps="10" theme="dark" />

            <Script src='https://unpkg.com/@layerzerolabs/stargate-ui@latest/element.js' strategy='afterInteractive' />
        </div>
    );
};

export default Bridge;
