import {
  CHARS_PER_TOKEN,
  WORDS_PER_A4_PAGE,
  WORDS_PER_A5_BOOK,
  WORDS_PER_TOKEN,
} from './constants';

export function textToTokenCount(textValue) {
  if (!textValue) {
    return 0;
  }
  return Math.ceil(textValue.length / CHARS_PER_TOKEN);
}

/**
 * Calculate the number of tokens required to represent the given text value.
 *
 * @param {string} textValue The text value to calculate the token count for.
 * @return {number} The number of tokens required to represent the text value.
 */
export function tokenCountToWordCount(tokenCount) {
  return tokenCount * WORDS_PER_TOKEN;
}

/**
 * Calculate the number of A4 pages and A5 novels required to represent the
 * given word count.
 *
 * @param {number} wordCount The word count to calculate the page counts for.
 * @return {Object} An object containing the number of A4 pages and A5 novels
 *   required.
 */
export function wordCountToPageCounts(wordCount) {
  const a4PageCount = wordCount / WORDS_PER_A4_PAGE;
  const a5NovelCount = wordCount / WORDS_PER_A5_BOOK;

  return {
    a4PageCount: a4PageCount,
    a5NovelCount: a5NovelCount,
  };
}

/**
 * Add A4 page count and A5 book count to the model.
 *
 * @param {Object} model The model object containing `tokens` attribute.
 * @return {Object} The updated model object with added counts.
 */
export function addCounts(model) {
  const wordCount = tokenCountToWordCount(model.tokens);
  const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

  return {
    ...model,
    a4PageCount: a4PageCount,
    a5NovelCount: a5NovelCount,
  };
}
