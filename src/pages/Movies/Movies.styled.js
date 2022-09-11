import styled from 'styled-components';

export const Input = styled.input`
  width: 25%;
  height: 40px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.bold};
  border-color: ${p => p.theme.colors.blue};
  outline: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.md};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[5]}px 0;
  gap: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  transition: ${p => p.theme.transition.transform};
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
