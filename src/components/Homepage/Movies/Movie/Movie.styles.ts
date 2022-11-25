import { css } from 'styled-components';

import StarIcon from '../../../../images/starIcon.svg';
import { styled } from '../../../../styles';

const secondaryTextStyles = css`
  margin: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const MovieWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: fit-content;
  cursor: pointer;
  list-style: none;

  &:hover,
  &:focus {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

export const Poster = styled.img`
  margin-bottom: 12px;
  width: 100%;
  height: 315px;
  object-fit: cover;
`;

export const DetailsWrapper = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const Name = styled.p(
  ({ theme }) => css`
    margin: 0;
    grid-column-start: 1;
    grid-column-end: 3;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: ${theme.colors.textPrimary};
  `,
);

export const Rating = styled.p`
  position: relative;
  padding-left: 20px;
  justify-self: end;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 16px;
    height: 16px;
    background-image: url(${StarIcon});
  }

  ${secondaryTextStyles}
`;

export const Text = styled.p`
  ${secondaryTextStyles}
`;
