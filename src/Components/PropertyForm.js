import React from 'react';
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";
import {Tabs, Tab} from 'material-ui/Tabs';
import Extension from 'material-ui/svg-icons/action/extension';
import Store from 'material-ui/svg-icons/action/store';
import SwipeableViews from 'react-swipeable-views';
import {Avatar, ListItem, Paper, RaisedButton} from "material-ui";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        // padding: ,
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
    }
};

export default class PropertyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0,
            gameStatus:-1,
            wealth:-1,
            materialList:[],
            machineList:[],
        };
    }

    componentWillMount() {
        this.props.getPropertyList(this.props.id).then(() => {
            console.log("getPropertyList之后  = " );
            console.log(this.props.materialList[1]);
            console.log(this.props.wealth);

            // this.setState({
            //     gameStatus:this.props.gameStatus,
            //     wealth:this.props.wealth,
            //     materialList:this.props.materialList,
            //     machineList:this.props.machineList,
            // })
        });
    }

    renderMaterialList (){
        // console.log("renderMaterialList ")
        // console.log(this.props.materialList[1]);
        //return(this.props.materialList.map(item => this.renderMaterial(item)));
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
        // console.log("renderMaterialList ")
        // console.log(this.props.materialList[1]);
        //return(this.props.materialList.map(item => this.renderMaterial(item)));
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
                    剩余数量: {item.left}<br/>
                    <br/>
                    <RaisedButton label="出售" primary={true} onClick={()=>this.props.sellMachine(this.props.id,item.id)} />
                    {/*{this.renderSellMaterialButton()}*/}
                    {/*<RaisedButton label="出售" primary={true} onClick={this.handleSellMaterial} />*/}
                    {/*</ListItem>*/}
                </Paper>
            );
        }));
    }

    handleChange = (value) =>{
        this.setState({
            slideIndex: value,
        });
        // console.log("machinelist = " + this.state.machineList);
    };

    render(){
        return(
            <div>
                <MyAppBarAndDrawer text = {'资产'} />

                <div>
                    <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                        <Tab  value={0} icon={<Extension />} label="材料"/>
                        <Tab  value={1} icon={<Store />} label="机器"/>
                    </Tabs>

                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange}>
                        <div style={styles.slide}>
                            {this.renderMaterialList()}
                        </div>
                        <div style={styles.slide}>
                            {this.renderMachinelList()}
                        </div>
                    </SwipeableViews>
                </div>
                <br/><br/>


            </div>
        )
    }
}