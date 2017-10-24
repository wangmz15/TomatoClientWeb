import React, { Component} from 'react'
import { connect } from 'react-redux'
import TeamMessage from '../Components/TeamMessage'
import {getInformation, updateInformation} from "../Actions/index";

class TeamMessageContainer extends Component {

    // componentWillMount() {
    //     console.log("getInfo之前 = " + this.props.wealth);
    //     this.props.getInformation(this.props.id);
    //     console.log("getInfo之后 = " + this.props.wealth);
    // }

    changeAvatar = () => {
        const {id, avatar, wealth} = this.props;
        console.log("Avatar Change");
        updateInformation(id, avatar, wealth);
    }

    render() {
        const {getInformation , username, id, avatar, rank, gameStatus} = this.props;


        return(
            <TeamMessage
                onAvatarChange = {this.changeAvatar}
                getInformation = {getInformation}

                username = {username}
                id = {id}
                avatar = {avatar}
                rank = {rank}
                gameStatus = {gameStatus}
            />
        );
    }
}

const mapStateToProps = (state) => ({//定义怎么绑定
    username:state.customer.username,
    id: state.customer.id,
    avatar: state.customer.avatar,
    rank: state.customer.rank,
    gameStatus: state.customer.gameStatus,
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
    {updateInformation, getInformation}
)(TeamMessageContainer)