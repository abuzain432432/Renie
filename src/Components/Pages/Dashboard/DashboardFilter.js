import CustomSelect from "../../AntdCustomComponents/CustomSelect";
import React from 'react'
import Filter from '../../../assets/images/Filter.svg'

import DashboardFilterItem from "./DashboardFilterItem";
import DUMAY_FILTER_CONST, { DASHBOARD_FILTER_CONST } from "../../../Constants/DASHBOARD_FILTER_ITEM_CONST";
export default function DashboardFilter() {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center gap-3">
                <img src={Filter} alt='filter' />
                <CustomSelect placeholder='Country' options={DUMAY_FILTER_CONST} />
                <CustomSelect placeholder='City' options={DUMAY_FILTER_CONST} />
                <CustomSelect placeholder='Bin area' options={DUMAY_FILTER_CONST} />
                <CustomSelect placeholder='Brand' options={DUMAY_FILTER_CONST} />
                <CustomSelect placeholder='Waste management company' options={DUMAY_FILTER_CONST} />
                <CustomSelect placeholder='Material' options={DUMAY_FILTER_CONST} />
            </div>
            <div className="filter-item d-flex justify-content-between align-items-center gap-3 mt-1">
                {
                    DASHBOARD_FILTER_CONST.map((item, i) => <DashboardFilterItem key={i} item={item} />)
                }

            </div>
        </div>
    )
}
