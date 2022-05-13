import { ADDENTRY, UPDATEENTRY, FINDENTRY, FINDALLENTRIES, DELETEENTRY } from "./action";
import axios from 'axios'
export function addEntry(obj) {
    axios.post('http://localhost:9091/addseat', obj)
        .then((res) => {
            console.log(res.data)

        })




    return (dispatch) => {
        return axios.get("http://localhost:9091/findAll")
            .then((res) => {
                return res.data
            }).then(data => {
                dispatch({
                    type: ADDENTRY,
                    payload: data
                })
            })
            .catch(err => {
                throw (err)
            })
    }
}

export function updateEntry(obj) {
    return {
        type: UPDATEENTRY,
        payload: obj
    }
}

export function findEntry(id) {
    return {
        type: FINDENTRY,
        payload: id
    }
}


export function findALLEntries() {
    return (dispatch) => {
        return axios.get("http://localhost:9091/findAll")
            .then((res) => {
                return res.data
            }).then(data => {
                dispatch({
                    type: FINDALLENTRIES,
                    payload: data
                })
            })
            .catch(err => {
                throw (err)
            })
    }
}


export function deleteEntry(id) {
    return {
        type: DELETEENTRY,
        payload: id
    }
}





