import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    img {
      max-width: 250px;
      align-self: center;
    }

    > strong {
      margin-top: 5px;
      font-size: 16px;
      line-height: 20px;
      color: #333;
    }

    > span {
      margin: 5px 0 20px;
      font-size: 21px;
      font-weight: bold;
    }

    button {
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      background: #59c16f;
      color: #fff;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#59c16f')};
      }

      div {
        display: flex;
        padding: 12px;
        align-items: center;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
