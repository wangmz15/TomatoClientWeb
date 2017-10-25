import React from 'react';
import History from 'material-ui/svg-icons/action/history';
import Favorite from 'material-ui/svg-icons/action/favorite-border';
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";
// import Extension from 'material-ui/svg-icons/action/extension';
// import Store from 'material-ui/svg-icons/action/store';
import SwipeableViews from 'react-swipeable-views';
import { BottomNavigation, BottomNavigationItem, Paper} from "material-ui";



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
}

export default class Statistics extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    };
    componentWillMount(){
        this.props.getHistory(this.props.id);
    }
    select = (index) => {
        this.setState({selectedIndex: index});
    };

    renderRecent= ()=>{
        return(
          <h1>recent</h1>
        );
    };

    render(){
        return(
            <div>
                <MyAppBarAndDrawer text = {'统计'}/>

                <Paper zDepth={2}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="交易信息"
                            icon={<History/>}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="趣味报表1"
                            icon={<Favorite />}
                            onClick={() => this.select(1)}
                        />
                        <BottomNavigationItem
                            label="趣味报表2"
                            icon={<Favorite />}
                            onClick={() => this.select(2)}
                        />
                    </BottomNavigation>
                </Paper>

                <SwipeableViews
                    index={this.state.selectedIndex} onChangeIndex={this.handleChange}>
                    <div style={styles.slide}>
                        {this.renderRecent()}
                    </div>
                    <div style={styles.slide}>
                        {/*{this.renderMaterialList()}*/}
                    </div>
                </SwipeableViews><br/><br/>

                <LogoutButton />
            </div>
        )
    }
}