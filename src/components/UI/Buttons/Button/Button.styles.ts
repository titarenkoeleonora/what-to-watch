import { css } from 'styled-components';

import { styled } from '../../../../styles';

export const ButtonWrapper = styled.button(
  ({ theme }) => css`
    padding: 5px 20px;
    font-size: 12px;
    text-transform: uppercase;
    color: ${theme.colors.textPrimary};
    border: 1px solid ${theme.colors.textPrimary};
    border-radius: 6px;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${theme.colors.backgroundPrimary};
      border: 1px solid ${theme.colors.backgroundPrimary};
      background-color: ${theme.colors.textPrimary};
    }
  `,
);
