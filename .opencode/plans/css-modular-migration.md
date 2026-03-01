# CSS Modular Migration + Fixes — Implementation Plan

## Overview
Transition from scattered scoped styles with hardcoded colors to a modular CSS architecture with design tokens (CSS custom properties). Fix bugs, add TypeScript props, and establish a solid foundation.

## Files to Create

### 1. `src/styles/tokens.css`
### 2. `src/styles/reset.css`
### 3. `src/styles/base.css`
### 4. `src/styles/utilities.css`

## Files to Modify

### 5. `src/styles/global.css` — Rewrite as import hub
### 6. `src/pages/about.astro` — Remove redundant CSS import
### 7. `src/pages/blog.astro` — Remove redundant CSS import
### 8. `src/components/Tag.astro` — Fix HTML nesting + migrate styles
### 9. `src/layouts/MarkdownPostLayout.astro` — Fix typo + migrate styles
### 10. `src/components/ThemeToggle.astro` — Fix localStorage + migrate styles
### 11. `src/components/Social.astro` — Migrate styles + add Props
### 12. `src/components/TagList.astro` — Migrate styles + add Props
### 13. `src/components/Footer.astro` — Migrate styles
### 14. `src/components/MenuButton.astro` — Migrate styles
### 15. `src/components/Header.astro` — Migrate styles
### 16. `src/components/Navigation.astro` — Migrate styles, remove :global(.dark) blocks
### 17. `src/layouts/BaseLayout.astro` — Migrate styles + breakpoint + add Props
### 18. `src/components/BlogPostPreview.astro` — Add Props

## Status: READY FOR IMPLEMENTATION
Awaiting file edit permissions to proceed.
