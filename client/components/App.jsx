import React from 'react';
import List from './List.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        // this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // onSubmitHandler(e) {
    //     e.preventDefault();
    //     this.setState({
    //         firstName: '',
    //         lastName: ''
    //     })
    //     document.getElementById('nameForm')
    // }

    render() {
        return (
        <div>
            {this.state.firstName === this.props.firstName && this.state.lastName === this.props.lastName 
            ?
            <List /> 
            : 
            <form id="nameForm" >
            <label>
                First Name
                <input onChange={this.onChangeHandler} type="text" name="firstName"/>
            </label>
            <label>
                Last Name
                <input onChange={this.onChangeHandler} type="text" name="lastName"/>
            </label>
            <label>
                <input type="submit"/>
            </label>
        </form>
}

        </div>
        )
    }
}

export default App;