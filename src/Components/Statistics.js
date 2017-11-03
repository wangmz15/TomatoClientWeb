import React from 'react';
import History from 'material-ui/svg-icons/action/history';
import Favorite from 'material-ui/svg-icons/action/favorite-border';
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";
import SwipeableViews from 'react-swipeable-views';
import {
    BottomNavigation, BottomNavigationItem, Paper, Table, TableBody, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui";
import SellerDialog from "./SellerDialog";

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
        this.state ={
            selectedIndex:0
        }
    };
    componentWillMount(){
        this.props.getHistoryList(this.props.id).then(()=>{});
    }
    select = (index) => {
        this.setState({selectedIndex: index});
    };
    renderDetails=(item)=>{
        let ans = '';
        item.action === 'sell'? ans ='卖出':ans = '买入';
        switch(item.content){
            case 'wood':
                ans += '木头';
                break;
            case 'brick':
                ans += '砖头';
                break;
            case 'cement':
                ans += '水泥';
                break;
            default :
                ans += '机器';
                ans += item.content;
        }
        return(ans);
    };

    renderStatus(item){
        switch(item.status){
            case 1:
                return("成功");
            case 0:
                return("正在进行");
            case -1:
                return("失败");
            default :
                return('');
        }
    }


    renderHistoryList = () =>{
        return(this.props.historyList.map(item => {
        return(
            <TableRow key={item.time}>
                <TableRowColumn style={styles.tableCell}>{item.time}</TableRowColumn>
                <TableRowColumn style={styles.tableCell}>{item.target}</TableRowColumn>
                <TableRowColumn style={styles.tableCell}>{this.renderDetails(item)}</TableRowColumn>
                <TableRowColumn style={styles.tableCell}>{item.number}</TableRowColumn>
                <TableRowColumn style={styles.tableCell}>{item.price}</TableRowColumn>
                <TableRowColumn style={styles.tableCell}>{this.renderStatus(item)}</TableRowColumn>
            </TableRow>
        );
    }));
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
                        <TableHeaderColumn style={styles.tableCell}>状态</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.renderHistoryList()}
                </TableBody>
            </Table>
        );
    };

    render(){
        return(
            <div>
                <MyAppBarAndDrawer text = {'统计'}/>

                <SellerDialog/>

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