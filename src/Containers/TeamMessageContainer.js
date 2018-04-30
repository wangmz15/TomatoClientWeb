import React, { Component} from 'react'
import { connect } from 'react-redux'
import TeamMessage from '../Components/TeamMessage'
import {changeAvatar,  getInformation, updateInformation} from "../Actions/index";

class TeamMessageContainer extends Component {
    render() {
        const {getInformation ,updateInformation,changeAvatar, username, id, avatar, rank, gameStatus,
            // replyClient,buyerClient,request,connectBuyerClient,isAcceptSell,buyerDialogOpen
        } = this.props;
        return(
            <TeamMessage
                getInformation = {getInformation}
                updateInformation = {updateInformation}

                username = {username}
                id = {id}
                avatar = {avatar}
                rank = {rank}
                gameStatus = {gameStatus}
                changeAvatar = {changeAvatar}

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
    {updateInformation, getInformation, changeAvatar,
    }
)(TeamMessageContainer)