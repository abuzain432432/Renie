import { DASHBOARD_ROUTE, BINS_ROUTE, TRACKING_ROUTE, PLASTIC_CREDITS_ROUTE, PARTNERS_ROUTE, ORDERS_ROUTE } from "./ROUTES_CONST"
import { RxDashboard } from 'react-icons/rx';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GoCreditCard } from 'react-icons/go';
import { SlBasket } from 'react-icons/sl';
import { BsWindowSidebar } from 'react-icons/bs';
export const NAVIGATION_CONST = [
    {
        label: 'Dashboard',
        key: DASHBOARD_ROUTE,
        icon: <RxDashboard />
    },
    {
        label: 'Bins',
        key: BINS_ROUTE,
        icon: < RiDeleteBin5Line />
    },
    {
        label: 'Tracking',
        key: TRACKING_ROUTE,
        icon: <HiOutlineLocationMarker />
    },
    {
        label: 'Plastic Credits',
        key: PLASTIC_CREDITS_ROUTE,
        icon: <GoCreditCard />
    },
    {
        label: 'Partners',
        key: PARTNERS_ROUTE,
        icon: <BsWindowSidebar />
    },
    {
        label: 'Orders',
        key: ORDERS_ROUTE,
        icon: <SlBasket />
    },
]