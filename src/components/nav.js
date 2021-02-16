import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    state = {
        input: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    render = () => {
        return (
            <div className="container" id="nav">

                <Link to='/about'>
                    <h1 className="nav-item" id="about">><span id="hi"></span></h1>
                </Link>

                <Link to="/work">
                    <h1 className="nav-item" id="work">><span id="im"></span></h1>
                </Link>

                <Link to="/contact">
                    <h1 className="nav-item" id="contact">><span id="eric"></span></h1>
                </Link>

                <h1 className="nav-item" id="input-carrot">>
                    <input id="input" type="text" onChange={this.handleChange}/>
                    <span id="display" contenteditable>{this.state.input}</span>
                    <span id="cursor"/>
                </h1>

                <div id="spacer"></div>

            </div>
        )
    }

}

export default Nav
