import { css } from 'styled-components';

import { styled } from '../../styles';

export const HomepageWrapper = styled.div(
  ({ theme }) => css`
    position: relative;
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: 30px;
    }
  `,
);

export const ButtonUp = styled.button`
  position: fixed;
  margin-left: calc(100% - 50px);
`;
