import {Platform} from 'react-native';
import {getTotalMemory} from 'react-native-device-info';

const isAndroid = Platform.OS === 'android';

const bytesToGigaBytes = ({bytes}: {bytes: number}) => {
  return Math.round(bytes * 1000000000);
};

const getThrottleTime = async () => {
  const memoryBytes = await getTotalMemory();
  const memoryGb = bytesToGigaBytes({bytes: memoryBytes});

  if (memoryGb < 4) {
    return 1500;
  }

  if (isAndroid) {
    return 1250;
  }

  if (memoryGb < 8) {
    return 1000;
  }

  return 500;
};

export default getThrottleTime;
