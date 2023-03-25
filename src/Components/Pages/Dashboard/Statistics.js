import React from 'react'
import date from '../../../assets/images/date.svg'
import area from '../../../assets/images/area.svg'
import time from '../../../assets/images/time.svg'
import weight from '../../../assets/images/weight.svg'
import brand from '../../../assets/images/brand.svg'
import Card from '../../CommonComponents/Card'
import { Col, Row, Typography } from 'antd'
import DashboardSecondaryHeading from '../../CommonComponents/DashboardSecondaryHeading'
import StyledStatistics from '../../StyledComponents/StyledStatistics'

const { Paragraph } = Typography;

export default function Statistics(props) {
    return (
        <StyledStatistics>
            <DashboardSecondaryHeading className='mb-1'>{props.activity ? 'LAST ACTIVITY' : 'LAST COLLECTION'}</DashboardSecondaryHeading>
            <Card className='statistics-con center gap-3 '>
                <div className='horizontal position-absolute top-50 start-50 translate-middle '></div>
                <div className='vertical position-absolute bottom-0 start-50 translate-middle-x '></div>
                <Row >
                    <Col className='data-con'>
                        <Col className='date-con center'>
                            <img alt='date' src={date} />
                            < Paragraph className='m-0 short'> DATE </Paragraph >
                            < Paragraph className='m-0 long'>{props.data.date}</ Paragraph>

                        </Col>
                    </Col>
                    <Col>
                        <div className='time-con center'>
                            <img alt='time' src={time} />
                            < Paragraph className='m-0 short'> TIME </ Paragraph>
                            < Paragraph className='m-0 long'>{props.data.time}</ Paragraph>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <div className='center area-con'>
                            <img alt='area' src={area} />
                            < Paragraph className='m-0 short'> AREA </ Paragraph>
                            < Paragraph className='m-0 long'>{props.data.area}</ Paragraph>
                        </div>
                    </Col>
                    {
                        props.activity ?
                            <Col>
                                <div className='brand-con center'>
                                    <img alt='brand' src={brand} />
                                    < Paragraph className='m-0 short'> BRAND </ Paragraph>
                                    < Paragraph className='m-0 long'>{'Mai Dubai'}</ Paragraph>
                                </div>
                            </Col>
                            :
                            <Col>
                                <div className='bag-weight-con center'>
                                    <img alt='bag weight' src={weight} />
                                    < Paragraph className='m-0 short'> BAG WIEGHT </ Paragraph>
                                    < Paragraph className='m-0 long'>{props.data.brand}</ Paragraph>
                                </div>
                            </Col>
                    }
                </Row>
            </Card>
        </StyledStatistics>
    )
}
