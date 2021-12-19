import _ from 'lodash';
import {useEffect, useRef} from 'react';
import {setDeltaMessage} from '../actions/setDeltaMessage';
import getThrottleTime from '../actions/utils/getThrottleTime';

export const useThrottle = () => {
  const throttledSetDeltaMessageRef = useRef<null | Function>(null);

  useEffect(() => {
    (async () => {
      const throttleTime = await getThrottleTime();

      throttledSetDeltaMessageRef.current = _.throttle(
        setDeltaMessage,
        throttleTime,
      );
    })();
  }, []);

  return {throttledSetDeltaMessage: throttledSetDeltaMessageRef.current};
};
