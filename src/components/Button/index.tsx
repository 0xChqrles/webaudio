import { Row } from 'components/Flex'
import { styled } from 'styled-components'
import { ThemedText } from 'theme/components'

const StyledPrimaryButton = styled.button`
  font-size: 32px;
  color: ${({ theme }) => theme.accent1};
  background: ${({ theme }) => theme.bg1};
  cursor: pointer;
  position: relative;
  padding: 12px 8px 4px 12px;
  width: auto;
  outline: none;
  border: 3px solid ${({ theme }) => theme.accent1};
  border-radius: 1px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:enabled:active {
    color: ${({ theme }) => theme.bg1};
    background: ${({ theme }) => theme.accent1};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export function PrimaryButton({ children, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledPrimaryButton onClick={onClick} {...props}>
      {children}
    </StyledPrimaryButton>
  )
}

const StyledSecondaryButton = styled.button`
  font-size: 32px;
  color: ${({ theme }) => theme.neutral1};
  background: transparent;
  cursor: pointer;
  position: relative;
  padding: 6px;
  width: auto;
  border: none;
  outline: none;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .secondary-button-start {
    visibility: hidden;
    color: ${({ theme }) => theme.neutral2};
  }

  &:enabled:hover .secondary-button-start {
    visibility: visible;
  }

  &:enabled:active .secondary-button-start,
  &:enabled:active {
    color: ${({ theme }) => theme.accent1};
  }
`

export function SecondaryButton({ children, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledSecondaryButton onClick={onClick} {...props}>
      <Row gap={8}>
        <ThemedText.Body className="secondary-button-start">*</ThemedText.Body>
        {children}
      </Row>
    </StyledSecondaryButton>
  )
}
