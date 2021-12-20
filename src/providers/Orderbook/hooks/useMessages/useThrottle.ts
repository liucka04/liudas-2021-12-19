import _, {DebouncedFunc} from 'lodash';
import {useEffect, useRef} from 'react';
import {setAsks} from '../../actions/setAsks';
import {setBids} from '../../actions/setBids';
import getThrottleTime from '../../actions/utils/getThrottleTime';

export const useThrottle = () => {
  const throttledSetAsksRef = useRef<null | DebouncedFunc<typeof setAsks>>(
    null,
  );
  const throttledSetBidsRef = useRef<null | DebouncedFunc<typeof setBids>>(
    null,
  );

  useEffect(() => {
    (async () => {
      const throttleTime = await getThrottleTime();

      throttledSetBidsRef.current = _.throttle(setBids, throttleTime);
      throttledSetAsksRef.current = _.throttle(setAsks, throttleTime);
    })();
  }, []);

  return {
    throttledSetAsks: throttledSetAsksRef.current,
    throttledSetBids: throttledSetBidsRef.current,
  };
};
