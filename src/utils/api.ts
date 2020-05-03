import { isObject } from './common';

export function getQueryString(queryParams: {
  [name: string]: string | number;
}): string {
  return Object.keys(queryParams)
    .map(
      (k) => encodeURIComponent(k) + '=' + encodeURIComponent(queryParams[k])
    )
    .join('&');
}

export async function callApi({
  method,
  url,
  body,
  headers,
  queryParams,
}: any) {
  if (isObject(queryParams)) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + getQueryString(queryParams);
  }

  const res = await fetch(url, {
    method,
    headers,
    body:
      headers && headers['content-type'] === 'application/x-www-form-urlencoded'
        ? body
        : JSON.stringify(body),
  });
  return res.json();
}
