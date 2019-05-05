import * as React from "react";
import Pagination from "material-ui-flat-pagination";

interface Props {
  handleClick: (e: React.MouseEvent, offset: number) => void;
  offset: number;
  limit: number;
  total: number;
}

export default function FlatPagination(props: Props) {
  const { offset, limit, total, handleClick } = props;
  return (
    <Pagination
      currentPageColor="default"
      otherPageColor="default"
      limit={limit}
      offset={offset}
      total={total}
      onClick={(e, offset) => handleClick(e, offset)}
    />
  );
}
