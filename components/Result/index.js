import React from 'react'
import ResultBox from './ResultBox'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto;
  justify-content: space-around;
  align-content: center;
  height: 50vh;
  min-height: 610px;
  row-gap: 10px;
  padding: 1rem;
  @media screen and (min-width: 330px) {
    grid-template-columns: auto auto;
    min-height: 330px;
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: auto auto auto auto;
  }
`

const ResultComp = ({ results }) => {

  const Result = Object.entries(results)
                  .map(([label, value]) => (
                          <ResultBox key={label} label={label} value={value} />
                        )
                      )


  return (
    <Wrapper>
      {Result}
    </Wrapper>
  )
}

export default React.memo(ResultComp)