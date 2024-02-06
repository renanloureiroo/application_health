import React from 'react'
import { Box, Text, Heading, Icon } from 'app/components/ui'
import { Avatar } from '../Avatar'
import { colors } from 'app/styles/theme'
import { $container, $content } from './styles'

const HomeHeader = () => {
  return (
    <Box style={$container}>
      <Avatar size="md" color={colors.secondary[500]} />
      <Box style={$content}>
        <Text text="Olá," size="md" color={colors.neutral[400]} />
        <Heading text="Renan Loureiro" size="sm" color={colors.neutral[900]} />
      </Box>
      <Icon name="BellSimple" />
    </Box>
  )
}

export { HomeHeader }
