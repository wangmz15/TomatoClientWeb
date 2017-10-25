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
    materialButton:{
        width: 30,
        margin:"8%",
        // border:'1px solid blue',
    },
    table:{
        textAlign:'left',
        width:"100%",
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


export default class MaterialDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sellDialogOpen: false,
        }
    }

    handleOpen = () => { this.setState({machineDialogOpen: true});};

    // handleSellClose = () => {this.setState({sellDialogOpen: false});};
    // handleProduceClose = () => {this.setState({produceDialogOpen: false});};

    handleClose = () => {
        this.setState({
            sellDialogOpen: false,
        });
    };

    sellMaterial= ()=>{
        this.setState({sellDialogOpen:true});
        this.props.sellMaterial().then(

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
                <RaisedButton style={styles.materialButton} label="出售" primary={true} onClick={this.sellMaterial} />
                <Dialog style={styles.dialog}
                        title="出售材料"
                        actions={actions}
                        open={this.state.sellDialogOpen}
                        onRequestClose={this.handleClose}
                >
                    <table style={styles.table}>
                        <tr><td>出售队伍ID：</td><td><SelectTeam floatingLabelText="队伍ID"/></td></tr>
                        <tr><td>出售数量：</td><td><TextField hintText={"1"} style={styles.input}/>个</td></tr>
                        <tr><td>出售价格：</td><td><TextField hintText={"100"}style={styles.input}/>／个</td></tr>
                    </table>
                </Dialog>
            </div>
        );
    }
}