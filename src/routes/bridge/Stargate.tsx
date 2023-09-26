"use client"

const Bridge = () => {
    return (
        <>
            <div style={{
                width: "420px",
                height: "640px"
            }}>
                <stargate-widget partnerId="0x0021" feeCollector="0xc13b65f7c53Cd6db2EA205a4b574b4a0858720A6" tenthBps="10" theme="dark" />
            </div>
            <script
                src="https://unpkg.com/@layerzerolabs/stargate-ui@latest/element.js"
                defer
                async>
            </script>
        </>
    );
};

export default Bridge;
