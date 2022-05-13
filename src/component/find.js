import {useEffect} from 'react'
import { connect } from 'react-redux';
import {findALLEntries} from '../action/actionfunction'
function View(props)
{
    useEffect(() => {
        props.mydispatch(findALLEntries())
       
    }, [])
    return <>
     <div style={{position:'relative',left:100}}>
             <h1>view all </h1>
    <ul>
        {
            props.data.map((e)=>{
                return <li>
                    {e.seatNo} {e.seatType} { e.floor}
                    {e.location} {e.office}
                </li>
            })
        }
    </ul>
    </div>
    </> 
}
const mapDispatchToProps=dispatch=>({
    mydispatch:dispatch
})
const mapStateToProps=state=>({
    data:state
})

export default connect(mapStateToProps,mapDispatchToProps)(View)