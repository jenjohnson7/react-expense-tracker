import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

	let maxValue = Math.max(...props.dataPoints.map(elt => elt.value));

	return (
		<div className="chart">
			{props.dataPoints.map(
				dataPoint =>
				<ChartBar
					value={dataPoint.value}
					maxValue={maxValue}
					label={dataPoint.label}
					key={dataPoint.label}/>
				)
			}
		</div>
	);
}

export default Chart;
