import styled from 'styled-components'
const StyledStatistics = styled.div`
.title{
    font-weight: 500;
}
.statistics-con{
    background-color: white;
    padding: 50px 0px 44px;
    position:relative;
}
.horizontal{
    height:.5px;
    background:rgba(0, 0, 0, 0.15);;
    width:90%;
    /* margin-top:-2px; */
}
.vertical{
    height:90%;
    background:rgba(0, 0, 0, 0.15);;
    width:.5px;
}

.center{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
}
.short{
    font-size:10px;
}
.long{
    font-size:12px;
    font-weight:bolder;
}
.date-con{
    transform: translate(-40px,-9px);
}
.time-con{
    transform:translate(28px,-10px);
}
.area-con{
    transform:  translate(-40px, 13px);
}
.brand-con{
    transform: translate(30px, 17px);
}
.bag-weight-con{
    transform:translate(30px, 13px);
}
`
export default StyledStatistics