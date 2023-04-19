import './Dashboard.scss';
import DashboardSection from './DashboardSection';
import ActivitySlider from './ActivitySlider';
import { Grid } from '@mui/material';
import Leaderboard from '../Leaderboard/Leaderboard';
import { getActivityStatsForUser } from '../../Store/Actions/DashboardAction';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import Concerts from '../../Assets/Images/concerts-quote.jpeg';
import { MessageDisplay } from '../../components/MessageDisplay/MessageDisplay';

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin : (user) => dispatch(getActivityStatsForUser(user)),
        getActivityStatsForUser: (userDetails, timeline,required) => dispatch(getActivityStatsForUser(userDetails, timeline, required))
    }
}

const mapStateToProps = (state) => {
    return {
        exercise : state.Dashboard.exercise,
        health: state.Dashboard.health,
        leaderboard: state.Dashboard.leaderboard,
        currentUserDetails: state.Login.currentUserDetails,
        isLoading: state?.Loader?.showLoader
    }
}



const Dashboard = (props) => {

    const [loader, setLoader] = useState(false);

    useEffect(() => {
    setLoader(true)
    getActivityStats();
    setLoader(false);
    },[]);

    const getActivityStats = async()=>{
        await props.getActivityStatsForUser(props.currentUserDetails.uuid?props.currentUserDetails.uuid:"-1");

    }

    const onClickOfExerciseTimeline =async(timeline)=>{
        setLoader(true)
        await props.getActivityStatsForUser(props.currentUserDetails.uuid?props.currentUserDetails.uuid:"-1",timeline,"exercise");
        setLoader(false);
    }
    const onClickOfLeaderboardTimeline =async(timeline)=>{
        await props.getActivityStatsForUser(props.currentUserDetails.uuid?props.currentUserDetails.uuid:"-1",timeline,"leaderboard");
    }
    
    return(
    <div id="dashboard-main" className='dashboard-main'>
        <DashboardSection title="Concerts" selector={props.exercise.length>0?true:false} onClickOfTimeline={onClickOfExerciseTimeline} content={
            props.exercise.length<1?
            <MessageDisplay link={"/events"} message={[<u>Click here</u>," To Go To You Favourite Pop Stars Concert."]}/>:
            <ActivitySlider activities={props.exercise} loader={loader} category={"concerts"}/>
           
            
        }/>
         <img src="https://yonamariemusic.com/blog/image/blog_image/192/xxxlarge/crop=2:1/_v=ee4a11639538278"/>
    <p><b>
     Life Is Too Short. Buy Those Tickets To The Concert You've Been Waiting To Go For So Long.</b><br></br>We've Made Your Life Easy By Curating A List Of Concerts Happening In Your Country.
     All You Have To Do Is Just Click On The Concert You Are Interested In Going And Book Those Tickets. You Don't Have To Browse Different Websites To Browse.
     </p>
  
  

        <Grid className='divider'></Grid>

        <DashboardSection title="Theatre" selector={props.leaderboard.length>0?true:false} onClickOfTimeline={onClickOfLeaderboardTimeline} content={
            props.leaderboard.length<1?
            <MessageDisplay link={"/journal"} message={[<u>Click Here</u>, " To Book Your Tickets For Some Theatre Performances"]}/>:
          <Leaderboard activities={props.leaderboard} loader={loader} /> }/>

<img src="https://res.cloudinary.com/dv3qcy9ay/image/upload/c_fill,f_auto,g_auto,h_400,q_90,w_800/v1/2022/Prod_TSG/PRESS/PHOTOS/Production%20Photos/SECRET_GARDEN_S_0388.jpg"/>
<p>
    <b>Want To Be Mesmerized By Some Performances? Then Going To A Theatre Performance Is The Best Choice. Booking Your Tickets Is Just One Click Away.</b><br>
    </br>Theatre  is a collaborative form of performing art that uses live performers, usually actors or actresses, to present the experience of a real or imagined event before a live audience in a specific place, often a stage. The performers may communicate this experience to the audience through combinations of gesture, speech, song, music, and dance.
    </p>
        <Grid className='divider'></Grid>
        
        <DashboardSection title="Movies" selector={props.health.length>0?true:false} onClickOfTimeline={onClickOfExerciseTimeline} content={
            props.health.length<1?
            <MessageDisplay link={"/"} message={" In Your Nearest Theatres Coming soon"}/>:
            <ActivitySlider activities={props.health} loader={loader} category={"Movies"}/>
        }/>
        <img src="https://insidethemagic.net/wp-content/uploads/2021/05/disney-plus-movie-posters-800x400.png"/>
    </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
