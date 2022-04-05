import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 24px 16px 24px;
  box-sizing: border-box;
  margin-top: 12px;
  margin-bottom: 12px;
  background: #fff;

  @media (max-width: 799px) {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const PaginationLink = styled.a`
  text-decoration: none;
  color: #0064eb;
  background: #fff;
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
  width: 50vw;
  align-self: flex-end;
  background: #e5e5e5;

  @media (max-width: 799px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-self: flex-start;
  }
`;

export const BottomBlock = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  align-items: center;

  @media (max-width: 799px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 95vw;
    align-self: flex-start;
    margin-bottom: 15px;
  }
`;
