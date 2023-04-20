import '../Dashboard/Dashboard.scss';
import DashboardSection from '../Dashboard/DashboardSection';
import Options from './GamesSearchBar'
import './Journal.scss'
import { useEffect} from 'react';
import { getHealthData} from '../../Store/Actions/JournalAction.js';
import { connect } from 'react-redux';

const mapDisptchToProps = (dispatch) => {
    return {
      getHealthData : (uuid) => dispatch(getHealthData(uuid)),
    }
  } 

  const mapStateToProps = (state) => {
    return {
        healthData: state.Journal.healthData,
        currentUserDetails: state.Login.currentUserDetails,
    }
}

const Journal = (props) => {

    useEffect(() => {
        props.getHealthData(props.currentUserDetails.uuid)
      },[]); 
    
    return(
     
       <div id="dashboard-main" className='journal-div dashboard-main'>
         <h1>
About US 
</h1>
<h4>
Eventbrite is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives. From music festivals, marathons, conferences, community rallies, and fundraisers, to gaming competitions and air guitar contests.
 Our mission is to bring the world together through live experiences.
</h4>
        {/* <DashboardSection title="MY FITNESS JOURNAL"  
        content = {<Options options={props.healthData}/>}
        /> */}
    </div>
    );
}

export default connect(mapStateToProps, mapDisptchToProps)(Journal);
