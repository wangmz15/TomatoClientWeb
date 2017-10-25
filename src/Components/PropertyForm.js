import React from 'react';
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import Extension from 'material-ui/svg-icons/action/extension';
import Store from 'material-ui/svg-icons/action/store';
import SwipeableViews from 'react-swipeable-views';
import {Avatar, BottomNavigation, BottomNavigationItem, FontIcon, Paper, RaisedButton} from "material-ui";
// const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
// const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

const styles = {
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
    machineButton:{
        width: 30,
        margin:6,
        // border:'1px solid blue',
    },
};

export default class PropertyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // slideIndex: 0,
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

    renderMaterialList (){
        return(this.props.materialList.map(item => {
            return(
                <Paper style={styles.ContainerPaper}>
                    {/*<ListItem>*/}
                    <Paper style={styles.CirclePaper} circle={true} zDepth={2}>
                        <Avatar
                            //src="material-ui/svg-icons/action/store"
                            style={styles.avatar}
                        />
                    </Paper><br/>
                    种类: {item.type}
                    <br/>
                    价格: {item.price}
                    <br/>
                    数量: {item.number}
                    <br/><br/>
                    <RaisedButton label="出售" primary={true} onClick={()=>this.props.sellMaterial(this.props.id,item.type)} />
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
                    机器ID: {item.id}<br/>
                    种类: {item.type}<br/>
                    剩余生产次数: {item.left}<br/>
                    <br/>
                    <div>
                        <RaisedButton style={styles.machineButton} label="出售" primary={true} onClick={()=>this.props.sellMachine(this.props.id,item.id)} />
                        <RaisedButton style={styles.machineButton} label="生产" primary={true} onClick={()=>this.props.produce(this.props.id,item.id, item.left)} />
                    </div>
                    {/*</ListItem>*/}
                </Paper>
            );
        }));
    }
    renderStatus = () => {
        return (
            <Paper style={styles.statusContainerPaper}>
                <table style={styles.statusContainerPaper}>
                    <tr>
                        <td>比赛状态: {this.props.gameStatus}</td>
                        <td>剩余财产: {this.props.wealth}</td>
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