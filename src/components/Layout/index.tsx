import { styled } from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: scroll;
`

export default function Layout({ children }: React.PropsWithChildren) {
  return <Container>{children}</Container>
}
