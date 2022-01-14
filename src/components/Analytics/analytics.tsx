import React from "react";
import { useParams } from "react-router-dom";

interface Props { }

const Analytics: React.FC<Props> = () => {
    const { } = useParams();
    return (
        <p>Analytics</p>
    );
}

export default Analytics;