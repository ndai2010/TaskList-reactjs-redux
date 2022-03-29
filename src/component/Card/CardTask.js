import React, { Component } from 'react'
import './CardTask.scss'
export default class CardTask extends Component {
    render() {
        return (
            <div className='card-content'>
                <div className='card-header'>
                    <div className='title-task'>name</div>
                    <div className='action-card'>
                        <div className='edit-task-btn'><i className="fa-solid fa-pen-to-square"></i></div>
                        <div className='delete-task-btn'><i className="fa-solid fa-trash-can"></i></div>
                    </div>
                </div>
                <div className='description-task'>
                    <div className='description'></div>
                    <div className='check-task'></div>
                </div>
            </div>
        )
    }
}
