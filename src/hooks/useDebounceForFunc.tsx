import { useRef } from 'react';

interface IDebounceFuncProps {
  fn: () => void;
  delay?: number;
}

const useDebounceFunc = ({ fn, delay = 200 }: IDebounceFuncProps) => {
  const setTimeoutCodeRef = useRef<NodeJS.Timeout>();

  const debounceHandler = () => {
    if (setTimeoutCodeRef?.current) {
      clearTimeout(setTimeoutCodeRef?.current);
    }

    const timeoutCode = setTimeout(() => {
      fn();
    }, delay);

    setTimeoutCodeRef.current = timeoutCode;
  };

  return { debounceHandler };
};

export default useDebounceFunc;
