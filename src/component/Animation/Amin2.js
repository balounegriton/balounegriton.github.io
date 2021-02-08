import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import animation from './anim3.json'
 
const App = () => {
  const bodymovinOptions = {
    loop: false,
    autoplay: true,
    prerender: true,
    animationData: animation
  }
 
  return (
    <div>
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  )
}
 
export default App
