import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const SingleCard = (props) => {
  const [likesCount, updateLikesCount] = useState(props.likes_count);

  useEffect(() => {
    updateLikesCount(props.likes_count);
  }, [props.likes_count]);

  const deleteSingleCard = () => {
    props.deleteCardCallBack(props.card_id);
  };

  const increaseLikeCount = () => {
    console.log("increaseLikeCount called");
    axios
      .patch(`https://shiver-of-sharks.herokuapp.com/cards/${props.card_id}`, {
        likes_count: likesCount + 1,
      })
      .then((response) => {
        props.refreshCards(props.card_id, likesCount + 1);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  };

  return (
    <section className="single-box-container">
      <section className="single-box">{props.message}</section>
      <section className="box-footer">
        <button onClick={deleteSingleCard}>🗑</button>{" "}
        <button onClick={increaseLikeCount}>❤️</button> {likesCount}
      </section>
    </section>
  );
};

SingleCard.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  deleteCardCallBack: PropTypes.func.isRequired,
  refreshCards: PropTypes.func.isRequired,
};

export default SingleCard;
