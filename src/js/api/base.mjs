export const apiEndpoint = endpoint => {
  if (typeof endpoint !== 'string') {
    throw new error('The API endpoint has to be a string');
  }

  const baseUrl = 'https://api.noroff.dev/api/v1';
  const fullUrl = `${baseUrl}/${endpoint}`;

  return fullUrl;
};
