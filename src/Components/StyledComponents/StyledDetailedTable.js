import styled from "styled-components";
import { Table } from "antd";
const StyledDetailedTable = styled(Table)`
.ant-table-thead .ant-table-cell{
    background-color: transparent !important;
}
.ant-table-cell:before{
    display: none;
}
.ant-table-cell{
    padding: 0px !important;
    text-align: center !important;
    min-width: 120px;
    white-space: nowrap;
}
.ant-table td, .ant-table th {
  border: none !important;
}
.ant-table-tbody tr:first-child .ant-table-cell{
    padding-top: 7px !important;
}
.ant-table-thead tr:first-child .ant-table-cell{
    padding-bottom: 10px !important;
    color: rgb(119, 119, 119) ;
    font-weight: 400;
}
.ant-table th{
    border-bottom: .5px solid #eee !important;
}
`
export default StyledDetailedTable;