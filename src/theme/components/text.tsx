/**
 * Preset styles of the Rebass Text component
 */

import { Text, TextProps as TextPropsOriginal } from 'rebass'
import styled from 'styled-components'

const TextWrapper = styled(Text).withConfig({
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: keyof string }>`
  color: ${({ color, theme }) => (theme as any)[color]};
  letter-spacing: 1.5px;
  white-space: pre-wrap;
`

type TextProps = Omit<TextPropsOriginal, 'css'>

// todo: export each component individually
export const ThemedText = {
  Body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={24} lineHeight={1.5} color="neutral1" {...props} />
  },
}
