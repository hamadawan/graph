import React from 'react';
import MaterialTable from 'material-table';


export default function Table(props) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Category', field: 'category' },
      { title: 'High', field: 'high', type: 'numeric' },
      { title: 'Medium', field: 'medium', type: 'numeric' },
      { title: 'Low', field: 'low', type: 'numeric' },
      { title: 'Impact Percent', field: 'impactPercent', type: 'numeric' },
      { title: 'Value', field: 'value', type: 'numeric' },
    ],
    data: props.data,
  });

  return (
    <MaterialTable
      title="Citrix Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
