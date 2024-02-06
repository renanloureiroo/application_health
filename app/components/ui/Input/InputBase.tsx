import { colors } from 'app/styles/theme'
import { Ref, forwardRef } from 'react'
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native'

interface InputBaseProps extends RNTextInputProps {}

export const InputBase = forwardRef(
  (
    { style: $overrideStyles, ...rest }: InputBaseProps,
    ref: Ref<RNTextInput>,
  ) => {
    const $inputStyles = [$input, $overrideStyles] as StyleProp<TextStyle>[]

    return (
      <RNTextInput
        ref={ref}
        placeholderTextColor={colors.neutral[300]}
        {...rest}
        style={$inputStyles}
      />
    )
  },
)

const $input: TextStyle = {
  fontSize: 16,
  color: colors.neutral[500],
  flex: 1,
}
