import React from "react";
import ReactGA from 'react-ga';
import { useParams } from "react-router-dom";
import { HorizontalGridLines, VerticalGridLines, XAxis, XYPlot, YAxis, VerticalBarSeries } from "react-vis";

interface Props { }

const Analytics: React.FC<Props> = () => {
    // const { } = useParams();
    // history.listen((location, action) => {
    //     ReactGA.set({ page: location.pathname });
    //     ReactGA.pageview(location.pathname);
    // });
    const data = [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
        { x: 9, y: 0 }
    ];
    return (
        <XYPlot height={300} width={300}>
            <VerticalBarSeries data={data} barWidth={5} />
            {/* <HorizontalGridLines /> */}
            <VerticalGridLines />
            <XAxis />
            <YAxis />
        </XYPlot>
    );
}

export default Analytics;