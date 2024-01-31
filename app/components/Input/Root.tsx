import { colors, spacing } from 'app/styles/theme'
import React, { Ref, forwardRef } from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'

interface RootProps extends ViewProps {
  focused?: boolean
  error?: boolean
}

export const Root = forwardRef(
  (
    {
      style: $overrideStyle,
      focused = false,
      error = false,
      children,
      ...rest
    }: RootProps,
    ref: Ref<View>,
  ) => {
    console.log('Focused: ', focused)

    const $rootStyles = [
      $root,
      focused && $focused,
      error && $error,
      $overrideStyle,
    ] as StyleProp<ViewStyle>[]

    return (
      <View ref={ref} {...rest} style={$rootStyles}>
        {children}
      </View>
    )
  },
)

const $root: ViewStyle = {
  borderWidth: 1,
  borderRadius: 4,
  borderColor: colors.primary,
  padding: spacing.m,
  flexDirection: 'row',
  alignItems: 'center',
}

const $error: ViewStyle = {
  borderWidth: 2,
  borderColor: colors.error,
}

const $focused: ViewStyle = {
  borderWidth: 2,
}
