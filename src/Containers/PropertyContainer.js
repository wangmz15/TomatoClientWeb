import React, { Component} from 'react'
import { connect } from 'react-redux'
import PropertyForm from "../Components/PropertyForm";
import {getInformation, getPropertyList, produce, sellMachine, sellMaterial, connectReplyClient,connectRequestClient} from "../Actions/index";

class PropertyContainer extends Component {
    render() {
        const {getPropertyList, sellMaterial,sellMachine,produce,getInformation,
            gameStatus, machineList, materialList,id,wealth,
               replyClient, connectReplyClient,connectRequestClient,
            requestDialogOpen,replyDialogOpen,requestClient} = this.props;

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

                requestClient = {requestClient}
                replyClient = {replyClient}
                connectReplyClient = {connectReplyClient}
                connectRequestClient = {connectRequestClient}
                requestDialogOpen = {requestDialogOpen}
                replyDialogOpen = {replyDialogOpen}
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

    requestClient:state.propertyy.requestClient,
    replyClient:state.propertyy.replyClient,
    requestDialogOpen:state.propertyy.requestDialogOpen,
    replyDialogOpen:state.propertyy.replyDialogOpen,
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
    {getPropertyList,sellMaterial,sellMachine,produce,getInformation,connectReplyClient,connectRequestClient}
)(PropertyContainer)