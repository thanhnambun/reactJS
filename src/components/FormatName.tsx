import React, { Component } from 'react'
type StateType = {
    firstName: string,
    lastName: string
}

export default class extends Component {
    state: StateType;
    constructor() {
        super(Component);
        this.state = {
            firstName: "Nguyễn Văn ",
            lastName: "Nam"
        }
    }
    render() {
        return (
            <>
                <h1>Thông tin cá nhân</h1>
                <ul>
                    <li>Họ và tên: {this.state.firstName + this.state.lastName}</li>
                </ul>
            </>
        )
    }
}