import { combineReducers } from 'redux'
import customer from './Customer'
import propertyList from "./PropertyList";
import statistics from "./Statistics";

export default combineReducers({//作为入口 把所有的reducer 绑在一起
  customer,
  propertyList, statistics,
})