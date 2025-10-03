import { useContext, useState } from "react";
import Incident from "./Incident"
import styles from "./IncidentList.module.css"
import ThemeContext from "./ThemeContext";

function IncidentList({incidents,onAdd,handleDelete}){

    const theme = useContext(ThemeContext);
    const incidentListClass = `${styles.incidentList} ${theme === 'dark' ? styles.dark : ''}`;
    
     const [form,setForm]=useState({
        incident_id:"",
        priority:"low",
        severity:"1-Critical",
        status:"open"
     })
     function handleChange(e){
        const {name,value}=e.target;
        setForm(prev => ({...prev,[name]:value}));
     }
     function handleSubmit(e){
        e.preventDefault();
        onAdd(form)
        // setForm({incId:"",priority:"low",severity:"1",status:"open"})
     }
 
    return(
        
        <div className={styles.incidentList}>

            
                <form onSubmit={handleSubmit}>
                    <label for="incident_id">Incident ID:
                    <input type="text" id="incident_id" name="incident_id" placeholder="Enter Incident ID" onChange={handleChange} />
                    </label>
                    <label for="priority">Priority:
                    <select id="priority" name="priority" onChange={handleChange}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                    </label>
                    <label for="severity">Severity:
                    <select id="severity" name="severity" onChange={handleChange}>
                        <option value="1 - Critical">1 - Critical</option>
                        <option value="2 - High">2 - High</option>
                        <option value="3 - Low">3 - Low</option>
                    </select>
                    </label>
                    <label for="status">Status:
                    <select id="status" name="status" onChange={handleChange}>
                        <option value="Open">Open</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                    </select>
                    </label>
                    <button type="submit">Save</button>
                </form>
               <div className={incidentListClass}>
                {incidents.map((incident)=> <Incident key = {incident.incident_id} incident={incident} handleClick={() => handleDelete(incident.incident_id)}/> )}
               </div>

        </div>
        
        
    )
}

export default IncidentList;