import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../styles/ImageCards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ImageCards(props) {
  let [numOfLikes, setNumOfLikes] = useState(0);

  const updateLikes = () => {
    setNumOfLikes(numOfLikes + 1)
    props.updateTotalLikes()
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="img-card"
        variant="top"
        src={props.img_url}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Likes: {numOfLikes}
        </Card.Text>
        <Button variant="primary" onClick={updateLikes}>
          Like ❤
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ImageCards;
