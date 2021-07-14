import React from 'react';
import Square from './Square';

function Board() {
    return (
        <div>
            <div>
                <Square value="X"/>
                <Square value="X"/>
                <Square value="X"/>
            </div>
            <div>
                <Square value="X"/>
                <Square value="X"/>
                <Square value="X"/>
            </div>
            <div>
                <Square value="X"/>
                <Square value="X"/>
                <Square value="X"/>
            </div>
        </div>
        
    )
}

export default Board;

