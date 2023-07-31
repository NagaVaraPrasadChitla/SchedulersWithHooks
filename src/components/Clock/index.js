import {useState, useEffect} from 'react'
import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [date, setdate] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setdate(new Date())
    }, 1000)
    console.log('excuted')
    return () => {
      clearInterval(timerId)
    }
  }, [])
  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time>{date.toLocalTimeString()} </Time>
    </ClockContainer>
  )
}

export default Clock
