import { ViewStyle } from 'react-native'

export const $container: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  columnGap: 8,
  paddingHorizontal: 24,
  paddingVertical: 4,
}

export const $content: ViewStyle = {
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'space-between',
}
