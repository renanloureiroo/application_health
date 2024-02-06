import React, { FC } from 'react'

import * as PhosphorIcons from 'phosphor-react-native'
import { colors } from 'app/styles/theme'
import { Pressable, PressableAndroidRippleConfig } from 'react-native'
import { $container, $container_pressed } from './styles'

interface IconProps extends PhosphorIcons.IconProps {
  name: keyof typeof PhosphorIcons
  onPress?: () => void
}

const Icon: FC<IconProps> = ({
  name,
  color = colors.neutral[900],
  size = 24,
  onPress,
  ...rest
}) => {
  const Component = PhosphorIcons[name] as FC<PhosphorIcons.IconProps>

  const android_ripple: PressableAndroidRippleConfig = {
    color,
    borderless: true,
    radius: Number(size) * 1.5,
  }

  if (!Component) return null

  if (onPress) {
    return (
      <Pressable
        android_ripple={android_ripple}
        style={({ pressed }) => [$container, pressed && $container_pressed]}
      >
        <Component {...rest} color={color} size={size} />
      </Pressable>
    )
  }

  return <Component {...rest} color={color} size={size} />
}

export { Icon }
