import React, { Component} from 'react'
import { connect } from 'react-redux'
import PropertyForm from "../Components/PropertyForm";
// import PropertyList from "../Components/PropertyList";
import {getInformation, getPropertyList, produce, sellMachine, sellMaterial} from "../Actions/index";

class PropertyContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {getPropertyList, sellMaterial,sellMachine,produce,getInformation,
            gameStatus, machineList, materialList,id,wealth,} = this.props;
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
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
    {getPropertyList,sellMaterial,sellMachine,produce,getInformation}
)(PropertyContainer)