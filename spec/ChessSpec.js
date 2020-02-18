import React from 'react'
import { mount } from 'enzyme';
import App from '../src/App';

import Board from '../src/Board';
import Cell from '../src/Cell';
import boardData from '../src/boardData';

describe('Chess Board', () => {

 it('App should render Board component', () => {
  const wrapper = mount(<App data={boardData} />);
  expect(wrapper.find(Board).length).toEqual(1);
 })

 it('Board should render 64 cell components', () => {
  const wrapper = mount(<Board data={boardData.board} />);
  expect(wrapper.find(Cell).length).toEqual(64);
 })

 it('First cell selection should work', () => {
  const wrapper = mount(<Board data={boardData.board} />);
  let cell = wrapper.findWhere(n=> (n.prop('index') === 46));
  cell.find('div').at(0).simulate('click');
  cell = wrapper.findWhere(n=> (n.prop('index') === 46));
  expect(cell.at(0).prop('selection').from).toEqual(46);
 })

 it('Second cell selection should send message to parent window', async () => {
  const wait = () => new Promise((resolve)=>{
   window.parent.addEventListener("message", (msg)=>{
    console.log('posted message to parent', msg.data);
    resolve(msg);
   },false);
  });

  const wrapper = mount(<Board data={boardData.board} />);
  
  let cell1 = wrapper.findWhere(n=> (n.prop('index') === 46));
  cell1.find('div').at(0).simulate('click');

  let cell2 = wrapper.findWhere(n=> (n.prop('index') === 38));
  cell2.find('div').at(0).simulate('click');

  let msg = await wait();
  expect(msg).toBeTruthy();
  expect(msg.data).toBeTruthy();
  expect(msg.data.move).toBeTruthy();
  expect(msg.data.move.from).toEqual(46);
  expect(msg.data.move.to).toEqual(38);
 })


});