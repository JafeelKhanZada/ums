import React from "react";
import ReactTable from "react-table-v6";
import { CircularProgress } from "@material-ui/core";
import "react-table-v6/react-table.css";
function Table(props) {
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
        loadingText={<CircularProgress />}
        defaultPageSize={10}
        showPagination={true}
        showPaginationTop={false}
        showPaginationBottom={true}
        showPageSizeOptions={false}
        manual // this would indicate that server side pagination has been enabled
        {...props}
      />
    </>
  );
}

export default Table;
