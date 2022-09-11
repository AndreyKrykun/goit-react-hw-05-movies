import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Img = styled.img`
  width: 300px;
  margin: ${p => p.theme.space[4]}px auto;
`;

export const AdditionalLink = styled(Link)`
  color: ${p => p.theme.colors.blue};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  :first-child {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const BackLink = styled(Link)`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.blue};
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
