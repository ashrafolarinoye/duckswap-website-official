export default function Duckmap() {
    return (
        <section id="duckmap" className="my-[10rem] py-5 px-6">
            <div className="text-center">
                <h3 className=" font-extrabold text-white tracking-tight text-5xl">Duck <span className="text-[#FDB833]">Map</span></h3>
            </div>
            <div className="flex flex-col justify-center items-center text-center text-white space-y-3">
                <div>
                    <h5 className="text-white text-xl font-bold"><span className="font-semibold text-[#FDB833]">Phase</span> 1</h5>
                    <p>Marketing, Gempade, Gamefi, Poolz and Gate exchange IDO,
                        Duckcoin listing, and launching</p>
                    <p><span className="text-[#FDB833]">2 weeks after IDO</span>: Blockchain, Duckswap and Bridge Launching</p>
                </div>
                <div>
                    <h5 className="text-white text-xl font-bold"><span className="font-semibold text-[#FDB833]">Phase</span> 2</h5>
                    <p>Hackathon, Dapps and projects onboarding.</p>
                </div>
                <div>
                    <p>More Coming Soon...</p>
                </div>
            </div>
        </section>
    )
}