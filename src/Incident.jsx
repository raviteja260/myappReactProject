import styles from "./Incident.module.css"
import {Button} from '@mui/material'


function Incident({incident,handleClick}){
     const {incident_id,priority,severity,status}=incident
    return(
        <>
        <div className={styles.incidentCard}>
            <p>{incident_id}</p>
            <p>{priority}</p>
            <p>{severity}</p>
            <p>{status}</p>

            <Button sx={{mt:'20px',borderRadius:'30px',border:'solid black 1px',backgroundColor:'red',color:'black'}} varient="contained" color='error' onClick={handleClick}>Delete</Button>

        </div>
        </>
    )
}
export default Incident;