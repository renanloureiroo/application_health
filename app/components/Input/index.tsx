import {
  forwardRef,
  useImperativeHandle,
  useRef,
  Ref,
  Component,
  useState,
} from 'react'
import {
  TextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
  View,
  ViewStyle,
  Text,
} from 'react-native'
import { Root } from './Root'
import { InputBase } from './InputBase'

interface InputProps extends RNTextInputProps {}

export const Input = forwardRef((props: InputProps, ref: Ref<TextInput>) => {
  const { onFocus: _onFocus, onBlur: _onBlur, ...rest } = props
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const inputRef = useRef<TextInput>(null)
  const inputContainerRef = useRef<View>(null)

  useImperativeHandle(ref, () => inputRef.current as TextInput, [
    inputRef.current,
  ])

  return (
    <Root ref={inputContainerRef} focused={isFocused}>
      <InputBase
        {...rest}
        ref={inputRef}
        onFocus={(e) => {
          setIsFocused(true)
          _onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          _onBlur?.(e)
        }}
      />
    </Root>
  )
})
