import styled from 'styled-components/native';
import {themes} from '../styles/themes.styles';

type SpacerProps = {
  size: number;
};

type CircleProps = {
  bottom: number;
};

const {colors} = themes;

export const Spacer = styled.View<SpacerProps>`
  height: ${(props) => `${props.size}px`};
`;

export const Flex = styled.View`
  flex-direction: row;
  align-items: center;
`;
