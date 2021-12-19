import {getTotalMemory} from 'react-native-device-info';

const bytesToGigaBytes = ({bytes}: {bytes: number}) => {
  return Math.round(bytes * 1000000000);
};

const getThrottleTime = async () => {
  const memoryBytes = await getTotalMemory();
  const memoryGb = bytesToGigaBytes({bytes: memoryBytes});

  if (memoryGb < 8) {
    return 1000;
  }

  if (memoryGb < 4) {
    return 1500;
  }

  return 500;
};

export default getThrottleTime;
