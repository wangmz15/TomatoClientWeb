import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
}

/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */
const styles = {
    selectTeam: {
        width: "100%",
        textAlign:'center',
        // marginLeft:"15%",
    },
    // label:{
    //     fontSize:13,textAlign:'center',
    // },
    // menuItem:{
    //     fontSize:13, width:"15%",
    // },
    floatingLabelStyle:{
        textAlign:'center',
        fontSize:13
    },
};

export default class SelectTeam extends Component {
    state = {
        value: null,
    };


    handleChange = (event, index, value) => {
        this.setState({value});
    };

    render() {
        return (
        <SelectField
            style={styles.selectTeam}
            value={this.state.value}
            onChange={this.handleChange}
            // floatingLabelText="队伍ID"
            maxHeight={200}
            // floatingLabelStyle = {this.floatingLabelStyle}
            // floatingLabelStyle={{textAlign: 'left',fontSize:10}}
            >
            {items}
        </SelectField>
        );
    }
}