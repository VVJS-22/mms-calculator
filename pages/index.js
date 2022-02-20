import styled from 'styled-components'
import ResultComp from '../components/ResultComp'
import Header from '../components/Header'
import ReloadComp from '../components/ReloadComp'
import Form from '../components/Form'
import { useState, useMemo, useEffect } from 'react'
import { mergeSort } from '../store/helpers/sortArray'
import axios from 'axios'
import { getMean } from '../store/helpers/getMean'
import { getMedian } from '../store/helpers/getMeadian'
import { getStdDeviation } from '../store/helpers/getDeviation'
import { getMode } from '../store/helpers/getMode'


const Wrapper = styled.section`
  background: ${({ theme }) => theme.dark.primary};
  color: ${({ theme }) => theme.dark.secondary};
  min-height: 100vh;
`

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

  useEffect(() => {
    console.log(data)
  }, [data])


  return (
    <Wrapper>
      <Header />
      <ResultComp results = {results} />
      <Form setData={setData} />
      <ReloadComp url={url} setUrl={setUrl}/>
    </Wrapper>
  )
}

export default Home