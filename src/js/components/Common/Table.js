import React from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
function Table({ columns, data }) {
  return (
    <>
      <ReactTable
        className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
        getTrProps={(state, rowInfo, column) => {
          return {
            className: "cursor-pointer",
            onClick: (e, handleOriginal) => {
              console.log(state, rowInfo, column, e, handleOriginal);
            },
          };
        }}
        data={[{ CompanyName: "Dani" }]}
        columns={columns}
        defaultPageSize={3}
        showPagination={false}
        showPaginationTop={false}
        showPaginationBottom={false}
        manual // this would indicate that server side pagination has been enabled
      />
    </>
  );
}

export default Table;
