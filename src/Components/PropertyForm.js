import React from 'react';
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";
import Extension from 'material-ui/svg-icons/action/extension';
import Store from 'material-ui/svg-icons/action/store';
import SwipeableViews from 'react-swipeable-views';
import {Avatar, BottomNavigation, BottomNavigationItem,  Paper} from "material-ui";
import MachineDialog from "./MachineDialog";
import MaterialDialog from "./MaterialDialog";
import Wood from "material-ui/svg-icons/image/nature";
import Brick from "material-ui/svg-icons/image/view-compact";
import RequestDialog from "./SellerDialog";




const styles = {
    table:{
        fontSize: 15,
        textAlign: 'left',
        width:"50%",
        // border:'1px solid blue',
        marginLeft:"25%",
        // border:0,
    },
    statusTable:{
        textAlign: 'center',
        fontSize: 13,
        width:"80%",
        // border:'1px solid blue',
        // left:"50%",
        marginLeft:"10%",
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    ContainerPaper : {
        width: '90%',
        height: 300,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        marginLeft:15,
        marginTop:20,
        textAlign: 'center',
        display: 'inline-block',
    },
    statusContainerPaper : {
        width: '90%',
        height: 40,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        marginLeft:15,
        marginTop:20,
        textAlign: 'center',
        // display: 'inline-block',
    },
    CirclePaper:{
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    },
    avatar:{
        height: 100,
        width: 100,
        margin: 'auto',
        textAlign: 'center',
        display: 'inline-block',
    },
    materialButton:{
        width: 30,
        margin:6,
    },
};

export default class PropertyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }


    componentWillMount() {
        this.props.getInformation(this.props.id).then(()=>{});
        this.props.getPropertyList(this.props.id).then(() => {
        });
        this.props.getAllUser(this.props.id).then(() => {
        });

        // this.props.connectBuyerClient(this.props.replyClient);
        this.props.connectSellerClient(this.props.buyerClient);
    }
    renderAvatar(type){
        switch(type){
            case 'wood':
                return (<Wood/>);
            case 'brick':
                return (<Brick/>);
            case 'cement':
                return (<Wood/>);
            default:
                return (<Wood/>);
        }
    }

    renderMaterialList (){
        return(this.props.materialList.map(item => {
            return(
                <Paper style={styles.ContainerPaper} key={item.type}>
                    <Paper style={styles.CirclePaper} circle={true} zDepth={2}>
                        <Avatar
                            icon={<Wood />}
                            style={styles.avatar}
                        />
                    </Paper><br/>
                    <table style={styles.table}>
                        <tbody>
                        <tr><td>种类：</td><td>{item.type}</td></tr>
                        <tr><td>生产价格：</td><td>{item.price}</td></tr>
                        <tr><td>数量：</td><td>{item.number}</td></tr>
                        </tbody>
                    </table>

                    <MaterialDialog

                        material = {item}
                        id = {this.props.id}
                        allUserList={this.props.allUserList}

                        sellerClient={this.props.sellerClient}

                    />
                </Paper>
            );
        }));
    }

    renderMachineList (){
        // console.log("int PropertyForm");
        // console.log(this.props.allUserList);
        return(this.props.machineList.map(item => {
            return(
                <Paper style={styles.ContainerPaper} key = {item.id}>
                    <Paper style={styles.CirclePaper} circle={true} zDepth={2}>
                        <Avatar
                            //src="material-ui/svg-icons/action/store"
                            style={styles.avatar}
                        />
                    </Paper><br/>
                    <table style={styles.table}>
                        <tbody>
                        <tr><td>机器ID:</td><td>{item.id}</td></tr>
                        <tr><td>生产种类:</td><td>{item.type}</td></tr>
                        <tr><td>剩余次数:</td><td>{item.left}</td></tr>
                        </tbody>
                    </table>
                    <br/>
                    <div>
                        <MachineDialog
                            produce = {this.props.produce}

                            machine = {item}
                            id = {this.props.id}
                            allUserList={this.props.allUserList}

                            sellerClient={this.props.sellerClient}
                        />
                    </div>
                </Paper>
            );
        }));
    }


    handleClose=()=>{this.setState({sellDialogOpen:false})}


    renderStatus = () => {
        return (
            <Paper style={styles.statusContainerPaper}>
                <table style={styles.statusTable}>
                    <tbody>
                    <tr>
                        <td>比赛状态：{this.props.gameStatus}</td>
                        <td>剩余财产：{this.props.wealth}</td>
                    </tr>
                    </tbody>
                </table>
            </Paper>

        );
    };
    select = (index) => {
        this.setState({selectedIndex: index});
    };




    render(){
        return(
            <div>

                <MyAppBarAndDrawer text = {'资产'} />
                <RequestDialog/>
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="机器"
                            icon={<Store />}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="材料"
                            icon={<Extension />}
                            onClick={() => this.select(1)}
                        />
                    </BottomNavigation>
                </Paper>
                {this.renderStatus()}

                <SwipeableViews
                        index={this.state.selectedIndex} onChangeIndex={this.handleChange}>
                    <div style={styles.slide}>
                        {this.renderMachineList()}
                    </div>
                    <div style={styles.slide}>
                        {this.renderMaterialList()}
                    </div>
                </SwipeableViews><br/><br/>
                <LogoutButton />
            </div>
        )
    }



}