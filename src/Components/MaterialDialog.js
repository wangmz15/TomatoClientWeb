import React from 'react';
import {Dialog, FlatButton, RaisedButton, TextField, SelectField, MenuItem} from "material-ui";

const items = [];
for (let i = 1; i < 101; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
}
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
};


export default class MaterialDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sellDialogOpen: false,

            sellUserID: null,
            sellNum:null,
            sellPrice:null,
        }
    }
    handleClose = () => {
        this.setState({
            sellDialogOpen: false,

            sellUserID: null,
            sellNum:null,
            sellPrice:null,
        });
    };

    handleSubmitSell =()=>{
        // this.props.produce(this.props.id,this.props.material.type,this.state.sellNum,this.state.sellPrice,this.state.sellUserID).then(
        this.props.sellMaterial(this.props.id,this.props.material.type,this.state.sellNum,this.state.sellPrice,this.state.sellUserID).then(
        ).catch((err)=>{

        });
        this.handleClose();
    };

    handleChange = (event, index, value) => {this.setState({sellUserID:value});};

    handleSellNum = (event) =>{this.setState({ sellNum: event.target.value })};

    handleSellPrice = (event) =>{this.setState({ sellPrice: event.target.value })};

    sellMachine = ()=>{this.setState({sellDialogOpen:true});};

    sellMaterial = ()=>{this.setState({sellDialogOpen:true});};

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
                disabled={!((this.state.sellUserID) && (this.state.sellNum) && (this.state.sellPrice))}
                onClick={this.handleSubmitSell}
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
                        onRequestClose={this.handleClose}>
                    <table style={styles.table}>
                        <tr><td>出售队伍ID：</td><td>
                            <SelectField
                                style={styles.selectTeam}
                                value={this.state.sellUserID}
                                onChange={this.handleChange}
                                maxHeight={200}>
                                {items}
                            </SelectField></td></tr>
                        <tr><td>出售数量：</td><td>
                            <TextField hintText={"1"}
                                       style={styles.input}
                                       value={this.state.sellNum}
                                       onChange={this.handleSellNum}/>份</td></tr>
                        <tr><td>出售价格：</td><td>
                            <TextField hintText={"100"}
                                       style={styles.input}
                                       value={this.state.sellPrice}
                                       onChange={this.handleSellPrice}/>元/份</td></tr>
                    </table>
                </Dialog>
            </div>
        );
    }
}