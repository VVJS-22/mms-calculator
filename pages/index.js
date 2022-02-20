import { useState, useMemo, useEffect } from 'react'



// -------------- Components -------------------- //

import Result from '../components/Result'
import Header from '../components/Header'
import Reload from '../components/Reload'
import Form from '../components/Form'

// -------------- Components -------------------- //



// -------------- External Packages --------------//

import styled from 'styled-components'
import axios from 'axios'

// -------------- External Packages --------------//



// -------------- helpers ------------------ //

import { mergeSort } from '../helpers/sortArray'
import { getMean } from '../helpers/getMean'
import { getMedian } from '../helpers/getMeadian'
import { getStdDeviation } from '../helpers/getDeviation'
import { getMode } from '../helpers/getMode'
import MetaData from '../public/MetaData'

// -------------- helpers ------------------ //


// ------------------ styles --------------------- //

const Wrapper = styled.section`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  min-height: 100vh;
`
// ------------------ styles --------------------- //



const Home = () => {


  const [data, setData] = useState([])
  const [url, setUrl] = useState('/api/data5')
  const [results, setResults] = useState({
    'Mean': 0,
    'Median': 0,
    'Std Deviation': 0,
    'Mode': 0
  })

  useEffect(async () => {
    const { data: {data : data5 }} = await axios.get(url)
    setData(data5)
  }, [url])

  useMemo(() => {
    if (data.length) {
      const sortedData = mergeSort(data)
      const meanValue = getMean(sortedData)
      const medianValue = getMedian(sortedData)
      const stdDeviation = getStdDeviation(sortedData, meanValue)
      const modeValue = getMode(sortedData)
      setResults(results => ({
        ...results, 
        "Mean": meanValue,
        "Median": medianValue,
        "Std Deviation": stdDeviation,
        "Mode": modeValue
      }))
    }
  }, [data])


  return (
    <>
    <MetaData />
    <Wrapper>
      <Header />
      <Result results = {results} />
      <Form setData={setData} />
      <Reload url={url} setUrl={setUrl}/>
    </Wrapper>
    </>
  )
}

export default Home