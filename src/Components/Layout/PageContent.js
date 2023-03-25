import React, { useEffect } from 'react'
import PageHeader from './PageHeader'
import Order from '../Pages/Orders/Order';
import PasticCredits from '../Pages/Plasitc Credits/PasticCredits';
import Partners from '../Pages/Partners/Partners';
import { Routes, Route } from 'react-router-dom';
import Tracking from '../Pages/Tracking/Tracking'
import Bins from '../Pages/Bins/Bins';
import Dashboard from '.././Pages/Dashboard/Dashboard';

import { BINS_ROUTE, DASHBOARD_ROUTE, ORDERS_ROUTE, PARTNERS_ROUTE, PLASTIC_CREDITS_ROUTE, TRACKING_ROUTE } from '../../Constants/ROUTES_CONST';
export default function PageContent() {

    return (
        <div className='page-content'>
            <PageHeader />
            <Routes>
                <Route path={DASHBOARD_ROUTE} element={< Dashboard />} />
                <Route path={BINS_ROUTE} element={< Bins />} />
                <Route path={TRACKING_ROUTE} element={<Tracking />} />
                <Route path={PLASTIC_CREDITS_ROUTE} element={< PasticCredits />} />
                <Route path={PARTNERS_ROUTE} element={< Partners />} />
                <Route path={ORDERS_ROUTE} element={< Order />} />
            </Routes>
        </div>
    )
}
