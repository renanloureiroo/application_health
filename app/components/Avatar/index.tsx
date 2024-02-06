import { Image, StyleProp, ViewStyle, ImageProps } from 'react-native'
import { Box } from '../ui'

import { $container, $large, $medium, $small, $xlarge } from './styles'
import { FC } from 'react'
import { colors } from 'app/styles/theme'

const sizeStyles = {
  sm: $small,
  md: $medium,
  lg: $large,
  xl: $xlarge,
}

interface AvatarProps extends ImageProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  containerStyle?: StyleProp<ViewStyle>
}

const Avatar: FC<AvatarProps> = ({
  size = 'md',
  color = colors.primary[400],
  containerStyle: $overrideContainerStyles,
  ...rest
}) => {
  const $containerStyles = [
    $container,
    { borderColor: color },
    sizeStyles[size],
    $overrideContainerStyles,
  ] as StyleProp<ViewStyle>[]

  return (
    <Box style={$containerStyles}>
      <Image
        source={{ uri: 'https://github.com/renanloureiroo.png' }}
        resizeMode="cover"
        style={sizeStyles[size] as ImageProps['style']}
        {...rest}
      />
    </Box>
  )
}

export { Avatar }
