import React, { FC } from 'react'
import { colors } from 'app/styles/theme'
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native'

type HeadingSize = 'sm' | 'md' | 'lg' | 'xl'

interface HeadingProps extends RNTextProps {
  text?: string
  color?: string
  size?: HeadingSize
}

export const Heading: FC<HeadingProps> = ({
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
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
}

const lineHeights = {
  sm: 20,
  md: 24,
  lg: 30,
  xl: 40,
}
