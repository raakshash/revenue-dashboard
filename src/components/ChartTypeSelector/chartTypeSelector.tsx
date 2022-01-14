import React from "react";
import { ChartTypeSelctors, Option } from "./constants";

interface Props { }

const ChartTypeSelector: React.FC<Props> = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Small button
            </button>
            <div className="dropdown-menu">
                {ChartTypeSelctors.map((selector: Option) =>
                    <a className="dropdown-item" key={selector.value} >{selector.label}</a>
                )}
            </div>
        </div>
    );
}

export default ChartTypeSelector;