import React, { Component } from 'react';
import './data.styles.scss';
import '../classes/class.component';

class Days extends Component {
    render() {
        return 
            this.state.time.map((time, index) => {
                const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday } = time
                return (
                    <tr tr={Monday} >
                        <td>{Monday}</td>
                        <td>{Tuesday}</td>
                        <td>{Wednesday}</td>
                        <td>{Thursday}</td>
                        <td>{Friday}</td>
                        <td>{Saturday}</td>
                    </tr>
                )
            })
    }

    render() {
        return(
            <div>
                <h1 id="title">Class Timetable</h1>
            </div>
        )
    }
}

export default Days;