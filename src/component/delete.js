import {useState} from 'react'
import { deleteEntry } from '../action/actionfunction'
import {connect} from 'react-redux'

function Delete(props)
{
    const[seatId,setSeatId]=useState('')
    const[seatIdErr,setSeatIdErr]=useState('')
    return (<>
     <div style={{position:'relative',left:100}}>
        <h1>delete entry</h1>
        <form onSubmit={(e) => {
                e.preventDefault()
                var seat = {
                    "seatId": seatId,
                    
                }
                props.mydispatch(deleteEntry(seat))    
                
                console.log(seat)

            }}>
                enter seatid<br/>
                <input type='text' onChange={(e) => {
                    if (e.target.value == 0) {

                        setSeatIdErr("Id not available")
                    }
                    else {
                        setSeatId(e.target.value)
                        setSeatIdErr('')
                    }
                }} /><br />
                <div style={{ backgroundColor: "red" }}>
                    {seatIdErr}
                </div><br />
              <input type='button' value='Delete' onClick={()=>{
                  props.mydispatch(deleteEntry(seatId))
              }}/>
             
              
            </form>
    </div>
    
    </>)
}
const mapDispatchToProps = dispatch => ({
    mydispatch: dispatch
})

const mapStateToProps = state => ({
    data: state
})


export default connect(mapStateToProps, mapDispatchToProps)(Delete)