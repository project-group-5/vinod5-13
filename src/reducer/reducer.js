import { ADDENTRY, UPDATEENTRY, FINDENTRY, FINDALLENTRIES, DELETEENTRY, LOGINOP } from "../action/action"
import axios from 'axios'
import { addEntry } from "../action/actionfunction"
import { findALLEntries } from "../action/actionfunction"



const reducer = (state=[], action) => {

    switch (action.type) {
        case ADDENTRY:
            
                
        state=[...action.payload]
             
            return state

        case UPDATEENTRY:
            axios.patch('http://localhost:9091/updateSeat',action.payload).then(
                (res)=>{console.log(res.data)})
                state='updated'
            return state
        case FINDENTRY:
            
            
            return state
        case FINDALLENTRIES:
            
            state= [...action.payload]
           return state
        case DELETEENTRY:
            axios.delete(`http://localhost:9091/deleteSeat/${action.payload}`).then(
                (res)=>{console.log(res.data)}
            )
            state="entry deleted for id" + action.payload
            
            return state
       
        default:
            return state
    }

}


export default reducer