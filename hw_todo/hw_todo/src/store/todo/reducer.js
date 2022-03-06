import clone from 'ramda/src/clone'

import { actions, setList } from './action'

const initState = { lists: {} }

const SetList = (state, payload) => {
    const newState = clone(state)
    newState.lists[payload.id] = payload
    return newState
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_LIST: return setList(state, action.payload)
        default: return state 
    }
}

export {reducer} 