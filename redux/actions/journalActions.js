import {GET_ALL_ENTRIES, GET_ONE_ENTRY,DELETE_ENTRY,CREATE_ENTRY} from './types'
import saveSettings from '../../components/storage/entryStorage'

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

export const createdEntry = (userId,mood, favorite,leastFavorite,hoursSlept,entry) => async dispatch => {
    try{
        let response = await fetch(`https://mindcraft-api.herokuapp.com/api/entries/user/${userId}/`, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            mood: mood,
            favorite: favorite,
            least: leastFavorite,
            hoursSlept: hoursSlept,
            entry: entry
            })
        }
        )
        response = await response.json()
        dispatch(createEntry(response))
        }catch(error){
            console.error('Error is: ', error)
        }
    }