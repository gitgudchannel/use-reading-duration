import { useState, useEffect } from 'react';

const useReadingTime = (text = '', wordsPerMinute = 200) => {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const words = text.split(' ').length;
    const time = Math.ceil(words / wordsPerMinute);
    setReadingTime(time);
  }, [text, wordsPerMinute]);

  return readingTime;
};

export default useReadingTime;
