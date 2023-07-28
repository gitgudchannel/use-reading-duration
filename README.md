
# use-reading-duration

A custom React hook for estimating the reading duration of a text.
## Installation

Install `use-reading-duration` using npm:

```bash
npm install use-reading-duration
```

Or with yarn:

```bash
yarn add use-reading-duration
```

## Usage

Here is a simple example of how to use `use-reading-duration`:

```jsx
import React from 'react';
import useReadingTime from 'use-reading-duration';

const MyComponent = () => {
  const text = "Your long text goes here...";
  const wordsPerMinute = 250;
  const readingTime = useReadingTime(text, wordsPerMinute);

  return (
    <div>
      <p>Estimated reading time: {readingTime} minutes</p>
      <p>{text}</p>
    </div>
  );
};
```

In this example, `useReadingTime` is called with two arguments: the text to be read and the average reading speed in words per minute. The `wordsPerMinute` parameter is optional, the default value is 200.

## License

This project is licensed under the AGPL-3.0
