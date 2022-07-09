import React, {Fragment, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


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

interface UserListProps {
    items: IPosts
};

const UserList: React.FC<UserListProps> = ({items}) => {
    return (
        <Fragment>
            <Table>
              <thead>
                {headerTable.map(option => {
                  return (
                    <td className='text-uppercase'>{option.title}</td>
                  );
                })}
              </thead>
              <tbody>
                  {items.map((post, index) => (
                  <tr key={index}>
                    <td>
                      <span>{post.id}</span>
                    </td>
                    <td>
                        <span>{post.title}</span>
                    </td>
                    <td>
                        <span>{post.body}</span>
                    </td>
                  </tr>
              )   )}
              </tbody>
            </Table>s
        </Fragment>
    );
};

export default UserList;