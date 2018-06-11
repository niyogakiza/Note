import React, {Component} from 'react';
import { Button, Form} from 'react-bootstrap';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';

class Note extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false
        };
    }
    edit = () =>{
        this.setState({ editing: true})
    };

    remove = () =>{
        alert("REMOVED")
        // this.setState({ remove: true})
    };

    save = () =>{
        alert(this._newText);
    };

    renderForm = () =>{
        return (
            <div className="note">
                <Form>
                    <textarea
                        ref={input => this._newText  = input}
                    />
                    <Button
                        onClick={this.save}
                    >
                        <FaFloppyO/>
                    </Button>
                </Form>
            </div>
        )
    };

    renderDisplay = () =>{
        return(
            <div className="note">
                Learn React
                <span>
                    <Button
                        id="edit"
                        onClick={this.edit}
                    >
                        <FaPencil/>
                    </Button>
                    <Button
                        id="remove"
                        onClick={this.remove}
                    >
                        <FaTrash/>
                    </Button>
                </span>
            </div>
        )
    };

    render(){
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default Note;