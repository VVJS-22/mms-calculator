import React from 'react'
import ResultBox from '../uiComponents/ResultBox'
import { useResultContext } from '../store/contexts/resultContext'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto;
  justify-content: space-around;
  height: 60vh;
  min-height: 610px;
  align-items: center;
  padding: 1rem;
  @media screen and (min-width: 330px) {
    grid-template-columns: auto auto;
    min-height: 330px;
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: auto auto auto auto;
  }
`

const ResultComp = () => {

  const { initialValue } = useResultContext()

  const Result = initialValue
                  .map(({ label, value}) => (
                          <ResultBox label={label} value={value} />
                        )
                      )


  return (
    <Wrapper>
      {Result}
    </Wrapper>
  )
}

export default ResultComp