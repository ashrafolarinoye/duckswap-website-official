import { useState, useEffect } from "react";
import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
} from "date-fns";

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState<any>({});

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const targetDate = new Date("2023-10-16");
            const days = differenceInDays(targetDate, now);
            const hours = differenceInHours(targetDate, now) % 24;
            const minutes = differenceInMinutes(targetDate, now) % 60;
            const seconds = differenceInSeconds(targetDate, now) % 60;
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-5 px-3">
            <div className="flex justify-center gap-x-2">
                <div className="text-center">
                    <div className="text-base">{timeLeft.days || "0"} Days</div>
                </div>
                <div className="text-center">
                    <div className="text-base">{timeLeft.hours || "0"} Hours</div>
                </div>
                <div className="text-center">
                    <div className="text-base">{timeLeft.minutes || "0"} Minutes</div>
                </div>
                <div className="text-center">
                    <div className="text-base">{timeLeft.seconds || "0"} Seconds</div>
                </div>
                <p>📢</p>
            </div>
        </div>)
}