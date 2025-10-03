       import { useContext, useReducer, useState } from 'react';
import style from './Home.module.css';
import IncidentList from "./IncidentList"
import Welcome from './Welcome';
import data from '../incidents.json'
import ThemeContext from './ThemeContext';
import {Routes , Route , Link} from "react-router-dom"




function Home({toggleDarkMode}) {
         const [PageContent,setPageContent]=useState("Home");
        //  const [incidents,setIncidents]=useState(data);
         const [incidents,dispatch]=useReducer(incidentReducer,data);
         const theme = useContext(ThemeContext);
      //   const homeclass = `${style.Home} ${theme === 'dark' ? style.dark: ''}`;

        function handleClick(e){
          setPageContent(e.target.innerText)
        }
           
        function incidentReducer(state,action){
          switch(action.type){
            case 'add' :
              return [...state,action.payload]
            case 'delete' :
              return state.filter(incident => incident.incident_id !== action.payload);
            default:
              return state;
          }
          
        }
         
        function handleDelete(id){
          dispatch({type:'delete',payload:id})
                //  setIncidents(incidents => incidents.filter(incident => incident.incident_id !== id));
         }

         function handleAdd(newIncident){
          dispatch({type:'add',payload:newIncident})
            // setIncidents(incidents => [...incidents,newIncident])
          // setIncidents(incidents => [...incidents, {incident_id: newIncident.incId, priority: newIncident.priority, severity: newIncident.severity, status: newIncident.status}]);
         }

         
        
        const user = {

          Prefix:"Mr.",
          LastName:"Ravi Teja Reddy" ,
          time : "7:00 PM"
        }
    return (
        <div className={theme === "dark" ?style.dark :style.light}>
         <header className={style.header}>
           <h1>Welcome {user.Prefix} {user.LastName} !</h1>
           <p>Time  since last incident : {user.time}</p>

           <ul>
            <li><Link to="/" onClick={handleClick}>Home</Link></li>
            <li><Link to="/incidents" onClick={handleClick}>Incidents</Link></li>

           </ul>

           <button onClick={toggleDarkMode}>{theme}</button>
         </header>


       {/* { PageContent==="Home" ? <Welcome /> : <IncidentList incidents={incidents} onAdd={handleAdd} handleDelete={handleDelete} />} */}

         
         <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='incidents' element={<IncidentList incidents={incidents} onAdd={handleAdd} handleDelete={handleDelete} />}/>
         </Routes>


        </div>
    )
}
export default Home;
