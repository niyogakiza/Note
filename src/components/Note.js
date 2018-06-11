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
        this.props.onRemove(this.props.index)
    };

    save = (e) =>{
        e.preventDefault();
        this.props.onChange(this._newText.value, this.props.index);
        this.setState({ editing: false})
    };

    renderForm = () =>{
        return (
            <div className="note">
                <Form onSubmit={this.save}>
                    <textarea ref={input => this._newText  = input}/>
                    <button id="save"><FaFloppyO/></button>
                </Form>
            </div>
        )
    };

    renderDisplay = () =>{
        return(
            <div className="note">
                <p>{this.props.children}</p>
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