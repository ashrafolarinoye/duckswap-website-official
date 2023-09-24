"use client"
import Countdown from '@/components/Countdown'

const Alert = () => {
    return (
        <div className="w-full flex flex-col justify-center bg-[#FDB833] py-3 px-1 items-center">
            <p className="font-semibold text-center">Blockchain, Explorer, Bridge, Duckswap launching soon...</p>
            <Countdown />
        </div>)
}

export default Alert;