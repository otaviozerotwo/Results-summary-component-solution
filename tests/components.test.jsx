// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { useSummaryData } from '../src/hooks/useSummaryData';
import SummaryCard from '../src/components/MainCard/SummaryCard';
import SummaryItem from '../src/components/MainCard/SummaryCard/SummaryItem';

vi.mock('../src/hooks/useSummaryData', () => ({
  useSummaryData: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});

describe('SummaryCard', () => {
  it('displays the four categories with their respective scores', () => {
    const data = [
      {
        "category": "Reaction",
        "score": 80,
        "icon": "/assets/images/icon-reaction.svg",
        "color": "red"
      },
      {
        "category": "Memory",
        "score": 92,
        "icon": "/assets/images/icon-memory.svg",
        "color": "yellow"
      },
      {
        "category": "Verbal",
        "score": 61,
        "icon": "/assets/images/icon-verbal.svg",
        "color": "green"
      },
      {
        "category": "Visual",
        "score": 73,
        "icon": "/assets/images/icon-visual.svg",
        "color": "blue"
      }
    ];

    useSummaryData.mockReturnValue({
      data,
      isLoading: false,
      error: null,
    });

    render(<SummaryCard />);

    const list = screen.getByRole('list');
    const items = within(list).getAllByRole('listitem');

    expect(items).toHaveLength(4);

    for (const { category, score } of data) {
      const item = items.find((element) => within(element).queryByText(category));

      expect(item).toBeDefined();

      expect(within(item).getByText(String(score))).toBeInTheDocument();
      
      expect(screen.queryByText('Loading results...')).not.toBeInTheDocument();
    }
  });

  it('display a loading message while data is loading', () => {
    useSummaryData.mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    });

    render(<SummaryCard />);

    expect(screen.getByText('Loading results...')).toBeInTheDocument();

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('displays the error message when loading fails', () => {
    useSummaryData.mockReturnValue({
      data: [],
      isLoading: false,
      error: 'Unable to load results.',
    });

    render(<SummaryCard />);

    expect(screen.getByText('Unable to load results.')).toBeInTheDocument();

    expect(screen.queryByRole('list')).not.toBeInTheDocument();

    expect(screen.queryByText('Loading results...')).not.toBeInTheDocument();
  });
});

describe('SummaryItem', () => {
  it.each([
    ['red', 'bg-light-red/5', 'text-light-red'],
    ['yellow', 'bg-orangey-yellow/5', 'text-orangey-yellow'],
    ['green', 'bg-green-teal/5', 'text-green-teal'],
    ['blue', 'bg-cobalt-blue/5', 'text-cobalt-blue'],
  ])('applies the classes for color %s', (color, background, text) => {
    render(
      <ul>
        <SummaryItem
          category="Example"
          score={80}
          icon="/assets/images/icon-reaction.svg"
          color={color}
        />
      </ul>
    );

    expect(screen.getByRole('listitem')).toHaveClass(background);
    expect(screen.getByText('Example')).toHaveClass(text);
  });
});