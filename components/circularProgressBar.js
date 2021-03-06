import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React from 'react'

const CircularProgressBar = ()=>(
    <AnimatedCircularProgress
    size={120}
    width={15}
    fill={100}
    tintColor="#00e0ff"
    onAnimationComplete={() => console.log('onAnimationComplete')}
    backgroundColor="#3d5875" />
)

export default CircularProgressBar
