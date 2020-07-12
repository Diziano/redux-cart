import React from 'react';
import { useSelector } from 'react-redux';

import { MdShoppingCart } from 'react-icons/md';

import { Container, Logo, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo to="/">
        <h1>
          <em>Redux</em>
          Cart
          <img src={logo} alt="Redux-cart" />
        </h1>
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>

        <MdShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
