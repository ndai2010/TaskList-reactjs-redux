import React, { Component } from 'react'
import './CardTask.scss'
export default class CardTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.data.name,
            description: this.props.data.description,
            data: this.props.data,
            isDisable: true,
        }
    }
    handleDeleteTask = (task) => {
        this.props.delete(task)
    }

    handleEditTask = () => {
        this.setState({
            isDisable: !this.state.isDisable
        })
    }

    handleOnChange = (e, id) => {
        let coppyState = { ...this.state };
        coppyState[id] = e.target.value;
        this.setState({
            ...coppyState
        })
    }
    handlePressKey = (e, data) => {
        let dataUpdate = {
            id: data.id,
            name: this.state.name,
            description: this.state.description,
            status: data.status,
        }
        if (e.which === 13) {
            this.handleEditTask()
            this.props.updateTask(dataUpdate)
        }
    }
    handleCompleteTask = (data) => {
        let dataUpdate = {
            id: data.id,
            name: this.state.name,
            description: this.state.description,
            status: 'completed',
        }
        this.props.updateTask(dataUpdate)
    }
    render() {
        let { data, isDisable } = this.state
        return (
            <div className='card-task'>
                <div className='header-task container'>
                    <div className='form-group'>
                        <input
                            className='name-task form-control'
                            value={this.props.data.name}
                            disabled={isDisable}
                            onChange={(event) => { this.handleOnChange(event, 'name') }}
                        ></input>
                    </div>
                </div>
                <div className='description mt-2 container'>

                    <form>
                        <div className='form-group'>
                            <textarea
                                className='form-control'
                                disabled={isDisable}
                                rows="3"
                                value={this.props.data.description}
                                onKeyPress={(e) => this.handlePressKey(e, data)}
                                onChange={(event) => { this.handleOnChange(event, 'description') }}>
                            </textarea>
                        </div>
                    </form>
                    <div className='action mt-1'>
                        <span className='edit btn' onClick={() => this.handleEditTask()}><i className="fa-solid fa-pencil"></i></span>
                        <span className='check btn' onClick={() => this.handleCompleteTask(data)}><i className="fa-solid fa-check-double"></i></span>
                        <span className='delete btn' onClick={() => this.handleDeleteTask(data)}><i className="fa-solid fa-x"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}
