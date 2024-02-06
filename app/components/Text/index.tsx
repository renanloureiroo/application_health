import React, { FC } from 'react'
import { colors } from 'app/styles/theme'
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native'

type TextSize = 'xs' | 'sm' | 'md' | 'lg'

interface TextProps extends RNTextProps {
  text?: string
  color?: string
  size?: TextSize
}

export const Text: FC<TextProps> = ({
  text,
  children,
  color = colors.neutral[500],
  size = 'md',
  style: $overrideStyles,
  ...rest
}) => {
  const $textStyles = [
    {
      color,
      fontSize: fontSizes[size],
      lineHeight: lineHeights[size],
    },
    $overrideStyles,
  ] as StyleProp<TextStyle>[]

  return (
    <RNText {...rest} style={$textStyles}>
      {text ?? children}
    </RNText>
  )
}

const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
}

const lineHeights = {
  xs: 14,
  sm: 16,
  md: 24,
  lg: 28,
}
