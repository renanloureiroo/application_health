export const colors = {
  background: '#121212' as const,
  primary: '#BB86FC' as const,
  primary_variant: '#3700B3' as const,
  secondary: '#03DAC6' as const,
  error: '#CF6679' as const,
  text: '#FFFFFF' as const,
  title: '#FFFFFF' as const,
  placeholder: '#CCCCCC' as const,
} as const

export type Colors = keyof typeof colors
export type ColorValue = (typeof colors)[Colors]
