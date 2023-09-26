const InfoSec = () => {
  return (
    <section className="infosec flex items-center justify-center py-6 px-6" id="about">
      {/* Left Side */}
      <div className=" mt-8 lg:mt-16 flex flex-col justify-center items-center text-center">
        <h1 className="scroll-m-20 text-4xl text-center font-extrabold text-white tracking-tight lg:text-3xl">
          SAY HELLO TO{" "}
          <span className="span-text">
            DUCKCOIN -  {" "}
          </span>{" "}
          THE PREMIER <br /> COIN FOR ALL YOUR PAYMENT <br /> NEEDS!
        </h1>
        <p className="infosec-tagline leading-7 [&:not(:first-child)]:mt-6">
          Join the Duckies worldwide in embracing the people's cryptocurrency, Duckcoin! As a decentralized,
          open-source peer-to-peer digital currency, Duckcoin embodies the friendly, curious, and intelligent
          nature of Duckies, creating a vibrant DeFi community.
        </p>
      </div>
      {/* Right Side */}
    </section>
  );
};

export default InfoSec;
