import React, {Fragment, useEffect } from 'react';
import 'mdbreact/dist/css/mdb.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


interface IHeaderTable {
  title: string;
}

const headerTable: IHeaderTable[] = [
  { title: 'postid' },
  { title: 'title' },
  // { title: 'author' },
  { title: 'body' },
  // { title: 'creation date' },
]

interface IPosts {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
    items: IPosts
};

const cardsStyle = {
  width: '257px',
  height: '280px',
};

const cardTitle = {
  height: '20px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left'
}

const cardBody = {
  margintTop: '20px',
  height: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left'
 
}

const PostCard: React.FC<PostCardProps> = ({items}) => {
    return (
        <Fragment>
          <Row>
            <div className="card-group">
              {items.map((post, index) => (
                  <div className="col-3" key={index}>
                    <div className="card m-2" style={cardsStyle}>
                      <div className="card-body">
                        <h5 className="card-title" style={cardTitle} title={post.title}>{post.title}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">{post.id}</h6> */}
                        <p className="card-text" style={cardBody}>{post.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Row>
        </Fragment>
    );
};

export default PostCard;