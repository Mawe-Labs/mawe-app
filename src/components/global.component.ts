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

export const CircleAddedItem = styled.TouchableOpacity<CircleProps>`
  position: absolute;
  bottom: ${props => `${props.bottom}%`};
  right: 0;
  margin-right: 15px;
  padding: 25px;
  background-color: ${colors.info};
  border-radius: 50px;
`;
