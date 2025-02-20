import React, { useState, 
useEffect } from "react";
import PropTypes from 'prop-types';
import { Button, Modal, Input } from 'antd';


function Addmovies(props) {
  const [movieDetails, setMovieDetails] = useState({
    movie_id: 0,
    title: "",
    description: "",
    posterurl: "",
    rating: "",
  })
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (movieDetails.title.trim().length < 2) {
      return alert("Please, Provide a valid Movie Title")
    }

    if (movieDetails.description.trim().length < 4) {
      return alert("Please, describe Movie")
    }

    const randomId = Math.floor(Math.random() * 9999999);

    props.setMovies((prev) => [{...movieDetails, movie_id: randomId}, ...prev])

    const movieToStore = JSON.parse(localStorage.getItem("user_movies")) === null ? [{...movieDetails, movie_id: randomId}] : [...JSON.parse(localStorage.getItem("user_movies")), {...movieDetails, movie_id: randomId}];

    localStorage.setItem("user_movies", JSON.stringify(movieToStore));

    setMovieDetails({
      movie_id: 0,
      title: "",
      description: "",
      posterurl: "",
      rating: "",
    });

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

 return (
  <>
    <Button className="ml-[4rem] mt-5" type="primary" onClick={showModal}>
        Add New Movie
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="grid gap-4">
          <Input onChange={(e) => {setMovieDetails({...movieDetails, title: e.target.value})}} value={movieDetails.title} placeholder="Movie Title" size="large" type="text"/>

          <Input onChange={(e) => {setMovieDetails({...movieDetails, posterurl: e.target.value})}} value={movieDetails.posterurl} placeholder="Movie url" size="large" type="text"/>

          <Input onChange={(e) => {setMovieDetails({...movieDetails, description: e.target.value})}} value={movieDetails.description} placeholder="Movie Description" size="large" type="text"/>

          <Input onChange={(e) => {setMovieDetails({...movieDetails, rating: e.target.value})}} value={movieDetails.rating} placeholder="Movie Rating" size="large" type="text"/>
        </div>
      </Modal>
  </>
 );
}

export default Addmovies;

Addmovies.propTypes = {
  setMovies: PropTypes.func,
  movies: PropTypes.array,
}