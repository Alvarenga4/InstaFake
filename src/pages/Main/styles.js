/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const VerticalScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItens: 'center',
  },
})`
  background-color: #fff;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  background-color: #222;
`;
