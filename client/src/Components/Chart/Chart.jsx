import React, { Component } from 'react'
import { AreaChart, Area, linearGradient, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.data);
        if (this.props.currentPage !== "Chart View") {
            return null;
        };

        return (
            <div className="chart">
            <AreaChart width={1200} height={810} data={this.props.data}
                margin={{ top: 100, right: 0, left: 15, bottom: 0}}
            >
                <defs>
                    <linearGradient id="maxTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="##010008" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="##010008" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="minTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="##3B3B3B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="##3B3B3B" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name">
                    <Label value="Cities" offset={0} position="bottom"/>
                </XAxis>
                <YAxis type="number" domain={[-6, 30]}  >
                    <Label value="Temp. (C)" position="left" />
                </YAxis>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="max_temp" stroke="#010008" fillOpacity={1} fill="url(#maxTemp)" />
                <Area type="monotone" dataKey="min_temp" stroke="##3B3B3B" fillOpacity={1} fill="url(#minTemp)" />
            </AreaChart>
            </div>
          );
    }
}
