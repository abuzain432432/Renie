import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../Constants/COLOR';
const StyledCustomTable = styled.div`
 display: flex;
 flex-direction: column;
.custom-table-number-cell{
    background-color:${PRIMARY_COLOR} ;
    color: white;
    padding: 0px 7px;
    border-radius: 5px;
}

.ant-table-thead .ant-table-cell {
    font-weight: 400 !important;
    font-size: 13px;
    color: #777 !important;
    font-weight:300;
    background-color: transparent !important;
    text-align: center !important;
}
.ant-table-thead .ant-table-cell::before{
    display: none !important;
}
.ant-table-cell{
    padding: 10px 0px 7px 0px !important;
    text-align: center !important;
    min-width: 150px;
    white-space: nowrap;
}
.ant-table-cell:first-child{
  min-width: 75px;
}
.ant-table-row .ant-table-cell:last-child , .ant-table-thead .ant-table-cell:last-child{
    padding-right: 0 !important;
  }
  
  .table-con{
    padding-left: 78px;
    padding-left: 62px;
    flex-grow: 1;
  }
  .table-tiitle{
    font-weight: 500;
  }
`
export default StyledCustomTable;