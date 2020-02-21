import React from 'react';
import ListEntry from './ListEntry.jsx';
import { render } from 'react-dom';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            todos: []
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    submitHandler(e) {
        e.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.todo],
            todo: ''
        })
        document.getElementById('form').reset()
    }
    
    render() {
        return (
            <div>
                <form id="form" onSubmit={this.submitHandler} >
                    <label>
                        <input onChange={this.onChangeHandler} required type="text" name="todo" />
                    </label>
                    <label>
                        <input type="submit"/>
                    </label>                
                </form>
                <ul>
                    {this.state.todos.map((item, index) => (
                        <ListEntry item={item} key={index} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;