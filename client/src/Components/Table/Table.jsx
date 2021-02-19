import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

let timeSensor = (time) => {  
    // make a function called time sensor
    // make a copy of the string =timeStr = "2021-02-19T13:31:33.182Z"
    let timeStr = time.slice();
    // split the string at T = DateTimeArr = []"2021-02-19", "13:31:33.182Z"]
    let dateTimeArr = timeStr.split("T");
    // to the second half split the string at . = TimeArr = ["13:31:33", "182Z"]
    let timeArr = dateTimeArr[1].split(".");
    // pop the TimeArr = ["13:31:33"]
    timeArr.pop()
    // split the first element of the TimeArr at : = hrArr = ["13", "31", "33"]
    let hrArr = timeArr[0].split(":");
    // to the first element - subtract 8 = hr = 5
    let hr = Number(hrArr[0]) - 8; 
    // hrArr[0] = string(hr);
    hrArr.shift();
    // if the remainer is more than 12 then return hrArr.join(":") + " PM " + DateTimeArr[0];
    if (hr > 12) {
        return (hr - 12) + ":" + hrArr.join(":") + " PM " + dateTimeArr[0];
    } else {
    // else push "AM" return hrArr.join(":") + " AM " + DateTimeArr[0];
        return hr + ":" + hrArr.join(":") + " AM " + dateTimeArr[0];
    }
};
    
let valueFinder = (obj, arr) => {
    if (arr.length === 1) {
        return obj[arr[0]];
    } else {
        return obj[arr[0]][arr[1]];
    }
} 


class TableView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
        

    render() {
        if (this.props.currentPage !== "Table View") {
            return null;
        };
        return (
            <Paper >
                <Table >
                    <TableHead>
                        <TableRow>
                            {this.props.header.map((x, i) => (
                                <TableCell key={i}>
                                    {x}
                                </TableCell>
                            ))}
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((x, idx) => {
                            let currentlyEditing = this.props.editIdx === idx;
                            return (
                                <TableRow key={x._id}>
                                    {[['name'], ['weather', 'main'], ['main', 'temp'], 
                                        ['main', 'feels_like'], ['main', 'temp_max'], 
                                        ['main', 'temp_min'], ['main', 'humidity'], ['wind', 'speed']].map((y, index) => {
                                            return (
                                                <TableCell key = {index}>
                                                    {currentlyEditing ? <TextField onChange={(e) => this.props.handleChange(e, y, idx)} value={valueFinder(x, y)}/> : valueFinder(x, y)}
                                                </TableCell>
                                            );
                                        })
                                    }
                                    <TableCell>
                                        {timeSensor(x.lastUpdated)}
                                    </TableCell>
                                    <TableCell>
                                        { currentlyEditing ? <i className="fas fa-check-square" onClick={() => this.props.stopEditing(x._id)}></i> : <i className="fas fa-edit" onClick={() => this.props.startEditing(idx)}></i>}
                                    </TableCell>
                                    <TableCell>
                                        <i className="far fa-trash-alt" onClick={() => this.props.handleRemove(x._id)}></i>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default TableView;