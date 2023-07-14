
import './Chart.css';
import ChartBar from '../ChartBar/ChartBar';
export const Chart = (props) => {
    let DataPointValues = props.chartData.map((expens) => expens.value);
    let maxValue = Math.max(...DataPointValues)

    return (
        <div className='chart'>
            {
                props.chartData.map((chartPoint) => {
                    return <ChartBar
                        key={chartPoint.label}
                        maxValue={maxValue}
                        value={chartPoint.value}
                        label={chartPoint.label}


                    />
                })
            }
        </div>
    );

}