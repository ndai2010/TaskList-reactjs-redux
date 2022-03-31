import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
export default class MoadalAddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            description: '',
        }
    }
    toggle = () => {
        this.props.toggleModal();
    }
    checkVali = () => {
        let isValid = true;
        let inputArr = ['task', 'description']
        for (let i = 0; i < inputArr.length; i++) {
            if (!this.state[inputArr[i]]) {
                isValid = false;
                alert('Missing parameter!');
                break;
            }
        }
        return isValid;
    }
    handleOnChange = (e, id) => {
        let coppyState = { ...this.state };
        coppyState[id] = e.target.value;
        this.setState({
            ...coppyState
        })
    }
    handleClickAdd = () => {
        let obj = {}
        obj["task"] = this.state.task;
        obj["description"] = this.state.description;

        let isValid = this.checkVali();
        if (isValid) {
            this.toggle()
            this.props.dataAddTask(obj)
            alert("add task group succeed!")
        }
    }
    render() {
        let { task, description } = this.state
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }}>
                <ModalHeader toggle={() => { this.toggle() }}>Create task group</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label className='task-name'>Task name</label>
                            <input type='text' className='form-control' value={task} onChange={(event) => { this.handleOnChange(event, 'task') }}></input>
                        </div>
                        <div className='form-group'>
                            <label className='task-name'>description</label>
                            <textarea rows="5" className='form-control' value={description} onChange={(event) => { this.handleOnChange(event, 'description') }}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { this.handleClickAdd() }}>Add</Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
