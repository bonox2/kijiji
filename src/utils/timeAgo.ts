export const timeAgo = (date) => {
  //@ts-ignore
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + ' yrs';
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months';
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days';
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours';
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes';
  }

  if (seconds < 10) return 'just now';

  return Math.floor(seconds) + ' seconds';
};
