import styled from 'styled-components'
import ResultComp from '../components/ResultComp'
import Header from '../components/Header'
import ReloadComp from '../components/ReloadComp'
import Form from '../components/Form'


const Wrapper = styled.section`
  background: ${({ theme }) => theme.dark.primary};
  color: ${({ theme }) => theme.dark.secondary};
  min-height: 100vh;
`

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <ResultComp />
      <Form />
      <ReloadComp />
    </Wrapper>
  )
}

export default Home