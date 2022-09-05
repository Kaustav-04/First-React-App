import './chartBar.css'
import React from 'react';

const chartBar = (props) => {
    let fillValue = '0%'
    if(props.maxValue >0){
        fillValue = Math.round((props.value/props.maxValue) *100) +'%';
    }
    
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: fillValue}}>
                    
                </div>
                <div className='chart-bar__label'>{props.label}</div>
            </div>
        </div>
    )

}

export default chartBar;