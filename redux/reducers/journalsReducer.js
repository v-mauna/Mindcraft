import {GET_ALL_ENTRIES, GET_ONE_ENTRY,DELETE_ENTRY,CREATE_ENTRY} from '../actions/types'

const journalsInitialState = {
    journals: []
}

const oneJournalInitialState = {
    oneJournal: {}
}

export const journalsReducer = (state=journalsInitialState, action)=>{
    switch(action.type){
        case GET_ALL_ENTRIES: {
            return {...state, journals: action.entries}
        }
        case CREATE_ENTRY: {
            return {...state, journals: [...state.journals,action.newEntry]}
        }
        default: 
            return state
        
    }
}

export const oneJournalReducer = (state=oneJournalInitialState, action)=>{
    switch(action.type){
        case GET_ONE_ENTRY: {
            return {...state, journal: action.entry}
        }
        default: 
            return state
        
    }
}