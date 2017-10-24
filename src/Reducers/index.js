import { combineReducers } from 'redux'
import customer, * as fromCustomer from './Customer'
import propertyList from "./PropertyList";

export default combineReducers({//作为入口 把所有的reducer 绑在一起
  customer,
  propertyList,
})