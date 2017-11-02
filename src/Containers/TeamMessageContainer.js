import React, { Component} from 'react'
import { connect } from 'react-redux'
import TeamMessage from '../Components/TeamMessage'
import {changeAvatar, connectReplyClient, getInformation, isAcceptSell, updateInformation} from "../Actions/index";

class TeamMessageContainer extends Component {
    render() {
        const {getInformation ,updateInformation,changeAvatar, username, id, avatar, rank, gameStatus,
            // replyClient,requestClient,request,connectReplyClient,isAcceptSell,replyDialogOpen
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

                // replyClient={replyClient}
                // requestClient={requestClient}
                // request={request}
                // connectReplyClient={connectReplyClient}
                // isAcceptSell={isAcceptSell}
                // replyDialogOpen={replyDialogOpen}

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

    // replyClient:state.propertyy.replyClient,
    // requestClient:state.propertyy.requestClient,
    // request:state.propertyy.request,
    // replyDialogOpen:state.propertyy.replyDialogOpen,
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
    {updateInformation, getInformation, changeAvatar,
        // connectReplyClient,isAcceptSell
    }
)(TeamMessageContainer)