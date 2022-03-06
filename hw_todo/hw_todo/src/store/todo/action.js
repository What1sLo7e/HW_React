const actions = Object.freeze({
    SET_LIST: 'todo/setList'
})

const setList = (payload) => ({
    type: actions.SET_LIST,
    payload,
})
 
export { actions, setList }