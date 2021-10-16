import React from 'react';
import { Btn, Container } from './styles';

const Button = ({ children, width, padding, onClick }) => {
  return (
    <Container style={{ justifyContent: 'flex-end' }}>
      <Btn onClick={onClick} btnWidth={width} btnPadding={padding}>
        {children}
      </Btn>
    </Container>
  );
};

export default Button;
