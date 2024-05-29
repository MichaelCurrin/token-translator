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

  test('should return 0 when token count is 0', () => {
    const tokenCount = 0;
    const expectedWordCount = 0;

    const result = tokenCountToWordCount(tokenCount)
    expect(result).toBe(expectedWordCount);
  });

  test('should handle large token counts correctly', () => {
    const tokenCount = 1000000;
    const expectedWordCount = tokenCount * WORDS_PER_TOKEN;

    const result = tokenCountToWordCount(tokenCount)
    expect(result).toBe(expectedWordCount);
  });

  test('should handle floating point token counts correctly', () => {
    const tokenCount = 10.5;
    const expectedWordCount = tokenCount * WORDS_PER_TOKEN;

    const result = tokenCountToWordCount(tokenCount)
    expect(result).toBe(expectedWordCount);
  });

  test('should handle negative token counts correctly', () => {
    const tokenCount = -10;
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

  test('should handle zero word count', () => {
    const wordCount = 0;
    const expectedA4PageCount = 0;
    const expectedA5NovelCount = 0;

    const result = wordCountToPageCounts(wordCount);
    expect(result.a4PageCount).toBe(expectedA4PageCount);
    expect(result.a5NovelCount).toBe(expectedA5NovelCount);
  });

  test('should handle large word counts correctly', () => {
    const wordCount = 1000000;
    const expectedA4PageCount = wordCount / WORDS_PER_A4_PAGE;
    const expectedA5NovelCount = wordCount / WORDS_PER_A5_BOOK;

    const result = wordCountToPageCounts(wordCount);
    expect(result.a4PageCount).toBeCloseTo(expectedA4PageCount);
    expect(result.a5NovelCount).toBeCloseTo(expectedA5NovelCount);
  });

  test('should handle floating point word counts correctly', () => {
    const wordCount = 1050.5;
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
      ...model,
      wordCount: wordCount,
      a4PageCount: a4PageCount,
      a5NovelCount: a5NovelCount,
    };

    expect(addCounts(model)).toEqual(expectedModel);
  });

  test('should handle model with zero tokens', () => {
    const model = { tokens: 0 };
    const wordCount = tokenCountToWordCount(model.tokens);
    const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

    const expectedModel = {
      ...model,
      wordCount: wordCount,
      a4PageCount: a4PageCount,
      a5NovelCount: a5NovelCount,
    };

    expect(addCounts(model)).toEqual(expectedModel);
  });

  test('should handle model with large token count', () => {
    const model = { tokens: 1000000 };
    const wordCount = tokenCountToWordCount(model.tokens);
    const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

    const expectedModel = {
      ...model,
      wordCount: wordCount,
      a4PageCount: a4PageCount,
      a5NovelCount: a5NovelCount,
    };

    expect(addCounts(model)).toEqual(expectedModel);
  });

  test('should handle model with floating point token count', () => {
    const model = { tokens: 1050.5 };
    const wordCount = tokenCountToWordCount(model.tokens);
    const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

    const expectedModel = {
      ...model,
      wordCount: wordCount,
      a4PageCount: a4PageCount,
      a5NovelCount: a5NovelCount,
    };

    expect(addCounts(model)).toEqual(expectedModel);
  });

  test('should handle model with negative token count', () => {
    const model = { tokens: -100 };
    const wordCount = tokenCountToWordCount(model.tokens);
    const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

    const expectedModel = {
      ...model,
      wordCount: wordCount,
      a4PageCount: a4PageCount,
      a5NovelCount: a5NovelCount,
    };

    expect(addCounts(model)).toEqual(expectedModel);
  });
});
