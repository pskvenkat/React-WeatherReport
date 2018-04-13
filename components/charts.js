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
    <div>MinTempratue: {minAverage(props.mintemp)}</div>
    <div>MaxTempratue: {maxAverage(props.maxtemp)}</div>
    </div>    
   
    )
}