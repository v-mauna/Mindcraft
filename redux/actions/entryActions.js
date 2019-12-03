import axios from 'axios';
import saveSettings from '../../components/storage/entryStorage'

// export const createdEntry= (entry) => ({type: GET_USER, entry})

export const createEntry = (userId, entry) => {
    console.log("Id: ", userId, "entry: ", entry)
    return async dispatch =>{
      const res= await axios.post(`https://mindcraft-api.herokuapp.com/api/entries/${userId}`, entry)
    
      saveSettings(res.data[1][0])
    }
    }