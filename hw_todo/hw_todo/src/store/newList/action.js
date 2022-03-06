import { BASE_URL } from "../../utils/constants"
import { titleToPath } from "./utils"
import { setList } from "../todo/action"

const actions = Object.freeze({
    SET_NEW_LIST: 'newList/set',
    VISIBLE: 'newList/visible',
    HIDDEN: 'newList/hidden',
    TOGGLE: 'newList/toggle',
})
// Зачем эта часть выше?  

const setNewList = (payload) => ({ type: actions.SET_NEW_LIST, payload}) 
const visible = () => ({ type: actions.VISIBLE}) 
const hidden = () => ({ type: actions.HIDDEN}) 
const toggle = () => ({ type: actions.TOGGLE}) 

const saveNewList = () => (dispatch, getState) =>  { 
    const clearValue = getState().newList.value.trim()
    const newList = {
        title: clearValue,
        path: '/' + titleToPath(clearValue),
    }
    
    fetch(`${BASE_URL}/lists.json`, {
        method: "POST" , 
        body: JSON.stringify(newList)
    })
    .then(res => res.json())
    .then((data) => {
        newList.id = data.name;
        dispatch(setList(newList))
    })
}

export { actions, visible, setNewList, hidden, toggle, saveNewList }