import React, { useRef, useState } from 'react'
import { Button, View, ViewStyle } from 'react-native'

function HomeScreen() {
  const [recording, setRecording] = useState(false)
  const [url, setUrl] = useState('')
  const [paused, setPaused] = useState(true)

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    ></View>
  )
}
const $content: ViewStyle = {
  width: '100%',
  height: '90%',
  backgroundColor: 'black',
  padding: 16,
  borderRadius: 8,
}
const $backgroundVideo: ViewStyle = {
  backgroundColor: 'black',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}

const $controls: ViewStyle = {
  flexDirection: 'row',
  gap: 16,
  alignItems: 'center',
  justifyContent: 'center',
}

export { HomeScreen }
