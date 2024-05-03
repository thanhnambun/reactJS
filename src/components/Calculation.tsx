import React, { Component } from 'react'

export default class Calculation extends Component {
    number: number = 10;
    render() {
        return (
            <>
                <h1
                >Danh sách kết quả </h1>
                <ul>
                    <li>
                        {this.number} + {this.number} = {this.number + this.number}
                    </li>
                    <li>
                        {this.number} - {this.number} = {this.number - this.number}
                    </li>
                    <li>
                        {this.number} * {this.number} = {this.number * this.number}
                    </li>
                    <li>
                        {this.number} / {this.number} = {this.number / this.number}
                    </li>
                </ul>
            </>
        )
    }
}
