import React, { Component } from 'react'
import './CardTask.scss'
export default class CardTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: '',
            isOpen: false
        }
    }

    render() {
        return (
            <div className='card-task'>
                <div className='header-task container'>
                    <span className='name-task'>name task</span>
                    <div className='status'>status</div>
                </div>
                <div className='description mt-2 container'>
                    <form>
                        <div className='form-group'>
                            <textarea rows="3" className='form-control'>description</textarea>
                        </div>
                    </form>
                    <div className='action mt-1'>
                        <span className='edit btn'><i className="fa-solid fa-pencil"></i></span>
                        <span className='check btn'><i className="fa-solid fa-check-double"></i></span>
                        <span className='delete btn'><i className="fa-solid fa-x"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}
