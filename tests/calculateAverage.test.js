import { describe, it, expect } from 'vitest';
import { calculateAverage } from '../src/utils/calculateAverage';

describe('calculateAverage', () => {
  it('calculates the average of the received scores', () => {
    const values = [
      { score: 60 },
      { score: 70 },
      { score: 80 },
      { score: 90 },
    ];

    const result = calculateAverage(values);

    expect(result).toBe(75);
  });

  it('returns zero when the array is empty', () => {
    const values = [];

    const result = calculateAverage(values);

    expect(result).toBe(0);
  });

  it('returns zero when no arguments is provided', () => {
    const result = calculateAverage();

    expect(result).toBe(0);
  });

  it('returns zero when all scores are zero', () => {
    const values = [
      { score: 0 },
      { score: 0 },
      { score: 0 },
      { score: 0 },
    ];

    const result = calculateAverage(values);

    expect(result).toBe(0);
  });

  it('rounds the decimal value down', () => {
    const values = [
      { score: 70 },
      { score: 71 },
      { score: 72 },
      { score: 74 },
    ];

    const result = calculateAverage(values);

    expect(result).toBe(71);
  });

  it('calculates average when array size is different of four', () => {
    const values = [
      { score: 20 },
      { score: 40 },
    ];

    const result = calculateAverage(values);

    expect(result).toBe(30);
  });
});