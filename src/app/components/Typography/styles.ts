import styled, { css } from 'styled-components'
import { TypographyProps } from '.'

export const sizeModifiers = {
  xsmall: () => css`
    font-size: 1.2rem;
    line-height: 1.6rem;
  `,
  small: () => css`
    font-size: 1.4rem;
    line-height: 2.1rem;
  `,
  medium: () => css`
    font-size: 1.6rem;
    line-height: 2rem;
  `,
  large: () => css`
    font-size: 1.8rem;
    line-height: 2.16rem;
  `,
  xlarge: () => css`
    font-size: 2rem;
    line-height: 2.4rem;
  `,
  xxlarge: () => css`
    font-size: 2.4rem;
    line-height: 2.88rem;
  `
}

const colorModifier = {
  primaryBlue: () => css`
    color: #1b31a8;
  `,
  secondaryBlue: () => css`
    color: #0079ff;
  `,
  primaryBlack: () => css`
    color: #1e2a32;
  `,
  secondaryBlack: () => css`
    color: #1c1e1f;
  `,
  primaryGray: () => css`
    color: #708797;
  `,
  secondaryGray: () => css`
    color: #4d6475;
  `
}

const fontFamilyModifier = {
  primary: () => css`
    font-family: 'Work Sans';
  `,
  secondary: () => css`
    font-family: 'Rubik';
  `
}

const weightModifier = {
  light: () => css`
    font-weight: 400;
  `,
  normal: () => css`
    font-weight: 500;
  `,
  bold: () => css`
    font-weight: 600;
  `
}

export const StyledTypography = styled.h1<TypographyProps>`
  ${({ color, size, family, weight }) => css`
    ${!!size && sizeModifiers[size]}
    ${!!family && fontFamilyModifier[family]}
    ${!!color && colorModifier[color]}
    ${!!weight && weightModifier[weight]}
  `}
`
