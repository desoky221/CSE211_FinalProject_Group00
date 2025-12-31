# Event Planner Website - Design System Documentation

## 🎨 Color Palette

### Primary Colors - Deep Navy (Trust & Planning)
- **Primary**: `#1e3a5f` - Main brand color, used for headers, links, and primary actions
- **Primary Light**: `#2d4f7a` - Hover states and lighter variations
- **Primary Dark**: `#152a47` - Darker variations for gradients and depth
- **Primary Hover**: `#254a73` - Interactive hover states

**Usage**: Headers, navigation, primary buttons, links, borders, and key UI elements.

### Secondary Colors - Soft Teal (Growth & Learning)
- **Secondary**: `#4a9b8e` - Accent color for growth, learning, and positive actions
- **Secondary Light**: `#5fb3a4` - Lighter variations
- **Secondary Dark**: `#3a7d71` - Darker variations
- **Secondary Hover**: `#52a896` - Interactive states

**Usage**: Secondary actions, success states, learning-related content, and complementary accents.

### Accent Colors - Warm Gold (Energy & Action)
- **Accent**: `#d4a574` - Warm, energetic color for highlights and CTAs
- **Accent Light**: `#e5b88a` - Lighter variations
- **Accent Dark**: `#c4945f` - Darker variations
- **Accent Hover**: `#dcb080` - Interactive states

**Usage**: Call-to-action buttons, highlights, important notices, and decorative elements.

### Background Colors - Soft Beige & Light Gray
- **Background Primary**: `#f8f6f2` - Main page background (soft beige)
- **Background Secondary**: `#ffffff` - Card and content backgrounds (white)
- **Background Tertiary**: `#f0ede8` - Subtle sections and breadcrumbs
- **Background Hover**: `#f5f3ef` - Interactive hover states

**Usage**: Page backgrounds, card backgrounds, form fields, and section backgrounds.

### Text Colors
- **Text Primary**: `#2c3e50` - Main body text and headings
- **Text Secondary**: `#5a6c7d` - Secondary text, descriptions, and captions
- **Text Light**: `#8a9ba8` - Placeholder text and subtle information
- **Text Inverse**: `#ffffff` - Text on dark backgrounds

### Semantic Colors
- **Success**: `#4a9b8e` - Success messages and valid states
- **Warning**: `#d4a574` - Warning messages and caution states
- **Error**: `#c85d5d` - Error messages and invalid states
- **Info**: `#5b8fc7` - Informational messages

### Border & Shadow Colors
- **Border**: `#e0ddd8` - Standard borders
- **Border Light**: `#f0ede8` - Subtle borders
- **Border Dark**: `#d0cdc8` - Stronger borders
- **Shadow**: `rgba(30, 58, 95, 0.08)` - Standard shadows
- **Shadow Hover**: `rgba(30, 58, 95, 0.12)` - Hover state shadows
- **Shadow Strong**: `rgba(30, 58, 95, 0.15)` - Stronger shadows for depth

### Footer Colors
- **Footer Background**: `#1e3a5f` - Footer background (matches primary)
- **Footer Text**: `#cbd5e1` - Footer text color
- **Footer Link**: `#a8b8c8` - Footer link color

---

## 📝 Typography

### Font Families
- **Primary Font**: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- **Heading Font**: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

### Font Sizes
- **Base**: `1rem` (16px) - Body text
- **Small**: `0.875rem` (14px) - Captions, fine print
- **Large**: `1.125rem` (18px) - Emphasized text
- **XL**: `1.25rem` (20px) - Subheadings
- **2XL**: `1.5rem` (24px) - Section headings
- **3XL**: `2rem` (32px) - Page headings
- **4XL**: `2.5rem` (40px) - Hero headings

### Font Weights
- **Normal**: `400` - Body text
- **Medium**: `500` - Emphasized text
- **Semibold**: `600` - Subheadings and labels
- **Bold**: `700` - Headings and strong emphasis

### Line Heights
- **Tight**: `1.2` - Headings
- **Normal**: `1.6` - Body text
- **Relaxed**: `1.8` - Long-form content

---

## 📐 Spacing Scale

The spacing system uses a consistent scale based on rem units:

- **XS**: `0.25rem` (4px) - Tight spacing
- **SM**: `0.5rem` (8px) - Small spacing
- **MD**: `1rem` (16px) - Medium spacing (base unit)
- **LG**: `1.5rem` (24px) - Large spacing
- **XL**: `2rem` (32px) - Extra large spacing
- **2XL**: `3rem` (48px) - Section spacing
- **3XL**: `4rem` (64px) - Major section spacing

