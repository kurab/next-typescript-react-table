import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import { Column } from 'react-table';
import { useState } from 'react';
import { Data, DataButton } from '../types/DataType';
import PrimaryButton from '../components/primaryButton';
import SortableTable from '../components/SortableTable';
import SortableTableWithRowSelect from '../components/SortableTableWithRowSelect';

const Home: NextPage = () => {
  const [selected, setSelected] = useState<Array<Data>>([]);
  const onClickAlert = (name: string) => {
    alert(name);
  };
  const dataButton: Array<DataButton> = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: <PrimaryButton name={'hello'} callback={onClickAlert} />,
      },
      {
        col1: 'react-table',
        col2: <PrimaryButton name={'react-table'} callback={onClickAlert} />,
      },
      {
        col1: 'whatever',
        col2: <PrimaryButton name={'whatever'} callback={onClickAlert} />,
      },
    ],
    []
  );
  const columnsButton: Array<Column<DataButton>> = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  );

  const data: Array<Data> = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );
  const columns: Array<Column<Data>> = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  );

  return (
    <>
      <div className="container">
        <div>
          <h2>Sortable Table</h2>
          <SortableTable columns={columnsButton} data={dataButton} />
        </div>
        <div>
          <h2>Sortable Table w/ Row Select</h2>
          <SortableTableWithRowSelect
            columns={columns}
            data={data}
            callback={setSelected}
          />
          <h3>selected</h3>
          <ul>
            {selected &&
              selected.map((item, key) => {
                return (
                  <li key={key}>
                    {item.col1} - {item.col2}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
