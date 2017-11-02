import React, { Component} from 'react'
import { connect } from 'react-redux'
import PropertyForm from "../Components/PropertyForm";
import {
    getInformation, getPropertyList, produce, sellMachine, sellMaterial, connectBuyerClient, connectSellerClient,
    getAllUser
} from "../Actions/index";

class PropertyContainer extends Component {
    render() {
        const {getPropertyList, produce,getInformation,
            gameStatus, machineList, materialList,id,wealth,getAllUser,allUserList, connectBuyerClient,connectSellerClient,
            sellerDialogOpen,buyerDialogOpen,sellerClient} = this.props;

        return(
            <PropertyForm
                getPropertyList = {getPropertyList}
                getInformation = {getInformation}
                produce = {produce}

                id = {id}
                gameStatus = {gameStatus}
                machineList = {machineList}
                materialList = {materialList}
                wealth = {wealth}
                allUserList={allUserList}
                getAllUser = {getAllUser}

                sellerClient = {sellerClient}
                connectBuyerClient = {connectBuyerClient}
                connectSellerClient = {connectSellerClient}
                sellerDialogOpen = {sellerDialogOpen}
                buyerDialogOpen = {buyerDialogOpen}
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
    allUserList:state.propertyy.allUserList,

    sellerClient:state.propertyy.sellerClient,
    sellerDialogOpen:state.propertyy.sellerDialogOpen,
    buyerDialogOpen:state.propertyy.buyerDialogOpen,
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
    {getPropertyList,produce,getInformation,connectBuyerClient,connectSellerClient,getAllUser}
)(PropertyContainer)