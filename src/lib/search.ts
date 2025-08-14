// TODO: 之後接 Fuse.js；目前先回傳空結果以免引用時爆錯
export interface SearchItem {
  title: string;
  summary?: string;
  url: string;
  tags?: string[];
}

export async function searchLocal(_q: string): Promise<SearchItem[]> {
  return [];
}
