import React, { Component } from 'react'
import './colorBox.css'


export default class ColorBox extends Component {
    render() {

        return (
            <div className='listColor'>
                <div className="red">Box</div>
                <div className="blue">Box</div>
                <div className="green">Box</div>
            </div>
        );
    }
}
