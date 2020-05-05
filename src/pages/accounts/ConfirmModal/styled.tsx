import styled from "styled-components";

export const Header = styled.header`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-bottom: 0.8125rem;
`;

export const Content = styled.section`
  margin-bottom: 1.375rem;

  p {
    font-size: 0.8125rem;
    line-height: 1.5rem;
    margin-bottom: 0.625rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  border: 0;
  background: none;
  cursor: pointer;
  white-space: nowrap;
  margin-right: 1.25rem;

  &:focus {
    outline: none;
  }
`;
