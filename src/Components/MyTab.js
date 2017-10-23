import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Extension from 'material-ui/svg-icons/action/extension';
import Store from 'material-ui/svg-icons/action/store';
import SwipeableViews from 'react-swipeable-views';


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

export default class MyTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                    <Tab  value={0} icon={<Extension />} label="材料"/>
                    <Tab  value={1} icon={<Store />} label="机器"/>
                </Tabs>

                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}>
                    <div style={styles.slide}>
                        <h1>材料</h1>
                    </div>
                    <div style={styles.slide}>
                        <h1>机器</h1>
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}




//
// export default class MyTab extends React.Component{
//     render(){
//         return(
//         <Tabs>
//             <Tab icon={<Extension />} label="材料">
//                 <div>
//                     <h2 style={styles.headline}>Controllable Tab A</h2>
//                     <p>
//                         Tabs are also controllable if you want to programmatically pass them their values.
//                         This allows for more functionality in Tabs such as not
//                         having any Tab selected or assigning them different values.
//                     </p>
//                 </div>
//             </Tab>
//
//
//             <Tab icon={<Store/>} label="机器">
//                 <div>
//                     <h2 style={styles.headline}>Controllable Tab B</h2>
//                     <p>
//                         This is another example of a controllable tab. Remember, if you
//                         use controllable Tabs, you need to give all of your tabs values or else
//                         you wont be able to select them.
//                     </p>
//                 </div>
//             </Tab>
//         </Tabs>
//             <SwipeableViews
//                 index={this.state.slideIndex}
//         onChangeIndex={this.handleChange}
//     >
//     <div>
//         <h2 style={styles.headline}>Tabs with slide effect</h2>
//         Swipe to see the next slide.<br />
//         </div>
//         <div style={styles.slide}>
//             slide n°2
//         </div>
//         <div style={styles.slide}>
//         slide n°3
//         </div>
//     </SwipeableViews>
//     </div>
//
//         )
//     }
// }
//