---

## 🔲 Border Radius

- **SM**: `4px` - Small elements
- **MD**: `8px` - Standard elements (buttons, inputs)
- **LG**: `12px` - Cards and larger elements
- **XL**: `16px` - Large cards and containers
- **Full**: `9999px` - Fully rounded (pills, circles)

---

## ⚡ Transitions

- **Fast**: `0.15s ease` - Quick interactions (hover, focus)
- **Base**: `0.3s ease` - Standard transitions
- **Slow**: `0.5s ease` - Smooth, deliberate animations

---

## 🎭 Shadows

- **SM**: `0 2px 4px var(--color-shadow)` - Subtle elevation
- **MD**: `0 4px 6px var(--color-shadow), 0 10px 15px rgba(0, 0, 0, 0.03)` - Standard cards
- **LG**: `0 10px 15px var(--color-shadow-hover), 0 4px 6px rgba(0, 0, 0, 0.05)` - Elevated cards
- **XL**: `0 20px 25px var(--color-shadow-strong), 0 10px 10px rgba(0, 0, 0, 0.04)` - Modal/dialog elevation

---

## 🧩 Component Styling Guide

### Header
- Gradient background using primary colors
- Subtle overlay pattern
- Centered brand section with logo and title
- Navigation with hover effects and underline animations

### Navigation
- Semi-transparent background with backdrop blur
- Hover effects with color transitions
- Underline animation on hover
- Responsive: stacks vertically on mobile

### Buttons
- Primary buttons: Gradient background (primary colors)
- Secondary buttons: Neutral gray background
- Hover: Lift effect (translateY) and shadow increase
- Focus: Accent color outline
- Ripple effect on click

### Forms
- Inputs: 2px border, rounded corners
- Focus: Secondary color border with shadow
- Invalid: Error color border with subtle shadow
- Valid: Success color border
- Labels: Semibold, proper spacing

### Cards/Articles
- White background
- Left border accent (4px, secondary color)
- Shadow elevation
- Hover: Lift effect and border color change
- Smooth transitions

### Media (Images/Videos)
- Rounded corners
- Soft shadows
- Hover: Slight scale and shadow increase
- Maintains aspect ratio
- Responsive sizing

### Footer
- Dark gradient background (primary colors)
- Top accent border (gradient)
- Grid layout for sections
- Link hover effects with arrow animation
- Responsive: Single column on mobile

---

## 📱 Responsive Breakpoints

- **Desktop**: `> 992px` - Full layout
- **Tablet**: `768px - 992px` - Adjusted layout
- **Mobile**: `< 768px` - Stacked layout, optimized spacing
- **Small Mobile**: `< 480px` - Compact layout

---

## 🎯 Design Principles Applied

1. **Visual Hierarchy**: Clear typography scale and spacing
2. **Consistency**: CSS variables ensure consistent colors and spacing
3. **Accessibility**: Focus states, proper contrast ratios, semantic HTML
4. **Professionalism**: Clean, modern design with subtle animations
5. **Trustworthiness**: Calm color palette, clear information architecture
6. **Usability**: Large touch targets, clear feedback, intuitive navigation

---

## 🔧 BEM Naming Convention

The CSS follows BEM (Block Element Modifier) naming:

- **Block**: `.header`, `.footer`, `.button`
- **Element**: `.header__logo`, `.footer__link`
- **Modifier**: `.button--primary`, `.button--large`

Note: The current implementation uses a simplified BEM approach with descriptive class names that are easy to understand and maintain.

---

## 📦 CSS Variables Usage

All design tokens are stored as CSS variables in `:root`, making it easy to:
- Update colors globally
- Maintain consistency
- Create theme variations
- Adjust spacing and typography

Example usage:
```css
.my-component {
  background-color: var(--color-bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  color: var(--color-text-primary);
}
```

---

## 🚀 Best Practices

1. **Always use CSS variables** for colors, spacing, and typography
2. **Follow the spacing scale** for consistent layouts
3. **Use semantic colors** for states (success, error, warning)
4. **Apply transitions** for interactive elements
5. **Test responsive design** at all breakpoints
6. **Maintain accessibility** with proper focus states and contrast

---

## 📄 File Structure

- `common.css` - Shared styles (header, footer, navigation, forms, buttons, typography)
- `index.css` - Homepage-specific styles
- `registration.css` - Registration page-specific styles
- `events.css` - Events page-specific styles
- `[page-name].css` - Individual page styles as needed

Each page CSS file should only contain styles unique to that page. All shared styles belong in `common.css`.

