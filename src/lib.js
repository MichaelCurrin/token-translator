import {
  CHARS_PER_TOKEN,
  WORDS_PER_A4_PAGE,
  WORDS_PER_A5_BOOK,
  WORDS_PER_TOKEN,
} from "./constants";

export function textToTokenCount(textValue) {
  if (!textValue) {
    return 0
  }
  return Math.ceil(textValue.length / CHARS_PER_TOKEN);
}

export function tokenCountToWordCount(tokenCount) {
  return tokenCount * WORDS_PER_TOKEN;
}

export function wordCountToPageCounts(wordCount) {
  const a4PageCount = wordCount / WORDS_PER_A4_PAGE;
  const a5NovelCount = wordCount / WORDS_PER_A5_BOOK;

  return {
    a4PageCount: a4PageCount,
    a5NovelCount: a5NovelCount,
  };
}

export function addCounts(model) {
  const wordCount = tokenCountToWordCount(model.tokens);
  const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

  return {
    ...model,
    wordCount: wordCount,
    a4PageCount: a4PageCount,
    a5NovelCount: a5NovelCount,
  };
}
