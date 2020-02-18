import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from './Cell';

const BoardDiv = styled.div`
   max-width:320px;
   min-width:320px;
   max-height:320px;
   background:grey;
   display:flex;
   flex-wrap:wrap;
   align-content:center;
   flex-direction: row;
   flex:1;
   min-height: 0px;
`;


Board.propTypes = {
   data: PropTypes.array,
};

function Board(props) {
   let [selection, setSelection] = React.useState({from:null, to:null});
   console.log('rendering Board', selection);

   const cells = props.data.map((cellname, idx) => {
      return <Cell key={idx} index={idx} 
         name={cellname} selection={selection} 
         onClick={
            (cellprops) => {
               console.log('click cell', cellprops, selection);
               if (!selection.from && cellprops.name) { // start move a piece
                  setSelection({ from: cellprops.index, to: null });
               }
               else if (selection.from === cellprops.index) { // unselect
                  setSelection({ from: null, to: null });
               }
               else {
                  console.log('move piece!',
                     cellprops.name, selection.from, cellprops.index);
                  window.parent.postMessage({
                     type: 'move',
                     move: { ...selection, to: cellprops.index }
                  }, '*');
                  setSelection({ from: null, to: null });
               }
            }
         } />
   })

   return (
      <BoardDiv>
         {cells}
      </BoardDiv>
   );
}

export default Board;