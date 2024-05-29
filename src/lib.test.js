import {
  WORDS_PER_A4_PAGE,
  WORDS_PER_A5_BOOK,
  WORDS_PER_TOKEN
} from './constants';
import {
  addCounts,
  tokenCountToWordCount,
  wordCountToPageCounts
} from './lib';

describe('tokenCountToWordCount', () => {
  test('should convert token count to word count correctly', () => {
    const tokenCount = 10;
    const expectedWordCount = tokenCount * WORDS_PER_TOKEN;

    const result = tokenCountToWordCount(tokenCount)
    expect(result).toBe(expectedWordCount);
  });
});

describe('wordCountToPageCounts', () => {
  test('should convert word count to A4 page and A5 book counts correctly', () => {
    const wordCount = 1000;
    const expectedA4PageCount = wordCount / WORDS_PER_A4_PAGE;
    const expectedA5NovelCount = wordCount / WORDS_PER_A5_BOOK;

    const result = wordCountToPageCounts(wordCount);
    expect(result.a4PageCount).toBeCloseTo(expectedA4PageCount);
    expect(result.a5NovelCount).toBeCloseTo(expectedA5NovelCount);
  });
});

describe('addCounts', () => {
  test('should add word count, A4 page count, and A5 book count to the model', () => {
    const model = { tokens: 100 };
    const wordCount = tokenCountToWordCount(model.tokens);
    const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

    const expectedModel = {
      tokens: 100,
      wordCount: wordCount,
      a4PageCount: a4PageCount,
      a5NovelCount: a5NovelCount,
    };

    const result = addCounts(model)
    expect(result).toEqual(expectedModel);
  });
});
