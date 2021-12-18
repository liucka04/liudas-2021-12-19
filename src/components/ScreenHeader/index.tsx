import React, {FC} from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';

type Props = {
  title: string;
};

export const ScreenHeader: FC<Props> = ({title}) => {
  return (
    <Box marginX={-6} paddingX={6} paddingY={2}>
      <Text fontSize="lg" fontWeight={700}>
        {title}
      </Text>
    </Box>
  );
};
