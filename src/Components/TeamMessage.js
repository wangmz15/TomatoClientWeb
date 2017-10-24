import React from 'react';
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import IconButton from 'material-ui/IconButton';

// import MemberTable from "./MemberTable";
import InfoList from "./InfoList";
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";

const styles = {
    largeAvatarIcon: {
        // border:'1px solid blue',
        width: 120,
        height: 120,
    },
    largeDIV: {
        width: 200,
        height: 200,
        padding: 30,
        top:"30px",
        left:"50%",
        marginLeft:' -100px',
        // border :'1px solid blue',
    },

}
export default class TeamMessage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            username:'',
            id: '',
            wealth:'',
        }
    }

    componentWillMount() {
        this.props.getInformation(this.props.id).then(() => {
            // console.log("getInfo之后 wealth = " + this.props.wealth);
        });
    }


    changeAvatar = () => {
        console.log("change Avatar")
    };

    render(){

        return(
            <div>
                <MyAppBarAndDrawer text = {'队伍信息'} history = {this.props.history}/>

                <IconButton
                    iconStyle={styles.largeAvatarIcon}
                    style={styles.largeDIV}>
                    <AccountCircle onClick = {this.changeAvatar}/>
                </IconButton>
                <br/><br/>
                    <InfoList
                        username = {this.props.username}
                        // avatar = {this.props.avatar}
                        id = {this.props.id}
                        rank = {this.props.rank}
                        gameStatus = {this.props.gameStatus}
                    />

                <br/><br/>
                <LogoutButton />
                {/*<LogoutButton onClick={this.handleLogout}/>*/}
            </div>
        )
    }
}