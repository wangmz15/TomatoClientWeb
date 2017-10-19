import React, {Component} from 'react';
import {
    Table,
    TableBody,
    // TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const tableData = [
    {
        name: 'John Smith',
        status: 'Online',
    },
    {
        name: 'Randal White',
        status: 'Offline',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Online',
    },
    {
        name: 'Steve Brown',
        status: 'Online',
    },
    {
        name: 'Joyce Whitten',
        status: 'Online',
    },
    {
        name: 'Samuel Roberts',
        status: 'Online',
    },
    {
        name: 'Adam Moore',
        status: 'Online',
    },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
    constructor(props){
        super(props)
        this.state ={
            fixedHeader: true,
            fixedFooter: false,
            stripedRows: true,
            showRowHover: true,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '300px',
        }
    }
    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn
                                colSpan="3" tooltip="Super Header"
                                // tooltipStyle={}
                                style={{'text-align': 'center',
                                    'font-weight':'400',
                                    'font-size':'17px',
                                    // 'font-color':'cyan500',
                                    'color': 'cyan500',}}
                            >
                                TEAM:TOMATO
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="姓名">成员姓名</TableHeaderColumn>
                            <TableHeaderColumn tooltip="状态">成员状态</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {tableData.map( (row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/*<TableFooter*/}
                        {/*adjustForCheckbox={this.state.showCheckboxes}*/}
                    {/*>*/}
                        {/*<TableRow>*/}
                            {/*<TableRowColumn>ID</TableRowColumn>*/}
                            {/*<TableRowColumn>Name</TableRowColumn>*/}
                            {/*<TableRowColumn>Status</TableRowColumn>*/}
                        {/*</TableRow>*/}
                        {/*<TableRow>*/}
                            {/*<TableRowColumn colSpan="3" style={{textAlign: 'center'}}>*/}
                                {/*/!*Super Footer*!/*/}
                            {/*</TableRowColumn>*/}
                        {/*</TableRow>*/}
                    {/*</TableFooter>*/}
                </Table>
            </div>
        );
    }
}