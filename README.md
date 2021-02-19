# prefetch-link-js
Create [prefetch tag](https://developer.mozilla.org/en-US/docs/Glossary/Prefetch#prefetch_attribute_value) when onmouseenter event is triggered on the a tag.
It possible to make fast transitioning on web pages.

For example...

```javascript
const prefetchLink = new PrefetchLink;
document.querySelectorAll('a').forEach(a => prefetchLink.addEventListener(a));
```
