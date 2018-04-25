import React, { Component } from 'react';
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

function minAverage (data) {
    return _.round(_.sum(data)/data.length);
}
function maxAverage (data) {
    return _.round(_.sum(data)/data.length);
}
export default(props) => {
    return (
    <div>
        <Sparklines data={props.data}>
            <SparklinesLine color={props.color} />
        </Sparklines>
        <div className="min_max_temp"> 
            <div className="min_temp">MinTemp :{minAverage(props.mintemp)}</div>
            <div className="max_temp"> MaxTemp: {maxAverage(props.maxtemp)}</div>
        </div>
    </div>    
   
    )
}