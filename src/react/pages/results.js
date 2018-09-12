import React, { Component } from 'react';
import Banner from '../components/common/banner';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import fullname from "../components/createWorkflow/playerItem";
import { VIDEO_LIST, PLAYER_LIST } from "../../graphql/types";


var ResultsPage = [
    {player: "James Hird", quiz: "Targetting kick outs " , score: "1"},
    {player: "Garry Ablett", quiz: "Targetting kick outs " , score: "3"}

];

var ResultsPage2 = [
    {player: "Nathan Buckley", quiz: "Midfield Posession" , score: "3"},
    {player: "Jason Dunstall", quiz: "Midfield Posession" , score: "3"}
]

var ResultsPage3 = [
    {player: "Tony Lockett", quiz: "Making Smarter attacking decisions" , score: "2"},
    {player: "Dustin Martin", quiz: "Making Smarter attacking decisions" , score: "3"}
]


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {
            videoData: [],
            players: []}
        }
    }

render() {
    return (
     <div> 
         <Banner title="Workflow Results" bgImage="https://elementvc.files.wordpress.com/2016/04/17-1.jpg?w=1075"></Banner>
       <div> 
           <h3 className="results__Heading"> Results of Completed Workflow </h3>
       <div> 

        <BootstrapTable 
        data={ResultsPage} 
        className="results__table-layout" 
        hover 
        responsive 
        striped
        bordered 
        condensed
        >
          <TableHeaderColumn isKey dataField='player' className="results__table-player-name">
            Player Name
          </TableHeaderColumn>
          
          <TableHeaderColumn dataField='quiz' className="results__table-quiz">
            Workflow Completed
          </TableHeaderColumn>

          <TableHeaderColumn dataField='score' className="results__table-score">
            Score
          </TableHeaderColumn>

        </BootstrapTable>

        </div>

        <div> 
        <BootstrapTable 
        data={ResultsPage2} 
        className="results__table-layout" 
        hover 
        responsive 
        striped
        bordered 
        condensed
        >
          <TableHeaderColumn isKey dataField='player' className="results__table-player-name">
            Player Name
          </TableHeaderColumn>
          
          <TableHeaderColumn dataField='quiz' className="results__table-quiz">
            Workflow Completed
          </TableHeaderColumn>

          <TableHeaderColumn dataField='score' className="results__table-score">
            Score
          </TableHeaderColumn>

        </BootstrapTable>

        </div>

        <div> 
        <BootstrapTable 
        data={ResultsPage3} 
        className="results__table-layout" 
        hover 
        responsive 
        striped
        bordered 
        condensed
        >
         <TableHeaderColumn isKey dataField='player' className="results__table-player-name">
            Player Name
          </TableHeaderColumn>
          
          <TableHeaderColumn dataField='quiz' className="results__table-quiz">
            Workflow Completed
          </TableHeaderColumn>

          <TableHeaderColumn dataField='score' className="results__table-score">
            Score
          </TableHeaderColumn>

        </BootstrapTable>

        </div>
    </div>
</div> 
        );
    }
}

export default Results;