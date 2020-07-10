import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 180px;
    background-color: #161616;
    z-index: -1;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;

  h1 {
    color: #fff;
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: -0.06em;
    display: flex;

    img {
      height: 35px;
      margin-left: 10px;
    }

    em {
      display: flex;
      align-items: center;
      font-style: normal;
      color: #59c16f;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
