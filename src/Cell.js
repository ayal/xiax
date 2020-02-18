import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const pieceImages = {
	rook_white: "image://v1/4bc52e_d51d5b998211419b897e2640a89e1673~mv2.png/45_45/rook_white.png",
	rook_black: "image://v1/4bc52e_96400be7e1ad4ef088153fc740d27bbf~mv2.png/45_45/rook_black.png",
	pawn_white: "image://v1/4bc52e_e64495675a074dc8a29112e7193b598b~mv2.png/45_45/pawn_white.png",
 pawn_black: "image://v1/4bc52e_4ef97a0ac7c84fbb964d7b750831c2b6~mv2.png/45_45/pawn_black.png",
	knight_white: "image://v1/4bc52e_61b911077ced4793a045f865fb4f03fc~mv2.png/45_45/knight_white.png",
	knight_black: "image://v1/4bc52e_cde6554283d841ff92efc1387b91b0f2~mv2.png/45_45/knight_black.png",
	bishop_white: "image://v1/4bc52e_42a9d5a4ba70472d9f8574ec9631e9cf~mv2.png/45_45/bishop_white.png",
	bishop_black: "image://v1/4bc52e_73d298244f294c11aa76163720f7cb51~mv2.png/45_45/bishop_black.png",
	queen_white: "image://v1/4bc52e_a36c146ecb654dbab53c13c40adc5bff~mv2.png/45_45/queen_white.png",
	queen_black: "image://v1/4bc52e_2df8702d1b2f456a824fd259821d13c4~mv2.png/45_45/queen_black.png",
	king_white: "image://v1/4bc52e_19d50b42ffb84435809a9288462b819d~mv2.png/45_45/king_white.png",
 king_black: "image://v1/4bc52e_d236fec85c954a3aa4bf3c5e2d6c6047~mv2.png/45_45/king_black.png",
}


const imgurl = name => pieceImages[name] && pieceImages[name]
 .replace('image://v1/', 'https://static.wixstatic.com/media/')
 .replace(`/45_45/${name}.png`,'');


const CellDiv = styled.div`
   display:flex;
   min-height: 0px;
   width:12.5%;
   height:12.5%;
   outline:1px solid ${props=>props.selection && (props.selection.from === props.index ? 'red' : 'black')};
`;

Cell.propTypes = {
   name: PropTypes.string,
   index: PropTypes.number,
   selection: PropTypes.object
};

function Cell(props) {
   return (
      <CellDiv {...props} onClick={()=>props.onClick(props)}>
        <img src={imgurl(props.name)} />
      </CellDiv>
   );
}

export default Cell;