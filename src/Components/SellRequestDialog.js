import React from 'react';
import {Dialog, FlatButton, RaisedButton,TextField} from "material-ui";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
const items = [];
for (let i = 1; i < 101; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
}
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
        fontSize:14,
        // border:'1px solid blue',
        // left:"50%",
        // marginLeft:"10%",
        border:0,
    },
    dialog:{
        width: '100%',
        textAlign: 'center',
    },
    selectTeam: {
        width: "100%",
        textAlign:'center',
        // marginLeft:"15%",
    },
    floatingLabelStyle:{
        textAlign:'center',
        fontSize:13
    },
};


export default class SellRequestDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sellRequestDialogOpen:false,
            isInPropertyPage:this.props.isInPropertyPage,
        }
    }
    handleClose = () => {
        this.props.isAcceptSell(false);
        this.setState({
            sellRequestDialogOpen:false,
        });
    };

    handleSubmit =()=>{
        this.props.isAcceptSell(true);
        if(this.state.isInPropertyPage){
            this.props.getPropertyList();
        }
        else {

        }
        this.handleClose();
    };

    render() {
        const sellActions = [
            <FlatButton
                label="拒绝"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="接受"
                primary={true}
                keyboardFocused={true}
                // disabled={!((this.state.sellUserID) && (this.state.sellPrice))}
                onClick={this.handleSubmit}
            />,
        ];
        return (
            <div>
                <Dialog style={styles.dialog}
                        title="收到出售请求"
                        actions={sellActions}
                        open={this.state.sellRequestDialogOpen}
                        onRequestClose={this.handleClose}
                >
                    ****队，将以***元／个的价格向您出售***，共***个，是否接受？
                </Dialog>
            </div>
        );
    }
}