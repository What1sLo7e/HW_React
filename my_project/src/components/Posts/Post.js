import React from "react";
// import { Card, Button } from "react-bootstrap";

// const Post = ({img}) => {
//     return (
//             <Card style={{ width: '22rem' }}>
//                     <Card.Img variant="top" src={img} />
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Text>
//                         Some quick example text to build on the card title and make up the bulk of
//                         the card's content.
//                         </Card.Text>
//                         <Button variant="primary">Like</Button>
//                         <Button variant="primary">Comment</Button>
//                     </Card.Body>
//             </Card>
//     )
// }

// export default Post

const Post = ({ post }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
            </div>
        </div>
    )
}

export default Post