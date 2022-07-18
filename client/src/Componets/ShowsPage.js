import  { useState, useEffect} from 'react';
import axios from 'axios';
import "../App.css"
import { useDispatch, useSelector } from 'react-redux';
import { addShows } from '../reducers/showSlice'
import { useParams } from 'react-router-dom';
import { setShows } from '../actions/showActions';




const ShowsPage = () => {
    const shows = useSelector((state) => state.allShows.shows);
    const dispatch = useDispatch();
    const fetchShows = async () => {
      const response = await axios
        .get("http://localhost:3000/shows")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setShows(response.data));
    };
  
    useEffect(() => {
      fetchShows();
    }, []);
  
    console.log("Shows :", shows);
    return (
    
        <div className="showsPage">
            <h1>Shows</h1>
            
           

        </div>

        )
    }
    export default ShowsPage;





// const ShowsPage = () => {
//     const dispatch = useDispatch()

//     useEffect(() => {
//         const fetchShows = async () => {
//             const res = await axios.get('http://localhost:3000/shows/')
//             .catch((error) =>  {
//                 console.log(error);
//             });
//          dispatch(addShows(res.data));
//         };
        
//         fetchShows();
//     }, [])
//     return (
//         <div></div>
//         )
//     }
//     export default ShowsPage;



    // const ShowsPage = () => {
    //     const dispatch = useDispatch();
    
    //     useEffect(() => {
    //         const fetchShows = async () => {
    //             const response = await axios.get('http://localhost:3000/shows/')
    //              .catch((err) => {
    //             console.log("Err:", err);
    //         });
    //         console.log("resp", response);
    //         // .then(res =>  dispatch(addShows(res.data)))
    //     };
    //     });
    //     return (
    //         <div></div>
    //     )
    //     }
    // export default ShowsPage;
       