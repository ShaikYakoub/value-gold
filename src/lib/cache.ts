let cache: unknown = null;
let lastFetch = 0;

export async function getCachedGoldRate<T>(
  fetcher: () => Promise<T>
): Promise<T> {
  const now = Date.now();

  if (cache !== null && now - lastFetch < 60_000) {
    return cache as T;
  }

  const freshData = await fetcher();
  cache = freshData;
  lastFetch = now;

  return freshData;
}
