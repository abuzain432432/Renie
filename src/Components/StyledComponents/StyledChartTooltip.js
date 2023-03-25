import styled from 'styled-components'
import { ACCENT_COLOR, PRIMARY_COLOR } from '../../Constants/COLOR';
const StyledChartToolTip = styled.div`
    background-color:white;
    padding: 10px 20px;
    .inbin{
        color: ${PRIMARY_COLOR};
    }
    .collected{
        color:${ACCENT_COLOR};
    }
`
export default StyledChartToolTip;