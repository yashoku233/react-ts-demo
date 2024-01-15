import React, { FC } from 'react'
import styled, { css } from 'styled-components'

// 因为Button是组件 所以要跟Demo同级
// type ButtonPropsType = {
//   primary?: boolean
// }

const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: '#BF4F74';
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
    `};
`
const Container = styled.div`
  text-align: center;
`

const Demo: FC = () => {
  return (
    <div>
      <p>styled-components</p>
      <Container>
        <Button>Normal Button</Button>
        <Button $primary>Primary Button</Button>
      </Container>
    </div>
  )
}

export default Demo
