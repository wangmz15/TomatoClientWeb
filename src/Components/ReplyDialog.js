import React from 'react';
import {Dialog, FlatButton, Toggle} from "material-ui";
import MenuItem from 'material-ui/MenuItem';
import {connectReplyClient,isAcceptSell} from "../Actions/index";
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


class ReplyDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            replyDialogOpen:this.props.replyDialogOpen,
            isInPropertyPage:this.props.isInPropertyPage,

            toggled:true,
        }
    }

    handleReject = () => {
        this.props.isAcceptSell(false,this.props.replyClient);
    };

    handleSubmit =()=>{
        this.props.isAcceptSell(true,this.props.replyClient);
    };

    componentWillMount() {
        this.props.connectReplyClient(this.props.replyClient);
    }

    render() {
        const sellActions = [
            <FlatButton
                label="拒绝"
                primary={true}
                onClick={this.handleReject}
            />,
            <FlatButton
                label="接受"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSubmit}
            />,
        ];
        // let re = this.props.request;
        // console.log("buggggggg");
        // console.log(this.props.request);


        console.log(this.props.request);
        return (
            <div >
                <Toggle
                    label="接受出售请求"
                    style={styles.toggle}
                    onToggle={this.test}
                />
                <Dialog style={styles.dialog}
                        title="收到出售请求"
                        actions={sellActions}
                        open={this.props.replyDialogOpen}
                        // onRequestClose={this.handleClose}
                >
                    {this.props.request.buyer}队将以{this.props.request.price}元／个的价格向您出售
                    {this.getType()}，
                    共{this.props.request.number}个，是否接受？
                </Dialog>
            </div>
        );
    }

    getType(){
        switch (this.props.request.typeOrMachineID){
            case 'wood':
                return '木材';
            case 'cement':
                return '水泥';
            case 'brick':
                return '砖块';
            default:
                return '机器'+this.props.request.typeOrMachineID;
        }
    }

    test = () =>{
        this.setState({
            toggled:!this.state.toggled,
        });
        if(this.state.toggled){
            this.props.replyClient.send("/api/client/readyToReceive/id=3", {}, "startListen")
        }
        else {
            this.props.replyClient.unsubscribe();
        }
        console.log(this.props.replyClient);

        // this.props.replyClient.send("/api/client/property/sellMachine/id=3", {}, JSON.stringify({'name': 'name'}))


    }
}

const mapStateToProps = (state) => ({//定义怎么绑定
    replyDialogOpen:state.propertyy.replyDialogOpen,
    replyClient:state.propertyy.replyClient,

    request:state.propertyy.request,
});


export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
    { connectReplyClient,isAcceptSell }
)(ReplyDialog)