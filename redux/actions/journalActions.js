import {GET_ALL_ENTRIES, GET_ONE_ENTRY,DELETE_ENTRY,CREATE_ENTRY} from './types'
import saveSettings from '../../components/storage/entryStorage'
import axios from 'axios'

const initialState = {
    entries: []
}
export const getAllEntries = entries => ({
    type: GET_ALL_ENTRIES,
    entries
})

export const getOneEntry = entry => ({
    type: GET_ONE_ENTRY,
    entry
})

export const deleteEntry = id => ({
    type: DELETE_ENTRY,
    id
})

export const createEntry = newEntry =>({
    type: CREATE_ENTRY,
    newEntry
})

//Thunks

export const gotAllEntries = userId => async dispatch => {
    try{
        let response = await fetch(`http://mindcraft-api.herokuapp.com/api/entries/user/${userId}`)
        response = await response.json()
        dispatch(getAllEntries(response))
    }catch(error){
    console.error(`Your error is:`,error)
    }
}

export const gotOneEntry = (userId, entryId) => async dispatch => {
    try{
        let response = await fetch(`https://mindcraft-api.herokuapp.com/api/entries/user/${userId}/${entryId}`)
        response = await response.json()
        dispatch(getOneEntry(response))
    }catch(error){
        console.error(`Your error is: `, error)
    }
}

export const createdEntry = (userId, entry) => {
    return async dispatch =>{
      const res= await axios.post(`https://mindcraft-api.herokuapp.com/api/entries/user/${userId}`, entry)
      saveSettings(res.data)
    }
    }