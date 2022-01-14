import React from "react";
import { HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from "react-vis";

interface Props {
    data: any[]
}

const Chart: React.FC<Props> = ({ data }) => {
    return (
        <XYPlot height={300} width={300}>
            <LineSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
        </XYPlot>
    );
}

export default Chart;