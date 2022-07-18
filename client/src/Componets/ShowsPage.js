import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedShow,
  removeSelectedShow,
} from "../actions/showActions";

const ShowsPage = () => {
  const {showId} = useParams();
  let show = useSelector((state) => state.show);
  const { name, image, show_tags, show_season, show_episode, show_comment } = show;
  const dispatch = useDispatch();
  console.log(show);
  const fetchShowPage = async (id) => {
    const response = await axios
      .get(`http://localhost:3000/shows/${showId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedShow(response.data));
  };

  useEffect(() => {
    if (showId && showId !== "") fetchShowPage(showId);
    return () => {
      dispatch(removeSelectedShow());
    };
  }, [showId]);
  return (
    <div className="ui grid container">
      {Object.keys(show).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div className="show-page-container">
            <div className="show-page-container-inner">
              <div className="show-page-details">
              <h2>{name}</h2>
                 <img src={image} alt={name} title={name} />
                 <h3>  SEASON {show_season} EPISODE {show_episode}</h3>
                 <div className="show-page-comment">
                 <p>{show_comment}</p>
                 </div>
                </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ShowsPage;