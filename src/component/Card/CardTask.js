import React, { Component } from 'react'
import './CardTask.scss'
import ModalUpdateTask from '../modal/ModalUpdateTask';
export default class CardTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            isOpenModal: false,

        }
    }
    handleDeleteTask = (task) => {
        this.props.delete(task)
    }
    handleCompleteTask = () => {
        let dataUpdate = {
            id: this.props.data.id,
            name: this.props.data.name,
            description: this.props.data.description,
            status: 'completed',
        }
        this.props.updateTask(dataUpdate)
    }
    handleEditTask = () => {
        this.setState({
            isOpenModal: true
        })
    }
    toggleModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    render() {
        let { data } = this.state
        return (
            <div className='card-task'>
                <ModalUpdateTask
                    isOpen={this.state.isOpenModal}
                    toggleModal={this.toggleModal}
                    dataProps={this.props.data}
                    updateTask={this.props.updateTask}
                />
                <div className='card-task-content container'>
                    <div className='header-task'>
                        <div className='name-task'>
                            <span>{this.props.data.name}</span>
                        </div>
                        <div className='status-task'>
                            <div className={'status-icon ' + this.props.data.status}></div>
                        </div>
                    </div>
                    <div className='description'>
                        <span>{this.props.data.description}</span>
                    </div>
                    <div className='action mt-1'>
                        <span className='edit btn' onClick={() => this.handleEditTask()}><i className="fa-solid fa-pencil"></i></span>
                        <span className='check btn' onClick={() => this.handleCompleteTask()}><i className="fa-solid fa-check"></i></span>
                        <span className='delete btn' onClick={() => this.handleDeleteTask(data)}><i className="fa-solid fa-x"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}
