import React, { FC, ReactNode } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import { colors } from '../styles/theme/colors'
import { Areas, useSafeArea } from '../hooks/useSafeArea'
import { StatusBar, StatusBarProps } from 'expo-status-bar'

const isIos = Platform.OS === 'ios'

interface ScreenProps {
  backgroundColor?: string
  style?: ViewProps['style']
  children: ReactNode
  safeAreas?: Areas[]
  statusBarProps?: StatusBarProps
}

export const Screen: FC<ScreenProps> = (props) => {
  const {
    style: $overrideStyles,
    children,
    backgroundColor = colors.neutral[50],
    safeAreas = ['top', 'bottom'],
    statusBarProps: overrideStatusBarProps,
  } = props

  const { paddingBottom, paddingLeft, paddingRight, paddingTop } =
    useSafeArea(safeAreas)

  const statusBarProps: StatusBarProps = {
    style: 'light',
    backgroundColor: 'transparent',
    translucent: true,
    ...overrideStatusBarProps,
  }

  const $containerStyles = [
    $container,
    { paddingBottom, paddingLeft, paddingRight, paddingTop },
    { backgroundColor: colors[backgroundColor] },
    $overrideStyles,
  ] as StyleProp<ViewStyle>[]

  return (
    <>
      <StatusBar {...statusBarProps} />
      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : 'height'}
        style={$root}
      >
        <View style={$containerStyles}>{children}</View>
      </KeyboardAvoidingView>
    </>
  )
}

const $root: ViewStyle = {
  flex: 1,
}

const $container: ViewStyle = {
  flex: 1,
}
