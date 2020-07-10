import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  border-radius: 4px;
  background: #fff;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    button {
      padding: 12px 20px;
      border: 0;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: bold;
      background: #59c16f;
      color: #fff;
      transition: background 0.2s;

      a:hover {
        background: ${darken(0.03, '#59c16f')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    padding: 12px;
    text-align: left;
    text-transform: uppercase;
    color: #999;
    border-bottom: 1px solid #eee;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      width: 50px;
      padding: 6px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
    }
  }

  button {
    display: flex;
    padding: 6px;
    border: 0;
    background: none;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-weight: bold;
    text-transform: uppercase;
    color: #999;
  }

  strong {
    margin-left: 5px;
    font-size: 28px;
  }
`;
