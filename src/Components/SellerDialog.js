import React from 'react';
import {Dialog, FlatButton} from "material-ui";
import MenuItem from 'material-ui/MenuItem';
import {connectSellerClient, receiveReply} from "../Actions/index";
import connect from "react-redux/es/connect/connect";

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


class SellerDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isInPropertyPage:this.props.isInPropertyPage,
        }
    }

    componentWillMount() {
        this.props.connectSellerClient();
    }

    handleSubmit =()=>{
        this.props.receiveReply();
    };
    getDetail(){
        switch (this.props.reply.typeOrMachineID){
            case 'wood':
                return this.props.reply.price+'元/份，出售木材'+this.props.reply.number+'份';
            case 'cement':
                return this.props.reply.price+'元/份，出售水泥'+this.props.reply.number+'份';
            case 'brick':
                return this.props.reply.price+'元/份，出售砖块'+this.props.reply.number+'份';
            default:
                return this.props.reply.price+'元/台，出售机器'+this.props.reply.typeOrMachineID;
        }
    }

    render() {
        const sellActions = [
            <FlatButton
                label="确认"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSubmit}
            />,
        ];
        return (
            <div>
                <Dialog style={styles.dialog}
                        title={this.props.reply.isAgree?'出售成功':'出售失败'}
                        actions={sellActions}
                        open={this.props.sellerDialogOpen}
                >
                    {this.props.reply.buyer}队{this.props.reply.isAgree?'确认':'拒绝'}接受您以{this.getDetail()}的请求
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    sellerDialogOpen:state.propertyy.sellerDialogOpen,
    buyerClient:state.propertyy.buyerClient,

    reply:state.propertyy.reply,

});


export default connect(
    mapStateToProps,
    { connectSellerClient,receiveReply}
)(SellerDialog)