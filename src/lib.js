import {
  WORDS_PER_A4_PAGE,
  WORDS_PER_A5_BOOK,
  WORDS_PER_TOKEN,
} from "./constants";

function roundToOneDecimal(num) {
  return Math.round(num * 10) / 10;
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
    wordCount: roundToOneDecimal(wordCount),
    a4PageCount: roundToOneDecimal(a4PageCount),
    a5NovelCount: roundToOneDecimal(a5NovelCount),
  };
}

// // User input.
// const tokenCount = 10001;
// const wordCount = tokenCountToWordCount(tokenCount);
// console.log(`Word Count: ${wordCount.toFixed(0)}`);

// const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);
// console.log(`A4 Page Count: ${a4PageCount.toFixed(1)}`);
// console.log(`A5 Novel Count: ${a5NovelCount.toFixed(1)}`);

// models = MODELS.map(addCounts)
// console.log(models)
