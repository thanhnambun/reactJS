import React from 'react'

export default function colorBox1() {
    return (
        <div style={{
            marginTop: "100px",
            display: "flex",
            gap: "20px"
        }}>
            <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}></div>
            <div style={{ width: "200px", height: "200px", backgroundColor: "blue" }}></div>
            <div style={{ width: "200px", height: "200px", backgroundColor: "green" }}></div>
        </div>
    )
}
