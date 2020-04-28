/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Container,
  HorizontalScroll,
  Box,
  ViewAuthImage,
  ViewImage,
  StoryImage,
  AuthLabelStory,
  LabelStory,
} from './styles';

export default function Stories() {
  return (
    <Container>
      <HorizontalScroll
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Box>
          <ViewAuthImage>
            <StoryImage
              resizeMode="cover"
              source={{ uri: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/p960x960/93435468_2586634224775241_1860646099677609984_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=lK0wxtD8lE8AX-sKGDx&_nc_ht=scontent.fsjk1-1.fna&_nc_tp=6&oh=9cb7fd1f14c6f22784a8524b6edc8230&oe=5ECD6F5D' }}
            />
          </ViewAuthImage>
          <AuthLabelStory>Seu story</AuthLabelStory>
        </Box>

        <Box>
          <ViewImage>
            <StoryImage
              resizeMode="cover"
              source={{ uri: 'https://i.pinimg.com/originals/aa/08/13/aa08139312f6d277bf8564fbc47571b6.jpg' }}
            />
          </ViewImage>
          <LabelStory>juuh_</LabelStory>
        </Box>

        <Box>
          <ViewImage>
            <StoryImage
              resizeMode="cover"
              source={{ uri: 'https://www.uniempresarial.edu.co/blog/wp-content/uploads/2017/11/tengo-el-perfil-para-estudiar-MBA.jpg.jpeg' }}
            />
          </ViewImage>
          <LabelStory>fellipeh</LabelStory>
        </Box>

        <Box>
          <ViewImage>
            <StoryImage
              resizeMode="cover"
              source={{ uri: 'https://cdn-images-1.medium.com/fit/c/200/200/1*atXAWA8gjAL4bq_au5O-Vw.jpeg' }}
            />
          </ViewImage>
          <LabelStory>@nelson_</LabelStory>
        </Box>

        <Box>
          <ViewImage>
            <StoryImage
              resizeMode="cover"
              source={{ uri: 'https://www.wefashiontrends.com/wp-content/uploads/2019/03/foto-perfil-pose-com-lingua-pra-fora.jpg' }}
            />
          </ViewImage>
          <LabelStory>feeh_souza</LabelStory>
        </Box>

        <Box>
          <ViewImage>
            <StoryImage
              resizeMode="cover"
              source={{ uri: 'https://1.bp.blogspot.com/-MhWNihwWr2M/XXtJx1RLAuI/AAAAAAAADSE/RqffvXxfd3IKUQZ2Sr8DJa_XWBfkiYw5QCNcBGAsYHQ/s640/Screenshot_20190912-000604_Multi%2BParallel-min.jpg' }}
            />
          </ViewImage>
          <LabelStory>zuuh_02</LabelStory>
        </Box>

        <Box>
          <ViewImage>
            <StoryImage
              resizeMode="cover"
              source={{ uri: 'https://kprofiles.com/wp-content/uploads/2019/12/20019643.jpg' }}
            />
          </ViewImage>
          <LabelStory>@tay_nohein</LabelStory>
        </Box>
      </HorizontalScroll>
    </Container>
  )
}
