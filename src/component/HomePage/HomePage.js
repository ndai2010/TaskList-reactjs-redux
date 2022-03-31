import React, { Component } from 'react'
import './HomePage.scss'
import CardTask from '../Card/CardTask';
import MoadalAddTask from '../modal/ModalAddTask';
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false,
            taskList: []
        }
    }
    handelAddTask = () => {
        this.setState({
            isOpenModal: true
        })
    }
    toggleModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }
    dataAddTask = (data) => {
        this.setState({
            taskList: [data]
        })
        console.log(this.state.taskList);
    }
    render() {
        return (
            <>
                <MoadalAddTask
                    isOpen={this.state.isOpenModal}
                    toggleModal={this.toggleModal}
                    dataAddTask={this.dataAddTask}
                />

                <div className='header text-center'>
                    <h3>Todo List</h3>
                    <button className='btn btn-primary mt-3' onClick={() => { this.handelAddTask() }}>
                        create todo
                    </button>
                </div>
                <div className='task-container container'>
                    <CardTask />
                </div>
            </>
        )
    }
}
