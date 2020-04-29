/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { VerticalScroll } from './styles';

import Stories from '../../components/Stories';
import Feed from '../../components/Feed';

export default function Main() {
  return (
    <>
      <VerticalScroll>
        <Stories />
        <Feed />
      </VerticalScroll>
    </>
  )
};
