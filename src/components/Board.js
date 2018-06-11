import React, {Component} from 'react';
import Note from './Note';


class Board extends Component{
    render(){
        return(
            <div className="board">
                <Note></Note>
            </div>
        )
    }
}

export default Board;