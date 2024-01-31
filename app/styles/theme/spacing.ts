export const spacing = {
  xs: 4 as const,
  s: 8 as const,
  m: 16 as const,
  l: 24 as const,
  xl: 40 as const,
  xxl: 64 as const,
}

export type Spacing = keyof typeof spacing
export type SpacingValue = (typeof spacing)[Spacing]
