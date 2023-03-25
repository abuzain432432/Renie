import React from 'react'
import { Menu } from 'antd'
import { NAVIGATION_CONST } from '../../Constants/NAVIGATIONS_CONST'
import { useNavigate } from 'react-router-dom'
import StyledPageNavigation from '../StyledComponents/StyledPageNavigation'

export default function PageNavigation() {
    const navigate = useNavigate();
    const navigationChangeHandler = ({ key }) => {
        navigate(key);
    }
    return (
        <StyledPageNavigation >
            <h1 className='d-flex justify-content-center'>Renie</h1>
            <Menu onClick={navigationChangeHandler} items={NAVIGATION_CONST} />
        </StyledPageNavigation>
    )
}
