import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 70%;
  min-width: 12.5rem;
  margin: auto;
  padding: 1rem;
  margin: 1rem;

  @media only screen and (min-width: 600px) {
    width: 40%;
    max-width: 14.5rem;
  }
`;
