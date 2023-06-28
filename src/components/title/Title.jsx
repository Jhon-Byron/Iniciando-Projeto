import styled from 'styled-components'

const StyledTitle = styled.h1`
  background-color: ${(props) => props.theme.second};
  color: ${(props) => props.theme.primary};
  padding: 50px;
`

export default function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>
}
