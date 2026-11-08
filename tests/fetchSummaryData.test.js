import { afterEach, vi, describe, it, expect } from 'vitest';
import { fetchSummaryData } from '../src/services/api';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('fetchSummaryData', () => {
  it('resolves with the JSON data when the request succeeds', async () => {
    const data = [
      { "category": "Reaction", "score": 80 },
      { "category": "Memory", "score": 92 },
      { "category": "Verbal", "score": 61 },
      { "category": "Visual", "score": 73 },
    ];

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: vi.fn().mockResolvedValue(data),
    });

    vi.stubGlobal('fetch', fetchMock);

    const result = await fetchSummaryData();

    expect(result).toEqual(data);
  });

  it('rejects when the server returns an HTTP error', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchSummaryData()).rejects.toThrow('Failed to load data. HTTP 500');
  });

  it('rejects when a network error occurs', async () => {
    const fetchMock = vi.fn().mockRejectedValue(
      new TypeError('Failed to fetch')
    );

    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchSummaryData()).rejects.toThrow('Failed to fetch');
  });
});