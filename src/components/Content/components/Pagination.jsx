import React, {useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';

const PaginationBlock = ({ userRepositoryInfo, public_repos }) => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  let paginateUserRepositoryInfo = (pageNumber) => {
    if (pageNumber === 1) {
      return userRepositoryInfo.slice(0, 4)
    }
    pageNumber += 2;
    return userRepositoryInfo.slice((pageNumber), (pageNumber + 4))
  };
  let getNecessaryRepositoryInfo = paginateUserRepositoryInfo(page).map(element =>
    <div>
      <div><strong>{element.name}</strong></div>
      <div>{element.description}</div>
    </div>
  );
  let getPaginationCount = Math.floor(public_repos / 4);

  return (
    <div>
      <div>{getNecessaryRepositoryInfo}</div>
      <Pagination count={getPaginationCount} page={page} onChange={handleChange} shape="rounded" />
    </div>
  );
}

export default PaginationBlock;
