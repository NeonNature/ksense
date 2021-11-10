import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
`;

export const UserTable = styled.table`
  width: 100%;
  overflow-x: auto;

  border: 1px solid #000;

  td {
    padding: 25px;
  }

  tr {
    cursor: pointer;

    :nth-of-type(odd) {
      background: #eee;
      border: 1px solid #000;
    }

    :hover {
      background-color: #2d2a48;
      color: #fff;
    }
  }

  th {
    padding: 25px 0;
    background-color: #2d2a48;
    color: #fff;
    cursor: initial;
  }
`;

export const PostHeader = styled.div`
  font-size: 2rem;
  margin: 50px 15px 15px 15px;
`;

export const PostHeaderUser = styled.div`
  color: #2d2a48;
  font-weight: bold;
  display: inline-block;
`;

