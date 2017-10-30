import React, { Component} from 'react'
import { connect } from 'react-redux'
import PropertyForm from "../Components/PropertyForm";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {getInformation, getPropertyList, produce, sellMachine, sellMaterial, connectClient} from "../Actions/index";

class PropertyContainer extends Component {
    render() {
        // console.log("now RENDER let's see if the socket is connected? :" + stompClient.connected)
        const {getPropertyList, sellMaterial,sellMachine,produce,getInformation,
            gameStatus, machineList, materialList,id,wealth,
               stompClient, connectClient} = this.props;
        return(
            <PropertyForm
                getPropertyList = {getPropertyList}
                getInformation = {getInformation}
                sellMaterial = {sellMaterial}
                sellMachine = {sellMachine}
                produce = {produce}

                id = {id}
                gameStatus = {gameStatus}
                machineList = {machineList}
                materialList = {materialList}
                wealth = {wealth}

                stompClient = {stompClient}
                connectClient = {connectClient}
            />
        );
    }
}

const mapStateToProps = (state) => ({//定义怎么绑定
    gameStatus: state.customer.gameStatus,
    machineList:state.propertyList.machineList,
    materialList:state.propertyList.materialList,
    wealth:state.propertyList.wealth,
    id:state.customer.id,

    stompClient:state.customer.stompClient,
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
    {getPropertyList,sellMaterial,sellMachine,produce,getInformation,connectClient}
)(PropertyContainer)