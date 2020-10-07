var redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore 
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM =  'BUY_ICECREAM';
function buycake(){
    return{
        type:BUY_CAKE,
        info: 'First redux action'
    }
}
function buyicecream(){
    return{
        type:BUY_ICECREAM,
        info: 'First redux action'
    }
}
// (previousState,action)=>newState
// const intialState ={
//     numOfCakes:10,
//     numOfIcecreams:10
// }
const intialIcecreamState ={
    numOfIcecreams:10
}
const intialCakeState ={
    numOfCakes:10
}
// const reducer = (state=intialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:return{
//             ...state,
//             numOfCakes:state.numOfCakes -1
//         }
//         case BUY_ICECREAM:return{
//             ...state,
//             numOfIcecreams:state.numOfIcecreams -1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state=intialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes -1
        }
        default: return state
    }
}
const icecreamReducer = (state=intialIcecreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIcecreams:state.numOfIcecreams -1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecreamReducer:icecreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('intialstate',store.getState())
const unsubscribe = store.subscribe(()=>{
    // console.log('update state',store.getState())
})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe();