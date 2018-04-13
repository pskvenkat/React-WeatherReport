import { FETCH_WEATHER } from '../actions/index';   

export default function (state = [], action) {
    switch (action.type) {
        case 'FETCH_WEATHER':
        return [ action.payload.data, ...state ]
        //return state.push([action.payload.data]);
    }
    
    return state;
    console.log("state in action" ,state)
}
