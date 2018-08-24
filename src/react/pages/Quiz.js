import React, { Component } from 'react';
import Banner from '../components/common/banner';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';


/*function alternatingRowColours(row, rowIdx) {
    return { backgroundColor: rowIdx % 2 === 0 ? '#D3D3D3' : 'white' 
  };
  }
  changes the colour of the rows, however, is not needed anymore due to
  react-bootstrap-table built in styling called 'striped'
*/


  
var playerData = [
    {player:'Luke Badawy', quiz:'Passing Improvement', time:'2:33', score:'10/10'},
    {player:'Deven Main', quiz:'Passing Improvement', time:'2:40', score:'10/10'},
    {player:'Jackson Rig', quiz:'Ace Kicking', time:'3:20', score:'15/15'},
    {player:'Wendy Bendy', quiz:'Mid field positioning', time:'5:03', score:'7/10'},
    {player:'Danielle Runner', quiz:'Stopping Dustin Martin', time:'10:33', score:'0/19'},
    {player:'Ron Bergendy', quiz:'Stopping Dustin Martin', time:'15:12', score:'0/19'},
    {player:'Chris Luck', quiz:'Handball Guide', time:'1:50', score:'5/7'},
  ];

  
   

class Quiz extends Component {
  render() {
    return (
      <div>
        <Banner title="Quiz Overview" bgImage="http://i.cdn.turner.com/cnn/2010/SPORT/football/06/21/france.squad.crisis/t1larg.france.squad.afp.gi.jpg"></Banner>
        <div className="quiz">

        <div className="quiz__table">
        <h4 className="quiz__table-heading"> Recent Quiz Results </h4>

        <BootstrapTable 
        data={playerData} 
        className="quiz__table-layout" 
        hover 
        responsive 
        striped
        bordered 
        condensed
        >

          <TableHeaderColumn isKey dataField='player' className="quiz__table-player-name">
            Player Name
          </TableHeaderColumn>
          
          <TableHeaderColumn dataField='quiz' className="quiz__table-quiz">
            Quiz
          </TableHeaderColumn>
          
          <TableHeaderColumn dataField='time' className="quiz__table-time">
            Time
          </TableHeaderColumn>

          <TableHeaderColumn dataField='score' className="quiz__table-time">
            Score
          </TableHeaderColumn>

        </BootstrapTable>

        </div>


        <div className="quiz__additional">
            <h3 className="quiz__additional-heading"> Additional Info </h3>

            <p className="quiz__additional-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam facere animi quod excepturi deserunt ratione eos 
            ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
            quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam facere animi quod excepturi deserunt ratione eos 
            ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
            quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium  
            </p>

            <p className="quiz__additional-text2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam facere animi quod excepturi deserunt ratione eos 
            ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
            quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam facere animi quod excepturi deserunt ratione eos 
            ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
            quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
            </p>

          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;