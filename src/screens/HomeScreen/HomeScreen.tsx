import React from 'react';
import Background from './patterns/Background/Background';
import Menu from './patterns/Menu/Menu';
import Box from '@src/components/Box/Box';
import Feed from './Feed/Feed';
import Text from '@src/components/Text/Text';

export default function HomeScreen() {
  return (
    <Box tag="main">
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text>Ultimas Atualizações</Text>
        <Feed.Posts />
      </Feed>
    </Box>
  );
}