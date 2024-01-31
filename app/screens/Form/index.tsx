import React from 'react'
import { Text, type TextStyle, type ViewStyle } from 'react-native'

import { Screen, Box, Input } from 'app/components'
import { colors } from 'app/styles/theme'

export const FormScreen = () => (
  <Screen>
    <Input placeholder="Testando" />
    <Box style={$box}>
      <Text style={$title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        voluptatibus, doloribus, quos, quidem nemo quas quae voluptas
        reprehenderit, eum laboriosam quia. Quisquam, voluptas. Quisquam
        voluptates, quibusdam voluptatum aspernatur, quod mollitia, quae
        voluptatem doloribus quia. Quisquam, voluptas. Quisquam voluptates,
        quibusdam voluptatum aspernatur, quod mollitia, quae voluptatem
        doloribus quia.
      </Text>
    </Box>
  </Screen>
)

const $title: TextStyle = {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 16,
  color: 'white',
}

export const $box: ViewStyle = {
  backgroundColor: colors.primary,
  padding: 24,
  borderRadius: 8,
  marginTop: 16,
}
