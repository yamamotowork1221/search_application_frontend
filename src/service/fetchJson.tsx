export const fetchJson = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  });

  if (!response.ok) {
    const errorText = await response.text(); 
    throw new Error(`データの取得に失敗しました: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data;
};