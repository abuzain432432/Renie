import React from 'react'
import StyledLayout from '.././StyledComponents/StyledLayout';
import PageNavigation from './PageNavigation';
import PageContent from './PageContent';
import { Layout as antLayout } from 'antd';
const { Content, Sider } = antLayout;

export default function Layout() {
    return (
        <StyledLayout>
            <antLayout className={'d-flex page-layout'} >
                <Sider>
                    <PageNavigation />
                </Sider>
                <Content>
                    <PageContent />
                </Content>
            </antLayout>
        </StyledLayout>
    )
}
