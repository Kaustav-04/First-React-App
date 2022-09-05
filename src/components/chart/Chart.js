import ChartBar from './ChartBar';
import './chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxVal = Math.max(...dataPointValues);
    return (
    <div className='chart'>
        {props.dataPoints.map( (dataPoint) => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxVal} label={dataPoint.label}></ChartBar>)}
    </div>
    );
    
}

export default Chart;