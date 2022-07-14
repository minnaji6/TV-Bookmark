import  { useState, useEffect} from 'react';
import axios from 'axios';
import "../App.css"
import { useDispatch } from 'react-redux';
import { addShows } from '../reducers/showSlice'



const ShowsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3000/shows/')
        .then(res =>  dispatch(addShows(res.data)))
    }, [])
    return (
        <div></div>
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
       