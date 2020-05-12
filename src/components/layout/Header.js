import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header style={HeaderStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link>  |  <Link style={linkStyle} to="/about">About</Link> 
        </header>
    )
}

const HeaderStyle={
    backgroundColor:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
const linkStyle = { 
    color: '#fff',
    textDecoration: 'none'
}
