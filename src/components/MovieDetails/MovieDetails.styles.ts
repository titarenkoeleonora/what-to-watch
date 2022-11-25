import { css } from 'styled-components';

import { styled } from '../../styles';

interface MovieDetailsWrapperProps {
  backgroundImage: string;
}

const textDefaultStyles = css`
  padding: 0;
  margin: 0;
`;

export const MovieDetailsWrapper = styled.div<MovieDetailsWrapperProps>(
  ({ theme, backgroundImage }) => css`
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    width: 100%;
    height: auto;
    background: rgba(0, 0, 0, 0.7) url(${backgroundImage});
    background-blend-mode: darken;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;

    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: 60px 80px;
      gap: 60px;
      height: 100vh;
    }
  `,
);

export const DetailsWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      flex-direction: row;
    }
  `,
);

export const Poster = styled.img(
  ({ theme }) => css`
    width: 100%;
    max-width: 300px;
    height: auto;

    @media (min-width: ${theme.breakpoints.tablet}) {
      max-width: 400px;
    }
  `,
);

export const InfoWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    color: ${theme.colors.backgroundPrimary};

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 525px;
    }
  `,
);

export const Name = styled.p(
  ({ theme }) => css`
    ${textDefaultStyles}

    margin-bottom: 10px;
    font-style: normal;
    font-weight: 700;

    font-size: 40px;
    line-height: 50px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 50px;
      line-height: 60px;
    }
  `,
);

export const AdditionalInfoWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

export const ReleaseDate = styled.p`
  ${textDefaultStyles}

  padding: 10px;
  background: rgba(255, 255, 255, 0.24);
  border-radius: 8px;
`;

export const Rating = styled.p`
  ${textDefaultStyles}

  padding: 10px;
  background: rgba(255, 255, 255, 0.24);
  border-radius: 8px;
`;
export const Overview = styled.p`
  ${textDefaultStyles}

  margin-bottom: 25px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
export const Genres = styled.p`
  ${textDefaultStyles}
`;
