import NoHeaderLayout from "../layouts/NoHeaderLayout/index.js";
import Event from "../views/Event/index.js";
import DonorRequest from "../views/DonorRequest/index.js";
import Home from "../views/Home/index.js";
import Logout from "../views/Logout/index.js";

const privateRoutes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'events/',
        component: Event 
    },
    {
        path: 'donor-requests/',
        component: DonorRequest
    },
    {
        path: 'logout/',
        component: Logout,
        layout: NoHeaderLayout
    }, 
];

const publicRoutes = [
    {

    },
]

export { privateRoutes, publicRoutes };