import StyledChartToolTip from "../../StyledComponents/StyledChartTooltip";
const ChartTooltip = ({ active, payload, label }) => {
    if (active && payload) {
        return (
            <StyledChartToolTip >
                <p className="label m-0 fw-bold">{`${label}`}</p>
                <p className="inbin m-0">{`In Bin: ${payload[0].value}`}</p>
                <p className="collected m-0">{`Collected: ${payload[1].value}`}</p>
            </StyledChartToolTip>
        );
    }
    return null;
};
export default ChartTooltip;
