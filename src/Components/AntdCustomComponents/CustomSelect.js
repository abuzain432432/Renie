import { Select } from 'antd'
import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import StyledCustomSelect from '../StyledComponents/StyledCustomSelect'

export default function CustomSelect(props) {
    return (
        <StyledCustomSelect >
            <Select suffixIcon={<IoMdArrowDropdown color='#1a1a1a' fontSize={24} />} placeholder={props.placeholder} onChange={props.onSelect}>
                {props.options.map(option => <Select.Option key={option}>
                    {option}
                </Select.Option>)}
            </Select>
        </StyledCustomSelect>
    )
}
