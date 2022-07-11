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

interface UserListProps {
    items: Array<IPosts>
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
                  {items.map((post:any, index:any) => (
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
            </Table>
        </Fragment>
    );
};

export default UserList;