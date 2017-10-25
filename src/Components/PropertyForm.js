import React from 'react';
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import Extension from 'material-ui/svg-icons/action/extension';
import Store from 'material-ui/svg-icons/action/store';
import Nature from 'material-ui/svg-icons/image/nature'
import SwipeableViews from 'react-swipeable-views';
import {Avatar, BottomNavigation, BottomNavigationItem, FontIcon, Paper, RaisedButton} from "material-ui";
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import DatePicker from 'material-ui/DatePicker';
import MachineDialog from "./MachineDialog";
import MaterialDialog from "./MaterialDialog";
// import actions from "redux-form/es/actions";
// const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
// const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

const styles = {
    table:{
        fontSize: 15,
        textAlign: 'left',
        width:"45%",
        // border:'1px solid blue',
        marginLeft:"30%",
        // border:0,
    },
    statustable:{
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
        // border:'1px solid blue',
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
        this.props.getPropertyList(this.props.id).then(() => {
            console.log("getPropertyList之后  = " );
            console.log(this.props.materialList[1]);
            console.log(this.props.wealth);
        });
    }

    renderAvatar(type){
        switch(type){
            case 'wood':
                return 'material-ui/svg-icons/image/nature';
            case 'brick':
                return "material-ui/svg-icons/image/view-compact";
            case 'cement':
                return "";
            default:
                return "";
        }
    }

    renderMaterialList (){
        return(this.props.materialList.map(item => {
            return(
                <Paper style={styles.ContainerPaper}>
                    {/*<ListItem>*/}
                    <Paper style={styles.CirclePaper} circle={true} zDepth={2}>
                        <Avatar
                            src={this.renderAvatar(item.type)}
                            style={styles.avatar}
                        />
                    </Paper><br/>
                    <table style={styles.table}>
                        <tr><td>种类：</td> <td>{item.type}</td></tr>
                        <tr><td>价格：</td> <td>{item.price}</td></tr>
                        <tr><td>数量：</td> <td>{item.number}</td></tr>
                    </table>

                    <MaterialDialog
                        sellMaterial = {this.props.sellMaterial}

                        material = {item}
                    />
                    {/*<RaisedButton style={styles.materialButton} label="出售" primary={true} onClick={()=>this.props.sellMaterial(this.props.id,item.type)} />*/}
                    {/*</ListItem>*/}
                </Paper>
            );
        }));
    }

    renderMachinelList (){
        return(this.props.machineList.map(item => {
            return(
                <Paper style={styles.ContainerPaper}>
                    {/*<ListItem>*/}
                    <Paper style={styles.CirclePaper} circle={true} zDepth={2}>
                        <Avatar
                            //src="material-ui/svg-icons/action/store"
                            style={styles.avatar}
                        />
                    </Paper><br/>
                    <table style={styles.table}>
                        <tr><td>机器ID:</td> <td>{item.id}</td></tr>
                        <tr><td>种类: </td> <td>{item.type}</td></tr>
                        <tr><td>剩余次数: </td> <td>{item.left}</td></tr>
                    </table>
                    <br/>
                    <div>
                        <MachineDialog
                            sellMachine = {this.props.sellMachine}
                            produce = {this.props.produce}

                            machine = {item}
                        />
                        {/*<RaisedButton style={styles.machineButton} label="出售" primary={true} onClick={this.sellMachine} />*/}
                        {/*<RaisedButton style={styles.machineButton} label="出售" primary={true} onClick={()=>this.props.sellMachine(this.props.id,item.id)} />*/}
                        {/*<RaisedButton style={styles.machineButton} label="生产" primary={true} onClick={()=>this.props.produce(this.props.id,item.id, item.left)} />*/}
                    </div>
                    {/*</ListItem>*/}
                </Paper>
            );
        }));
    }


    handleClose=()=>{this.setState({sellDialogOpen:false})}


    renderStatus = () => {
        return (
            <Paper style={styles.statusContainerPaper}>
                <table style={styles.statustable}>
                    <tr>
                        <td>比赛状态：{this.props.gameStatus}</td>
                        <td>剩余财产：{this.props.wealth}</td>
                    </tr>
                </table>
            </Paper>

        );
    }
    select = (index) => {
        this.setState({selectedIndex: index});
    }


    render(){
        return(
            <div>
                <MyAppBarAndDrawer text = {'资产'} />
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
                        {this.renderMachinelList()}
                    </div>
                    <div style={styles.slide}>
                        {this.renderMaterialList()}
                    </div>
                </SwipeableViews><br/><br/>
            </div>
        )
    }
}