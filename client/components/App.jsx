import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
        <div>
            <form>
                <label>
                    First Name
                    <input onChange={} type="text" name="firstName"/>
                </label>
                <label>
                    Last Name
                    <input onChange={} type="text" name="firstName"/>
                </label>
            </form>
        </div>
        )
    }
}

export default App;