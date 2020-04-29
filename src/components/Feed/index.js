/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  VerticalScroll,
  Container,
  Row,
  Col,
  BoxProfileInfo,
  ProfileImage,
  LabelProfile,
  ImageView,
  ImageContentView,
  ImageContent,
  ActionsSession,
} from './styles';

export default function Feed() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <VerticalScroll
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <BoxProfileInfo>
            <Row>
              <Col>
                <ImageView>
                  <ProfileImage
                    resizeMode="contain"
                    source={{ uri: 'https://www.uniempresarial.edu.co/blog/wp-content/uploads/2017/11/tengo-el-perfil-para-estudiar-MBA.jpg.jpeg' }}
                  />
                </ImageView>
              </Col>
              <Col>
                <LabelProfile>feliipeh</LabelProfile>
              </Col>
            </Row>
          </BoxProfileInfo>

          <ImageContentView>
            <ImageContent
              resizeMode="contain"
              source={{ uri: 'https://static.portaldacidade.com/unsafe/1150x767/https://s3.amazonaws.com/toledo.portaldacidade.com/img/news/2019-11/exames-para-acesso-ao-parque-das-aguas-serao-realizados-no-dia-23-5dc3216c2952a.jpg' }}
            />
          </ImageContentView>

          <ActionsSession>
            <Row>
              <Col>
               <Icon
                  name="heart-o"
                  size={28}
                  color={'#000'}
                />
              </Col>
              <Col>
               <Icon
                  style={{ marginLeft: 20, }}
                  name="comment-o"
                  size={28}
                  color={'#000'}
                />
              </Col>
              <Col>
               <Icon
                  style={{ marginLeft: 20, }}
                  name="paper-plane-o"
                  size={28}
                  color={'#000'}
                />
              </Col>
            </Row>
          </ActionsSession>
        </Container>

        <Container>
          <BoxProfileInfo>
            <Row>
              <Col>
                <ImageView>
                  <ProfileImage
                    resizeMode="contain"
                    source={{ uri: 'https://1.bp.blogspot.com/-MhWNihwWr2M/XXtJx1RLAuI/AAAAAAAADSE/RqffvXxfd3IKUQZ2Sr8DJa_XWBfkiYw5QCNcBGAsYHQ/s640/Screenshot_20190912-000604_Multi%2BParallel-min.jpg' }}
                  />
                </ImageView>
              </Col>
              <Col>
                <LabelProfile>zuuh_02</LabelProfile>
              </Col>
            </Row>
          </BoxProfileInfo>

          <ImageContentView>
            <ImageContent
              resizeMode="contain"
              source={{ uri: 'https://sofitel.accor.com/destinations/imagerie/united-arab-emirates-1400x788-39b1_1400x788.jpg' }}
            />
          </ImageContentView>

          <ActionsSession>
            <Row>
              <Col>
               <Icon
                  name="heart-o"
                  size={28}
                  color={'#000'}
                />
              </Col>
              <Col>
               <Icon
                  style={{ marginLeft: 20, }}
                  name="comment-o"
                  size={28}
                  color={'#000'}
                />
              </Col>
              <Col>
               <Icon
                  style={{ marginLeft: 20, }}
                  name="paper-plane-o"
                  size={28}
                  color={'#000'}
                />
              </Col>
            </Row>
          </ActionsSession>
        </Container>

        <Container>
          <BoxProfileInfo>
            <Row>
              <Col>
                <ImageView>
                  <ProfileImage
                    resizeMode="contain"
                    source={{ uri: 'https://cdn-images-1.medium.com/fit/c/200/200/1*atXAWA8gjAL4bq_au5O-Vw.jpeg' }}
                  />
                </ImageView>
              </Col>
              <Col>
                <LabelProfile>@nelson_</LabelProfile>
              </Col>
            </Row>
          </BoxProfileInfo>

          <ImageContentView>
            <ImageContent
              resizeMode="contain"
              source={{ uri: 'https://www.ibid.com.br/blog/wp-content/uploads/2016/08/business_technology1-1024x768.jpg' }}
            />
          </ImageContentView>

          <ActionsSession>
            <Row>
              <Col>
               <Icon
                  name="heart-o"
                  size={28}
                  color={'#000'}
                />
              </Col>
              <Col>
               <Icon
                  style={{ marginLeft: 20, }}
                  name="comment-o"
                  size={28}
                  color={'#000'}
                />
              </Col>
              <Col>
               <Icon
                  style={{ marginLeft: 20, }}
                  name="paper-plane-o"
                  size={28}
                  color={'#000'}
                />
              </Col>
            </Row>
          </ActionsSession>

        </Container>

      </VerticalScroll>
    </>
  )
};
