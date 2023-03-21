import { useEffect, useState } from "react";

const routesMap = {
    Home: '/',
    Event: '/events',
    DonorRequest: '/donor-requests',
}

const usePageName = () => {
    const [ pageName, setPageName ] = useState("");
    const pages = {
        Home: 'Home',
        Event : 'Event',
        DonorRequest : 'DonorRequest',
    }
    const handleGetPageName = () => {
        let location = window.location.pathname;
        let currentPage = undefined;
        for (let page in routesMap) {
            if (location.includes(routesMap[page])) {
                currentPage = page;
            };
        }
        setPageName(currentPage);
    }

    useEffect(handleGetPageName);
    return {pageName, pages}
}

export default usePageName;