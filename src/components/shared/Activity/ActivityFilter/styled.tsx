import styled from "styled-components";

export const ActivityFilterContainer = styled.div`
  background: ${props => props.theme.colors.tertiary};
  border-radius: 1.25rem;
  font-size: 0.875rem;
  margin: 1.5625rem 1.25rem;

  @media (min-width: ${props => props.theme.breakpoints.md}}) {
    margin: 2.5rem 1.875rem 1.25rem;
  }
`;

export const ShowAllButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 2.5rem;
  background: none;
  border: 0;
  text-align: left;
  padding: 0 1.25rem;

  &:focus {
    outline: none;
  }

  svg {
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    top: 0.875rem;
    right: 1.125rem;
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Search = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 2.5rem;
    background: none;
    border: 0;
    text-align: left;
    padding: 0 1.25rem;

    &:focus {
      outline: none;
    }
  }

  svg {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0.75rem;
    right: 0.938rem;
  }
`;
