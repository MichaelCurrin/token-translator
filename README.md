# Token Translator
> Tool to understand GPT token counts in terms of words, pages, and books

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/token-translator?include_prereleases=&sort=semver&color=blue)](https://github.com/MichaelCurrin/token-translator/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Made with React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)](https://reactjs.org "Go to React homepage")

Provide your own token count or input text and compare against models by popular providers.


## Website

<div align="center">

[![View site - GH Pages](https://img.shields.io/badge/View_site-GH_Pages-2ea44f?style=for-the-badge)](https://michaelcurrin.github.io/token-translator/)

</div>


## Preview

<div align="center">
    <img src="/sample-1.png" alt="Sample first screenshot" width="400">
    <img src="/sample-2.png" alt="Sample second screenshot" width="400">
</div>


## Use-cases

- See how powerful a model is in real-world terms - choose a token count and see it translated to other metrics.
- Check which models can handle your given content - paste text and see which models would accept or reject the content.


## Notes

- The given text is not broken into actual tokens but just using a rough estimate of 100 words = 75 tokens.
- Models have limit is for input and output tokens. For the first calculator, this does not matter. For the second calculator, we assume your pasted text is your input.


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
