import React from 'react';
import {
    DatePicker, Dialog, FlatButton, RaisedButton, Table, TableBody, TableHeader, TableColumnRow,
    TextField
} from "material-ui";
import Divider from 'material-ui/Divider';
import SelectTeam from "./SelectTeam";

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */

const styles = {
    input:{
        width:60,
    },
    machineButton:{
        width: 30,
        margin:"3%",
        // border:'1px solid blue',
    },
    table:{
        width:"100%",
        textAlign:"left",
        // border:'1px solid blue',
        // left:"50%",
        // marginLeft:"10%",
        border:0,
    },
    dialog:{
        width: '100%',
        textAlign: 'center',
    },
};


export default class MachineDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sellDialogOpen: false,
            produceDialogOpen:false,
        }
    }

    handleOpen = () => { this.setState({machineDialogOpen: true});};

    // handleSellClose = () => {this.setState({sellDialogOpen: false});};
    // handleProduceClose = () => {this.setState({produceDialogOpen: false});};

    handleClose = () => {
        this.setState({
            sellDialogOpen: false,
            produceDialogOpen:false,
        });
    };

    sellMachine = ()=>{
        this.setState({sellDialogOpen:true});
        this.props.sellMachine().then(

        ).catch((err)=>{

        })
    };
    produce = ()=>{
        this.setState({produceDialogOpen:true});
        this.props.produce().then(

        ).catch((err)=>{

        })
    };
    render() {
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="确认"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                {/*<RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen} />*/}
                <RaisedButton style={styles.machineButton} label="出售" primary={true} onClick={this.sellMachine} />
                <RaisedButton style={styles.machineButton} label="生产" primary={true} onClick={this.produce}/>




                <Dialog style={styles.dialog}
                    title="出售机器"
                    actions={actions}
                    // modal={false}
                    open={this.state.sellDialogOpen}
                    onRequestClose={this.handleSellClose}
                >
                    <table style={styles.table}>
                        <tr><td>机器ID：</td><td>{this.props.machine.id}</td></tr>
                        <tr><td>出售队伍ID：</td><td><SelectTeam /></td></tr>
                        <tr><td>出售数量：</td><td><TextField hintText={"1"} style={styles.input}/>个</td></tr>
                        <tr><td>出售价格：</td><td><TextField hintText={"100"}style={styles.input}/>/个</td></tr>
                    </table>
                </Dialog>

                <Dialog
                    title="开始生产"
                    actions={actions}
                    open={this.state.produceDialogOpen}
                    onRequestClose={this.handleProduceClose}
                >
                    机器{this.props.machine.id}将开始生产，这将耗费XX木材，XX砖块，XX水泥，是否确认开始
                </Dialog>

            </div>
        );
    }
}