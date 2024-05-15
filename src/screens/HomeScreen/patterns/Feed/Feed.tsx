import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import React from 'react';

interface FeedPropos {
  children: React.ReactNode;
}

export default function Feed({ children }) {
  return (
    <Box>
      <Text>feed</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box>
      <Text>Feed Header</Text>
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Poasts</Text>
    </Box>
  );
};
