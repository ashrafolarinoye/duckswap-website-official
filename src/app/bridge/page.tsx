"use client"

import { useEffect, useMemo } from "react";
import ToggleButton from "@/components/Button/ToggleButton";
import { useRouter, useSearchParams } from 'next/navigation';
import useBridgeSubRoutes from "@/components/BridgeSubRoute";

enum Route {
    STARGATE = 'stargate',
    SQUID = 'squid'
}

const Bridge = () => {
    const { push } = useRouter();
    const query = useSearchParams();
    const tab = query.get('tab')

    const RenderedChild = useBridgeSubRoutes(tab as Route);
    const route = useMemo(() => (tab as Route) || Route.STARGATE, [tab]);

    useEffect(() => {
        if (!tab) {
            push(`/bridge?tab=${Route.STARGATE}`);
        }
    }, [push, tab])

    return (
        <>
            <head>
                <title>Bridge | Duckcoin - A Web3 Blockchain Ecosystem for Real-Life Solutions</title>
            </head>
            <div className="flex flex-col justify-start items-center space-y-3 h-screen">
                <div className="flex justify-center items-center py-16 w-full">
                    <div className="flex justify-center items-center rounded-[30px] bg-[#fff]/[.11] py-1 px-1">
                        <ToggleButton isActive={route === Route.STARGATE} onClick={() => push(`/bridge?tab=${Route.STARGATE}`)}>
                            <span>Stargate</span>
                        </ToggleButton>
                        <ToggleButton isActive={route === Route.SQUID} onClick={() => push(`/bridge?tab=${Route.SQUID}`)}>
                            <span>Squid</span>
                        </ToggleButton>
                    </div>
                </div>
                <div className="flex justify-center items-center my-16 px-2 py-10 w-full h-fit">
                    <RenderedChild />
                </div>
            </div>
        </>
    )
}

export default Bridge;