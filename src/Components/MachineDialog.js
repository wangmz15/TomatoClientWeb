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


export default class MachineDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sellDialogOpen: false,
            produceDialogOpen:false,

            selectedValue: null,
            sellNum:null,
            sellPrice:null,
        }
    }
    handleClose = () => {
        this.setState({
            sellDialogOpen: false,
            produceDialogOpen:false,
            selectedValue: null,
            sellNum:null,
            sellPrice:null,
        });
    };

    handleSubmitSell =()=>{
        this.props.sellMachine(this.props.id, this.props.machine.id).then(

        ).catch((err)=>{

        });
        this.handleClose();
    };
    handleSubmitProduce = () =>{
        this.props.produce(this.props.id, this.props.machine.id, this.props.material,this.state.sellNum,this.state.sellPrice).then(

        ).catch((err)=>{

        })
        this.handleClose();
    };
    handleChange = (event, index, value) => {this.setState({selectedValue:value});};
    
    handleSellNum = (event) =>{this.setState({ sellNum: event.target.value })};
    
    handleSellPrice = (event) =>{this.setState({ sellPrice: event.target.value })};
    
    sellMachine = ()=>{this.setState({sellDialogOpen:true});};
    produce = ()=>{this.setState({produceDialogOpen:true});};
    render() {
        const sellActions = [
            <FlatButton
                label="取消"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="确认"
                primary={true}
                keyboardFocused={true}
                disabled={!((this.state.selectedValue) && (this.state.sellNum) && (this.state.sellPrice))}
                onClick={this.handleSubmitSell}
            />,
        ];
        const produceActions = [
            <FlatButton
                label="取消"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="确认"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSubmitProduce}
            />,
        ];


        return (
            <div>
                <RaisedButton style={styles.machineButton} label="出售" primary={true} onClick={this.sellMachine} />
                <RaisedButton style={styles.machineButton} label="生产" primary={true} onClick={this.produce}/>


                <Dialog style={styles.dialog}
                    title="出售机器"
                    actions={sellActions}
                    open={this.state.sellDialogOpen}
                    onRequestClose={this.handleClose}
                >
                    <table style={styles.table}>
                        <tr><td>机器ID：</td><td>{this.props.machine.id}</td></tr>
                        <tr><td>出售队伍ID：</td><td>
                            <SelectField
                            style={styles.selectTeam}
                            value={this.state.selectedValue}
                            onChange={this.handleChange}
                            maxHeight={200}>
                                {items}
                            </SelectField></td></tr>
                        <tr><td>出售数量：</td><td>
                            <TextField hintText={"1"}
                                       style={styles.input}
                                       value={this.state.sellNum}
                                       onChange={this.handleSellNum}/>台</td></tr>
                        <tr><td>出售价格：</td><td>
                            <TextField hintText={"100"}
                                       style={styles.input}
                                       value={this.state.sellPrice}
                                       onChange={this.handleSellPrice}/>元/台</td></tr>
                    </table>
                </Dialog>

                <Dialog title="开始生产"
                    actions={produceActions}
                    open={this.state.produceDialogOpen}
                    onRequestClose={this.handleClose}
                    style={styles.table}
                >
                    机器{this.props.machine.id}将耗费XX木材，XX砖块，XX水泥，并消耗一次生产机会，是否确认开始
                </Dialog>

            </div>
        );
    }
}