import { combineReducers } from 'redux'
import customer, * as fromCustomer from './Customer'
// noinspection JSAnnotator
// import container from './Containers'
import { reducer as formReducer } from 'redux-form'
import property from "./Property";

export default combineReducers({//作为入口 把所有的reducer 绑在一起
  customer,
  property,

})

//相当于
//export const isActive(state){
//    return fromCustomer.isActive(state.customer)
    //// fromCustomer 是reducers/customer.js里的函数
//}