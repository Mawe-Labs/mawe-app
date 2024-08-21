import styled from 'styled-components/native';

type SpacerProps = {
  size: number;
};

export const Spacer = styled.View<SpacerProps>`
  height: ${(props) => `${props.size}px`};
`;

export const Flex = styled.View`
  flex-direction: row;
  align-items: center;
`;
