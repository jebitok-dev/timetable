import React, { Component } from 'react';
import './class.styles.scss';

class Class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: [
                { id: 1, time: '8', subject: 'Math' , teacher: 'Mrs Grace' },
                { id: 2, time: '8.30', subject: 'Math' , teacher: 'Mrs Grace' },
                { id: 3, time: '9', subject: 'P.E' , teacher: 'Mrs Grace' },
                { id: 4, time: '9.30', subject: 'Math' , teacher: 'Mrs Grace' },
                { id: 5, time: '10', subject: 'Break' , teacher: 'Mrs Grace' },
                { id: 6, time: '10.30', subject: 'English' , teacher: 'Mrs Grace' },
                { id: 7, time: '11', subject: 'Kiswahili' , teacher: 'Mrs Grace' },
                { id: 8, time: '11.30', subject: 'Break' , teacher: 'Mrs Grace' },
                { id: 9, time: '12', subject: 'CRE' , teacher: 'Mrs Grace' },
                { id: 10, time: '12.30', subject: 'Kiswahili' , teacher: 'Mrs Grace' }
            ],
            // teachers: {}
        }
    }

    renderDays() {
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
        return (
            <div>
                <h1 id="title">Class</h1>
                <table id='students'>
                    <tbody>
                        {this.renderDays()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Class;