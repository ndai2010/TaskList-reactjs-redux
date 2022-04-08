import React, { Component } from 'react'
import { connect } from 'react-redux'
import './HomePage.scss'
import CardTask from '../Card/CardTask';
import MoadalAddTask from '../modal/ModalAddTask';
import { getTodosByVisibilityFilter } from "../../redux/actions/selector";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false,
            selectedTab: 'all',
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

    selected = (id) => {
        this.setState({
            selectedTab: id
        })
        this.props.filterStatus(id)
    }
    render() {
        let { selectedTab } = this.state
        let filterTasks = getTodosByVisibilityFilter(this.props.data, this.props.filter)
        return (
            <>
                <MoadalAddTask
                    isOpen={this.state.isOpenModal}
                    toggleModal={this.toggleModal}
                    dataProps={this.props.data}
                    addTask={this.props.addTask}
                />

                <div className='header text-center'>
                    <h3>Todo List</h3>
                    <button className='btn btn-primary mt-3' onClick={() => { this.handelAddTask() }}>
                        create todo
                    </button>
                </div>
                <div className='option-tabs container'>
                    <ul>
                        <li className={`tabs-nav ${selectedTab === 'all' ? 'active' : null}`}
                            onClick={() => this.selected('all')}>all</li>

                        <li className={`tabs-nav ${selectedTab === 'completed' ? 'active' : null}`}
                            onClick={() => this.selected('completed')}>completed</li>

                        <li className={`tabs-nav ${selectedTab === 'incompleted' ? 'active' : null}`}
                            onClick={() => this.selected('incompleted')}>imcompleted</li>
                    </ul>
                </div>
                <div className='task-container container'>
                    <div className='list-tasks'>
                        {
                            filterTasks && filterTasks.length > 0 &&
                            filterTasks.map((item, key) => {
                                return (
                                    <CardTask
                                        data={item}
                                        delete={this.props.deleteTask}
                                        updateTask={this.props.updateTask}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.todo,
        filter: state.filter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (taskID) => dispatch({ type: 'DELETE_TASK', payload: taskID }),
        addTask: (data) => dispatch({ type: 'ADD_TASK', payload: data }),
        updateTask: (taskID) => dispatch({ type: 'EDIT_TASK', payload: taskID }),
        filterStatus: (filter) => dispatch({ type: 'FILTER_STATUS', payload: filter })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)