import React, { PureComponent } from 'react';
export default class CustomBar extends PureComponent {
    render() {
        const { x, y, fill, height, chartHeight } = this.props;
        const emptyBarHeight = chartHeight - height;
        console.log(emptyBarHeight)
        const borderRadius = 5;

        return (
            <g  >
                <rect rx={borderRadius} ry={borderRadius} x={x} width={7} height={emptyBarHeight} fill={"#E5E5EF"} />
                <rect rx={borderRadius} ry={borderRadius} x={x} y={y} width={7} height={height} fill={fill} />
            </g>

        );
    }
}