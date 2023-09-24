export function Duckonomics() {
    const allocations = [
        "Team 10%",
        "IDO 20%",
        "Private sale  %",
        "Liquidity  10%",
        "Marketing 10%",
        "Development 10%",
        "Reserve 20%",
        "Community 10%",
        "Aidrop 7%",
        "Tax : 15% buy and sale",
        "5% to holders",
        "5% to liquidity",
        "5% to marketing and burning"
    ]

    return (
        <section id="duckonomics" className="my-[10rem] px-6 space-y-5">
            <div className="text-center">
                <h3 className=" font-extrabold text-white tracking-tight text-5xl">Ducko<span className="text-[#FDB833]">nomics</span></h3>
                <p className="text-2xl text-white mx-auto w-8/12">The DUCKCOIN  is the native token of Duckchain. It serves as a governance token with a maximum supply and represents platform governance functions. This documentation provides an overview of the Duck token and its various use cases and functionalities within the Duckcoin ecosystem.</p>
            </div>
            <div className="mx-auto w-5/6 space-y-2">
                <h3 className="text-[#FDB833] text-xl font-semibold">Token Emission
                </h3>
                <p className="text-white">The emission of DUCK tokens is directly tied to the Total Value Locked (TVL) growth within the Duckcoin platform.</p>
                <h3 className="text-[#FDB833] text-xl font-semibold">Use Case
                </h3>
                <p className="text-white">Transaction fees, governance, payment , staking etc</p>
            </div>
            <div className="mx-auto w-5/6 flex gap-x-3 justify-start sm:flex-row flex-col">
                <div>
                    <h3 className="text-[#FDB833] text-xl font-semibold">Token Details
                    </h3>
                    <p className="text-white"><span className="font-semibold text-[#FDB833]">Token Name</span>: Duckcoin</p>
                    <p className="text-white"><span className="font-semibold text-[#FDB833]">Token Supply</span>: Fixed supply</p>
                    <p className="text-white"><span className="font-semibold text-[#FDB833]">Token Type</span>: Utility and Governance Token</p>
                </div>
                <div>
                    <h3 className="text-[#FDB833] text-xl font-semibold">Use Case
                    </h3>
                    <p className="text-white">Transaction fees, governance, payment , staking etc</p>
                </div>
            </div>
            <div className="mx-auto w-5/6 space-y-2">
                <h3 className="text-[#FDB833] text-xl font-semibold">Allocations
                </h3>
                <div className="text-white flex flex-nowrap sm:flex-wrap flex-col h-[10vh]">
                    {allocations.map((text, index) => {
                        return (
                            <p key={index}>
                                {text}
                            </p>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}