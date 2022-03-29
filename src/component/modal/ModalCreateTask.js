import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
export default class ModalCreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            description: ''
        }
    }
    toggle = () => {
        this.props.toggleModal();
    }
    checkVali = () => {
        let isValid = true;
        let inputArr = ['taskName', 'description']
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
        obj["name"] = this.state.taskName;
        obj["description"] = this.state.description;

        let isValid = this.checkVali();
        if (isValid) {
            this.toggle()
            this.props.dataAddTask(obj)
            alert("add task succeed!")
        }
    }
    render() {
        let { taskName, description } = this.state
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }}>
                <ModalHeader toggle={() => { this.toggle() }}>Create task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label className='task-name'>Task name</label>
                            <input type='text' className='form-control' value={taskName} onChange={(event) => { this.handleOnChange(event, 'taskName') }}></input>
                        </div>
                        <div className='form-group mt-3'>
                            <label className='description'>Description</label>
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
