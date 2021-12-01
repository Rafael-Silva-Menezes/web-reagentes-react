/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { TableContent } from './styles';

interface TableProps {
  title: string[];
  content: any[][];
}

const Table: React.FC<TableProps> = ({ title, content }) => {
  return (
    <TableContent>
      <thead>
        <tr>
          {title.map((titleName, index) => (
            <th>{titleName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.map(items => (
          <tr>
            {items.map((itemColumn, index) => {
              return <td>{items[index]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </TableContent>
  );
};

export default Table;
