import React from 'react'

export default function Header() {
    return (
        <header style={HeaderStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const HeaderStyle={
    backgroundColor:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
