import React from "react";
import { Card } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router";
const { Meta } = Card;


function MovieCards(props) {

  
 return (
  <>
   <section className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
     <Link to={"/movies/description"}>
     <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={props.posterurl}/>}
  >
    <Meta title={props.title} description={
     <div>
      <p>{props.description}</p>
      <p>{props.rating}</p>
     </div>
    } />
  </Card>
    </Link>
     
   </section>
  </>
 );
}

export default MovieCards;

MovieCards.propTypes = {
 title: PropTypes.string,
 description: PropTypes.string,
 posterurl: PropTypes.string,
 rating: PropTypes.string,
}