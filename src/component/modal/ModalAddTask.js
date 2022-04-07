import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
export default class MoadalAddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            description: '',
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
                toast.warning('Missing ' + inputArr[i]);
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
        if (this.checkVali()) {
            let data = {
                id: this.props.dataProps.length > 0 ? this.props.dataProps[this.props.dataProps.length - 1].id + 1 : 0,
                name: this.state.taskName,
                description: this.state.description,
                status: "incompleted"
            }
            this.props.addTask(data)
        }
        this.setState({
            taskName: '',
            description: '',
        })
        this.toggle()

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
