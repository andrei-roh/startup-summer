import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import { StyledCard, PaginationLink, RightBlock, BottomBlock } from './style';

const PaginationBlock = ({ userRepositoryInfo, public_repos }) => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  let stepsArray = [0];
  let step = 4;
  for (let i = 0; i < public_repos / 4; i += 1) {
    stepsArray.push(step);
    step += 4;
  }
  let paginateUserRepositoryInfo = (pageNumber) => {
    return userRepositoryInfo
      .slice(0, public_repos)
      .slice(stepsArray[pageNumber - 1], stepsArray[pageNumber]);
  };
  let getNecessaryRepositoryInfo = paginateUserRepositoryInfo(page).map(
    (element) => (
      <StyledCard>
        <Typography variant="body1">
          <PaginationLink href={element.html_url} target="_blanc">
            {element.name}
          </PaginationLink>
        </Typography>
        <Typography variant="body2">{element.description}</Typography>
      </StyledCard>
    )
  );

  let getPaginationCount = Math.ceil(public_repos / 4);
  const firstNumberItems = () => {
    if (stepsArray[page - 1] === 0) {
      return 1;
    }
    return stepsArray[page - 1];
  };
  const lastNumberItems = () => {
    if (page === getPaginationCount) {
      return public_repos;
    }
    return stepsArray[page];
  };

  return (
    <RightBlock>
      <Typography variant="h5" style={{ fontWeight: 'bold' }}>
        Repositories ({public_repos})
      </Typography>
      <div>{getNecessaryRepositoryInfo}</div>
      <BottomBlock>
        <Typography variant="body2" style={{ color: '#808080' }}>
          {firstNumberItems()}-{lastNumberItems()} of {public_repos} items
        </Typography>
        <Pagination
          count={getPaginationCount}
          page={page}
          onChange={handleChange}
          shape="rounded"
          color="primary"
        />
      </BottomBlock>
    </RightBlock>
  );
};

export default PaginationBlock;
