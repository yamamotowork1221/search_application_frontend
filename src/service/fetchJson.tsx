export const fetchJson = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  if (!response.ok) {
    const errorText = await response.text(); // レスポンスボディのエラーメッセージを取得
    throw new Error(`データの取得に失敗しました: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data;
};