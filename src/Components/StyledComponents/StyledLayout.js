import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../Constants/COLOR';
const StyledLayout = styled.div`
.page-layout .ant-layout-sider{
    min-width: 270px !important;
    max-width: 270px !important;
    @media (max-width:1400px) {
        min-width: 220px !important;
        max-width: 220px !important;
    }
}
.page-layout .ant-layout-sider{
    background-color: ${PRIMARY_COLOR};
}
`
export default StyledLayout;