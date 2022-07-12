import React, {Fragment, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


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

interface PostListProps {
    items: Array<IPosts>
};

const PostList: React.FC<PostListProps> = ({items}) => {
    return (
        <Fragment>
            <Table className='text-center'>
              <thead>
                <tr className='border'>
                  {headerTable.map(option => {
                    return (
                      <td className='p-2 text-uppercase font-weight-bold font-small'>{option.title}</td>
                    );
                  })}
                </tr>
              </thead>
              <tbody className='border-0'>
                  {items.map((post:any, index:any) => (
                  <tr key={post.id} className='border'>
                    <td className='p-2 align-middle'>
                      <span>{post.id}</span>
                    </td>
                    <td className='w-50 p-2 align-middle'>
                        <span>{post.title}</span>
                    </td>
                    <td className='p-2 align-middle'>
                        <span>{post.body}</span>
                    </td>
                  </tr>
              )   )}
              </tbody>
            </Table>
        </Fragment>
    );
};

export default PostList;