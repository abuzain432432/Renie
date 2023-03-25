import { Table } from "antd";
import styled from "styled-components";
const StyledDetailedTracking = styled(Table)`
.ant-table-cell{
    padding: 10px 0px 7px 0px !important;
    text-align: center !important;
    min-width: 120px;
    white-space: nowrap;
}
.ant-table-cell:first-child{
    min-width: 50px;
}
.ant-table td, .ant-table th {
  border: none !important;
}
.ant-table-cell:before{
    display: none;
}
.ant-table-thead tr:first-child .ant-table-cell{
    padding-bottom: 10px !important;
    color: rgb(119, 119, 119) ;
    font-weight: 400;
}
.ant-table-thead .ant-table-cell{
    background-color: transparent !important;
}
.ant-table th{
    border-bottom: .5px solid #eee !important;
}

`
export default StyledDetailedTracking;