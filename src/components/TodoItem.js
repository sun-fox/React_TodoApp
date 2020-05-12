import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle=()=>{
        return {
            backgroundColor:'#f4f4f4',
            padding:'10px',
            textAlign:'left',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }

    render() {
        // console.log(this.props.todo.id);
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{'  '}
                    {title} 
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle={
    backgroundColor:'#f00',
    borderRadius:'50%',
    color:'#fff',
    border:'none',
    padding:'5px 8px',
    cursor:'pointer',
    float:'right'
}

// Proptypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
} 

export default TodoItem

