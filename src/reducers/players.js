import Immutable from 'immutable'

const { List } = Immutable;

const init = List();

/**
 * Players reducer - analysing the type of action and generate the new state of players
 *
 * @param state
 * @param action
 */
export default function players(state = init, action){
    if(action.type === "SET_INITIAL_RATINGS"){
        //Load the new player's name
        return List(action.players);
    }
    return state;
}

