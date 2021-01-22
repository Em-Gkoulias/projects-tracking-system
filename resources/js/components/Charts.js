import React from "react";
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import Dropdowns from './Dropdowns';

function Charts() {
    return (
        <div className="Charts">
            <DoughnutChart />
            <BarChart />
        </div>
    );
}

export default Charts;
