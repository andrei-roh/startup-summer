import React, {useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import {
  StyledCard,
  PaginationLink,
  RightBlock,
  BottomBlock
} from './style';

const PaginationBlock = ({ userRepositoryInfo, public_repos }) => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  let stepsArray = [0];
  let step = 4
  for (let i = 0; i < (public_repos / 4); i += 1) {
  	stepsArray.push(step);
    step += 4
  }
  let paginateUserRepositoryInfo = (pageNumber) => {
    return userRepositoryInfo.slice(stepsArray[pageNumber - 1], stepsArray[pageNumber])
  };
  let getNecessaryRepositoryInfo = paginateUserRepositoryInfo(page).map(element =>
    <StyledCard>
      <Typography variant="body1">
        <PaginationLink href={element.html_url} target="_blanc">{element.name}</PaginationLink>
      </Typography>
      <Typography variant="body2">{element.description}</Typography>
    </StyledCard>
  );
  let getPaginationCount = Math.floor(public_repos / 4);

  return (
    <RightBlock>
      <div>{getNecessaryRepositoryInfo}</div>
      <BottomBlock>
        <Typography variant="body2" style={{ color: "#808080" }}>
          {stepsArray[page - 1] === 0 ? 1 : stepsArray[page - 1]}-{stepsArray[page]} of {public_repos} items
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
}

export default PaginationBlock;
