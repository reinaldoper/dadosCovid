const ApiCovi = async () => {
  const url = 'https://covid19-brazil-api.vercel.app/api/report/v1';
  const response = await fetch(url);
  const result = await response.json();
  return result.data;
}

export default ApiCovi;