import styled from "styled-components";
import { PRIMARY_COLOR } from "../../Constants/COLOR";
const StyledProgressChart = styled.div`
.title{
    font-weight: 500;
}
.recharts-cartesian-axis-tick-line{
    display:none
}
.recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis
{
    transform: translate(5px,15px);
}
.recharts-cartesian-axis{
transform: translateX(22px);
}
.recharts-wrapper{
    margin-left: -68px;
}
.chart-header-container{
    margin-left:20px;
    margin-bottom:35px
}
.chart-wrapper{
    padding: 36px 77px 102px 156px !important; 
  
}
.weeklybtn{
    transform:translateX(15%) !important;
    background:#F8F8FF !important;
    color:#ccc;
}
.btn{
    border-radius:15px !important;
    border:none;
}
.monthlybtn{
    background:${PRIMARY_COLOR} !important;
    color:white;
}
.monthlybtn:hover{
    opacity:0.9;
    color:white ;
}
`;
export default StyledProgressChart;