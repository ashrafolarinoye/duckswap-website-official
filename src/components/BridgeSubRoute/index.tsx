"use client"

import { useState, useEffect } from 'react';
import { Stargate, Squid } from '@/routes/bridge';

enum Route {
    STARGATE = 'stargate',
    SQUID = 'squid'
}


const useBridgeSubRoutes = (routes: Route) => {
    const [component, setComponent] = useState(() => Stargate);

    useEffect(() => {
        switch (routes) {
            case Route.STARGATE:
                setComponent(() => Stargate);
                break;
            case Route.SQUID:
                setComponent(() => Squid);
                break;
            default:
                setComponent(() => Stargate);
                break;
        }
    }, [routes]);

    return component;
};

export default useBridgeSubRoutes;