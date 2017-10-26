import React from 'react';
import History from 'material-ui/svg-icons/action/history';
import Favorite from 'material-ui/svg-icons/action/favorite-border';
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";
// import Extension from 'material-ui/svg-icons/action/extension';
// import Store from 'material-ui/svg-icons/action/store';
import SwipeableViews from 'react-swipeable-views';
import {
    BottomNavigation, BottomNavigationItem, Paper, Subheader, Table, TableBody, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui";



const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    table:{
        // textAlign:"left",
        textAlign:"center",
    },
    tableCell:{
        fontSize: 11,
        textAlign:"center",
        padding:0,
        // paddingLeft:0,
    },
    slide: {
        // padding: ,
    },
};

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
            <Table style={styles.table} displaySelectAll={false}>
                <TableHeader displaySelectAll={false}
                             adjustForCheckbox={false}
                >
                    <TableRow>
                        <TableHeaderColumn style={styles.tableCell}>时间</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableCell}>队伍</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableCell}>详情</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableCell}>数量</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableCell}>价格</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableCell}>结果</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn style={styles.tableCell}>11:23</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>Rua</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>卖出砖块</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>2</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>2</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>成功</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn style={styles.tableCell}>11:45</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>华莱士</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>卖出机器</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>1</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>2</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>失败</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn style={styles.tableCell}>12:01</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>小新闻</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>买进木材</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>1</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>2</TableRowColumn>
                        <TableRowColumn style={styles.tableCell}>成功</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
            // <Table
            //     displaySelectAll={false}
            //     // onRowSelection={this.handleRowSelection}
            // >
            //     <TableBody displayRowCheckbox={false}>
            //         <Subheader>可选头像</Subheader>
            //         <TableRow selected={this.selected(1)}><ListItem
            //             value = {1}
            //             primaryText="你是魔鬼吗"
            //             leftAvatar={<Avatar src={img1} />}
            //         /></TableRow>
            //         <TableRow selected={this.selected(2)}><ListItem
            //             value = {2}
            //             primaryText="你是魔鬼吗2"
            //             leftAvatar={<Avatar src={img2} />}
            //         /></TableRow>
            //         <TableRow selected={this.selected(3)}><ListItem
            //             value = {3}
            //             primaryText="苗子"
            //             leftAvatar={<Avatar src={img3} />}
            //         /></TableRow>
            //     </TableBody>
            //
            // </Table>
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