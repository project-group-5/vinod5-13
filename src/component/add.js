import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import { addEntry } from '../action/actionfunction'
import { findALLEntries } from '../action/actionfunction'

function AddEntries(props) {

    const [seatNo, setSeatNo] = useState(0)
    const [seatType, setSeatType] = useState('')
    const [floor, setFloor] = useState(0)
    const [office, setOffice] = useState('')
    
    const [location, setLocation] = useState('')
    const [seatNoerr, setSeatNoErr] = useState('')
    const [seatTypeerr, setSeatTypeErr] = useState('')
    const [floorerr, setFloorErr] = useState(' ')
    const [officeerr, setOfficeErr] = useState('')
    
    const [locationerr, setLocationErr] = useState('')
    useEffect(() => {
        props.mydispatch(findALLEntries())
    }, [])


    return (
        
        <>
        <div style={{position:'relative',left:100}}>
            <h1>Add entry</h1>
            
            <form onSubmit={(e) => {
                e.preventDefault()
                var seat = {
                    "seatNo": seatNo,
                    "seatType": seatType,
                    "floor": floor,
                    
                    "location": location,
                    "office": office,
                }
                props.mydispatch(addEntry(seat))
                console.log(seat)

            }}>
                Enter SeatNo <br />
                <input type='text' onChange={(e) => {
                    if (e.target.value == 0) {

                        setSeatNoErr("Seat No Cannot be null")
                    }
                    else {
                        setSeatNo(e.target.value)
                        setSeatNoErr('')
                    }
                }} /><br />
                <div style={{ backgroundColor: "red" }}>
                    {seatNoerr}
                </div><br />

                Enter SeatType<br />
                <input type='text' onChange={(e) => {
                    if (e.target.value == 0) {
                        setSeatTypeErr("SeatType Cannot be null")
                    }
                    else {
                        setSeatType(e.target.value)
                        setSeatTypeErr('')
                    }
                }} /><br />
                <div style={{ backgroundColor: "red" }}>
                    {seatTypeerr}
                </div><br />
                
               
               

                Enter Floor No<br />
                <input type='text' onChange={(e) => {
                    if (e.target.value > 100) {
                        setFloorErr("Seat Cannot be booked")
                    }
                    else {
                        setFloor(e.target.value)
                        setFloorErr('')
                    }
                }} /><br />
                <div style={{ backgroundColor: "red" }}>
                    {floorerr}
                </div><br />
                Enter Office <br />
                <input type='text' onChange={(e) => {
                    if (e.target.value == 0) {
                        setOfficeErr("Seat Cannot be booked")
                    }
                    else {

                        setOffice(e.target.value)
                        setOfficeErr('')
                    }
                }} /><br />
                <div style={{ backgroundColor: "red" }}>
                    {officeerr}
                </div><br />
                Enter Location<br />
                <input type='text' onChange={(e) => {
                    if (e.target.value == " ") {
                        setLocationErr("Seat Cannot be booked")
                    }
                    else {
                        setLocation(e.target.value)
                        setLocationErr('')
                    }
                }} /><br />
                <div style={{ backgroundColor: "red" }}>
                    {locationerr}
                </div><br />

                <input type='submit' value='Add Seat' />
            </form><br />
            
            </div> 
            
        </>
        )
}

const mapDispatchToProps = dispatch => ({
    mydispatch: dispatch
})

const mapStateToProps = state => ({
    data: state
})


export default connect(mapStateToProps, mapDispatchToProps)(AddEntries) 