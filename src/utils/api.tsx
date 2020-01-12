export async function callApi({ method, url, data, headers }: any) {
  const res = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(data),
  });
  return res.json();
}
