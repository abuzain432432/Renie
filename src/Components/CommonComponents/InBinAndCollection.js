import React from 'react'
import CollectedDot from '../CommonComponents/CollectedDot';
import InBinDot from '../CommonComponents/InBinDot';
import { Typography } from 'antd'

const { Paragraph } = Typography;
export default function InBinAndCollection(props) {
    const classes = `${props.className && props.className} d-flex align-items-center gap-3`
    return (
        <div className={classes}>
            <div className='m-0 d-flex align-items-center'>
                <InBinDot />
                <Paragraph className='m-0 '>In bin</Paragraph>
            </div>
            <div className='m-0 d-flex align-items-center'>
                <CollectedDot />
                <Paragraph className='m-0'>Collected</Paragraph>
            </div>
        </div>
    )
}
