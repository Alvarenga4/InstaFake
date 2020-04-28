import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  paddingHorizontal: 20,
})`
  background-color: #000;
  align-items: center;
  justify-content: center;
  height: 100;
`;

export const HorizontalScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItens: 'center',
  },
})``;

export const ViewImage = styled.View`
  background-color: #FFF;
  border-width: 1;
  border-color: #F00;
  height: 80;
  width: 80;
  margin-left: 20;
  margin-top: 8;
  border-radius: 80;
`;
