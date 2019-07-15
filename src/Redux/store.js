import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'

const reducer = (prevState={
	crossborderList:[]
},action)=>{
	let{ type,payload} = action;
	let newState = {...prevState};
	switch(type){
		case 'updateCrossborderList' :
			newState.crossborderList = payload;
			break;
		default:
			return prevState;
	}
//	console.log(newState.crossborderList)
	return newState;
}

const store = createStore(reducer,applyMiddleware(promiseMiddleware));
export default store;
