import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)`
  height: 80px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 24px 32px 24px;
  box-sizing: border-box;
  margin-top: 12px;
  margin-bottom: 12px;
  background: #FFF;
`;

export const PaginationLink = styled.a`
  text-decoration: none;
  color: #0064EB;
  background: #FFF;
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomBlock = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
`;
