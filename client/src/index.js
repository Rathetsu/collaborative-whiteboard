import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
    render() {
        return(
            <text>
                Magic will happen here!
            </text>
        )
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
  );