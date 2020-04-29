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
  background-color: #fff;
  margin-top: 20;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Col = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoxProfileInfo = styled.View.attrs({
  paddingHorizontal: 20,
})`
  background-color: #fff;
  padding-top: 10;
  padding-bottom: 10;
`;

export const ImageView = styled.View`
  border-width: 2;
  border-color: #f00;
  height: 50;
  width: 50;
  border-bottom-left-radius: 80;
  border-bottom-right-radius: 80;
  border-top-right-radius: 80;
  border-top-left-radius: 80;
  overflow: hidden;
`;

export const ProfileImage = styled.Image`
  height: 50;
  width: 50;
`;

export const LabelProfile = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: #000;
  margin-left: 20;
`;

export const ImageContentView = styled.View`
  height: 300;
  width: 100%;
  background-color: #fff;
`;

export const ImageContent = styled.Image`
  height: 300;
  width: 100%;
`;
