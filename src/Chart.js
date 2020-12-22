import React, { PureComponent } from 'react';
import {
  Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush
} from 'recharts';

export default function Chart (props){

    return (
      <LineChart
        width={1200}
        height={400}
        data={props.data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateTime" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Brush />
        <Line type="monotone" dataKey="category1" dot={{ stroke: 'green', strokeWidth: 2 }} stackId="a" />
        <Line type="monotone" dataKey="category2" dot={{ stroke: 'red', strokeWidth: 2 }} stackId="a"  />
        <Line type="monotone" dataKey="category3" dot={{ stroke: 'blue', strokeWidth: 2 }} stackId="a" fill="#3939FF" />
      </LineChart>
    );  
}
