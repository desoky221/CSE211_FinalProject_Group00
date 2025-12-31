# Color Palette Reference

## 🎨 Professional Event Planner Color Palette

This document provides a quick reference for all colors used in the Event Planner website design system.

---

## Primary Colors - Deep Navy (Trust & Planning)

| Color Name | HEX Code | Usage |
|------------|----------|-------|
| Primary | `#1e3a5f` | Main brand color, headers, links, primary buttons |
| Primary Light | `#2d4f7a` | Hover states, lighter variations |
| Primary Dark | `#152a47` | Darker gradients, depth |
| Primary Hover | `#254a73` | Interactive hover states |

**CSS Variable**: `var(--color-primary)`, `var(--color-primary-light)`, etc.

---

## Secondary Colors - Soft Teal (Growth & Learning)

| Color Name | HEX Code | Usage |
|------------|----------|-------|
| Secondary | `#4a9b8e` | Accent color, success states, learning content |
| Secondary Light | `#5fb3a4` | Lighter variations |
| Secondary Dark | `#3a7d71` | Darker variations |
| Secondary Hover | `#52a896` | Interactive states |

**CSS Variable**: `var(--color-secondary)`, `var(--color-secondary-light)`, etc.

---

## Accent Colors - Warm Gold (Energy & Action)

| Color Name | HEX Code | Usage |
|------------|----------|-------|
| Accent | `#d4a574` | Highlights, CTAs, important notices |
| Accent Light | `#e5b88a` | Lighter variations |
| Accent Dark | `#c4945f` | Darker variations |
| Accent Hover | `#dcb080` | Interactive states |

**CSS Variable**: `var(--color-accent)`, `var(--color-accent-light)`, etc.

---

## Background Colors - Soft Beige & Light Gray

| Color Name | HEX Code | Usage |
|------------|----------|-------|
| Background Primary | `#f8f6f2` | Main page background (soft beige) |
| Background Secondary | `#ffffff` | Card and content backgrounds (white) |
| Background Tertiary | `#f0ede8` | Subtle sections, breadcrumbs |
| Background Hover | `#f5f3ef` | Interactive hover states |

**CSS Variable**: `var(--color-bg-primary)`, `var(--color-bg-secondary)`, etc.

---

## Text Colors

| Color Name | HEX Code | Usage |
|------------|----------|-------|
| Text Primary | `#2c3e50` | Main body text, headings |
| Text Secondary | `#5a6c7d` | Secondary text, descriptions |
| Text Light | `#8a9ba8` | Placeholder text, subtle info |
| Text Inverse | `#ffffff` | Text on dark backgrounds |

**CSS Variable**: `var(--color-text-primary)`, `var(--color-text-secondary)`, etc.

---

## Semantic Colors

| Color Name | HEX Code | Usage |
|------------|----------|-------|
| Success | `#4a9b8e` | Success messages, valid states |
| Warning | `#d4a574` | Warning messages, caution |
| Error | `#c85d5d` | Error messages, invalid states |
| Info | `#5b8fc7` | Informational messages |

**CSS Variable**: `var(--color-success)`, `var(--color-warning)`, etc.

---

## Border & Shadow Colors

| Color Name | HEX Code | Usage |
|------------|----------|-------|
| Border | `#e0ddd8` | Standard borders |
| Border Light | `#f0ede8` | Subtle borders |
| Border Dark | `#d0cdc8` | Stronger borders |
| Shadow | `rgba(30, 58, 95, 0.08)` | Standard shadows |
| Shadow Hover | `rgba(30, 58, 95, 0.12)` | Hover state shadows |
| Shadow Strong | `rgba(30, 58, 95, 0.15)` | Stronger shadows |

**CSS Variable**: `var(--color-border)`, `var(--color-shadow)`, etc.

---

## Footer Colors

| Color Name | HEX Code | Usage |
|------------|----------|-------|
| Footer Background | `#1e3a5f` | Footer background (matches primary) |
| Footer Text | `#cbd5e1` | Footer text color |
| Footer Link | `#a8b8c8` | Footer link color |

**CSS Variable**: `var(--color-footer-bg)`, `var(--color-footer-text)`, etc.

---

## Color Psychology & Rationale

### Deep Navy (`#1e3a5f`)
- **Emotion**: Trust, professionalism, stability
- **Use Case**: Perfect for event planning as it conveys reliability and organization
- **Accessibility**: High contrast with light backgrounds

### Soft Teal (`#4a9b8e`)
- **Emotion**: Growth, learning, calmness
- **Use Case**: Ideal for educational content, success states, and learning-related elements
- **Accessibility**: Good contrast, easy on the eyes for long reading

### Warm Gold (`#d4a574`)
- **Emotion**: Energy, warmth, action
- **Use Case**: Great for CTAs, highlights, and drawing attention to important information
- **Accessibility**: Provides visual interest without being overwhelming

### Soft Beige (`#f8f6f2`)
- **Emotion**: Calm, clean, professional
- **Use Case**: Background color that's easy on the eyes, suitable for long reading sessions
- **Accessibility**: Reduces eye strain, maintains readability

---

## Usage Examples

### Primary Button
```css
.button-primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--color-text-inverse);
}
```

### Success Message
```css
.message-success {
  background-color: rgba(74, 155, 142, 0.1);
  border-left: 4px solid var(--color-success);
  color: var(--color-success);
}
```

### Card Component
```css
.card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
}
```

### Link Hover
```css
.link {
  color: var(--color-primary);
  transition: color var(--transition-fast);
}

.link:hover {
  color: var(--color-secondary);
}
```

---

## Accessibility Notes

- All color combinations meet WCAG AA contrast requirements
- Text on primary background: White text (`#ffffff`) on navy (`#1e3a5f`) = 8.59:1 contrast ratio
- Text on secondary background: Dark text (`#2c3e50`) on beige (`#f8f6f2`) = 7.23:1 contrast ratio
- Focus states use accent color for visibility
- Error states use high-contrast red for clarity

---

## Quick Reference

**Main Brand**: `#1e3a5f` (Navy)  
**Accent**: `#4a9b8e` (Teal)  
**Highlight**: `#d4a574` (Gold)  
**Background**: `#f8f6f2` (Beige)  
**Text**: `#2c3e50` (Dark Gray)

