import React, {Fragment, useEffect } from 'react';
import 'mdbreact/dist/css/mdb.css';
import Row from 'react-bootstrap/Row';


interface IHeaderTable {
  title: string;
}

const headerTable: IHeaderTable[] = [
  { title: 'postid' },
  { title: 'title' },
  { title: 'body' },
]

interface IPosts {
  id: number;
  title: string;
  body: string;
  map: any; 
}

interface PostCardProps {
    items: Array<IPosts>;
};



const PostCard: React.FC<PostCardProps> = ({items}) => {
    return (
        <Fragment>
          <Row>
            <div className="d-flex w-100 flex-wrap">
              {items.map((post:any, index:any) => (
                  <div className="col-3" key={index}>
                    <div className="card m-2 cardsStyle">
                      <div className="card-body">
                        <h5 className="card-title cardTitle" title={post.title}>{post.title}</h5>
                        <p className="card-text cardBody">{post.body}</p>
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