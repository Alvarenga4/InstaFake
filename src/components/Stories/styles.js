import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFF;
  align-items: center;
  justify-content: center;
  height: 100;
  margin-top: 10;
`;

export const HorizontalScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItens: 'center',
  },
})``;

export const Box = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ViewAuthImage = styled.View`
  border-width: 2;
  border-color: #c8c8c8;
  height: 70;
  width: 70;
  margin-left: 20;
  margin-top: 8;
  border-bottom-left-radius: 80;
  border-bottom-right-radius: 80;
  border-top-right-radius: 80;
  border-top-left-radius: 80;
  overflow: hidden;
`;

export const ViewImage = styled.View`
  border-width: 2;
  border-color: #F00;
  height: 70;
  width: 70;
  margin-left: 20;
  margin-top: 8;
  border-bottom-left-radius: 80;
  border-bottom-right-radius: 80;
  border-top-right-radius: 80;
  border-top-left-radius: 80;
  overflow: hidden;
`;

export const StoryImage = styled.Image`
  height: 80;
  width: 80;
`;

export const AuthLabelStory = styled.Text`
  color: #7D7C7C;
  font-size: 14;
  margin-left: 20;
  margin-top: 5;
`;

export const LabelStory = styled.Text`
  color: #000;
  font-size: 14;
  margin-left: 20;
  margin-top: 5;
`;
