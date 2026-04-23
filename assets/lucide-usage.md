# Lucide Icons — Usage Reference

**CDN:** `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`

## Usage in HTML
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="arrow-right"></i>
<script>lucide.createIcons();</script>
```

## Usage in JSX / React
```jsx
import { ArrowRight, Github, ExternalLink, Mail } from 'lucide-react';
<ArrowRight size={16} strokeWidth={1.5} />
```

## Common Icons Used in Portfolio
- `arrow-right` — "view project" links
- `arrow-up-right` — external links
- `github` — GitHub profile link
- `linkedin` — LinkedIn link  
- `mail` — Contact email
- `external-link` — Live project link
- `code-2` — Code/tech indicator
- `layers` — Full stack label
- `menu` — Mobile nav toggle
- `x` — Close / dismiss

## Style Rules
- Size: 16px (inline text), 20px (UI elements), 24px (feature)
- Stroke width: 1.5px always
- Color: inherits from parent text color
- Never use fill style; always stroke
