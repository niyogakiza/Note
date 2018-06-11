import React, {Component} from 'react';
import Note from './Note';


class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes: [
                {
                    id: 23,
                    note: "Learn React"
                },
                {
                    id: 34,
                    note: "Learn Node.js"
                },
                {
                    id: 56,
                    note: "Sport"
                },
                {
                    id:39,
                    note: "Meet a friend"
                }

            ]
        }

    }

    update = (newText, i) =>{
        console.log('Updating item at index', i, newText);
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i ) ? note : {...note, note: newText}
            )
        }))
    };

    remove = (id) =>{
        this.setState( prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    };

    eachNote =(note, i) => {
        return(
            <Note
                key={i}
                index={i}
                onChange={this.update}
                onRemove={this.remove}
            >
                {note.note}
            </Note>
        )
    };



    render(){
        return(
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board;