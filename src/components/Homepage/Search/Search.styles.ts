import { css } from 'styled-components';

import { styled } from '../../../styles';

export const SearchForm = styled.form(
  ({ theme }) => css`
    display: flex;
    gap: 20px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 600px;
    }
  `,
);

export const SearchInput = styled.input(
  ({ theme }) => css`
    padding: 6px 10px;

    width: 100%;
    height: 36px;

    border: 1px solid ${theme.colors.textPrimary};
    border-radius: 6px;

    color: ${theme.colors.textPrimary};
    font-size: 12px;
    line-height: 24px;
    outline: none;
    text-transform: uppercase;

    &:hover,
    &:focus {
      border-width: 2px;
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 525px;
    }
  `,
);
