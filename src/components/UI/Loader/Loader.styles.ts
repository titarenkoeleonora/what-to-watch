import { css, keyframes } from 'styled-components';

import { styled } from '../../../styles';

export const LoaderWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const spin = keyframes`
 0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderIcon = styled.div(
  ({ theme }) => css`
    border: 4px solid ${theme.colors.textSecondary};
    border-top: 4px solid ${theme.colors.textPrimary};
    border-radius: 50%;
    width: 35px;
    height: 35px;
    animation: ${spin} 2s linear infinite;
  `,
);

export const Text = styled.p(
  ({ theme }) => css`
    margin: 0;
    color: ${theme.colors.textSecondary};
    text-transform: uppercase;
  `,
);
