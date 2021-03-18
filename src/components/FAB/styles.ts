import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25d366;
  transition: all 0.2s linear;

  &:hover {
    opacity: 0.6;
  }
`;
