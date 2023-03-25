import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { Avatar, Typography } from 'antd'
import styled from 'styled-components'
const { Title } = Typography;

const StyledHeader = styled.header`
    border-bottom: 1px solid #ccc;
    .break{
        width: 2px;
        height: 30px;
        background-color: #ccc;
    }
`

export default function PageHeader() {
    return (
        <StyledHeader className='d-flex p-3 gap-4 justify-content-end align-items-center'>
            <div className='seach-icon-con d-flex gap-3 align-items-center'>
                <FiSearch fontSize={20} />
                <BiBell fontSize={20} />
            </div>
            <div className='break'>
            </div>
            <div className='d-flex align-items-center gap-3'>
                <Avatar />
                <Title className='mb-0' level={4}>Sander VW</Title>
                <MdOutlineArrowDropDown fontSize={24} />
            </div>
        </StyledHeader>
    )
}
