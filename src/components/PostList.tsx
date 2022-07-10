import React, {Fragment, useEffect } from 'react';
import 'mdbreact/dist/css/mdb.css';
import { MDBDataTableV5 } from 'mdbreact';


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

interface PostListProps {
    items: IPosts
};

const PostList: React.FC<PostListProps> = ({items}) => {
    return (
        <Fragment>
          <MDBDataTableV5 
          hover 
          entriesOptions={[5, 20, 25]}
          entries={5}
          // searchTop
          searching={false}
          pagesAmount={4} data={{
            columns: [
            {
              label: 'POSTID',
              field: 'postid',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'PostId',
              },
            },
            {
              label: 'Title',
              field: 'title',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Title',
              },
            },
            {
              label: 'Body',
              field: 'body',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Body',
              },
            },
          ],rows: items}} />;
        </Fragment>
    );
};

export default PostList;