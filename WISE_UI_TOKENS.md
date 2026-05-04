# Wise UI Design Tokens Implementation Guide

## Overview

The Wise UI design token system has been fully integrated into your project. This includes:

- **Primitive Colors**: Base color values from the design system (grays, greens, reds, etc.)
- **Semantic Tokens**: Context-aware colors for UI elements (backgrounds, text, borders, etc.)
- **Dimensions**: Standardized spacing and sizing values
- **Light & Dark Modes**: Complete theming support with automatic mode switching

## Token Categories

### 1. Primitive Colors

Located in CSS root variables:

```css
--color-gray-50 through --color-gray-900     /* Neutral grays */
--color-bright-green-100 through -900         /* Brand green */
--color-forest-green-100 through -900         /* Forest green */
--color-red-100 through -800                  /* Reds for danger states */
--color-yellow-100 through -900               /* Warning yellows */
--color-overlay-100 through -900              /* Transparent overlays */
--color-shadow-100 through -700               /* Shadow colors */
```

### 2. Semantic Tokens

**Backgrounds:**
- `--semantic-bg-neutral-bold-*` (default, hovered, pressed, disabled)
- `--semantic-bg-neutral-subtle-*` (for secondary surfaces)
- `--semantic-bg-brand-bold-*` (primary action colors)
- `--semantic-bg-brand-subtle-*` (secondary brand backgrounds)
- `--semantic-bg-danger-*` (error/destructive states)

**Text Colors:**
- `--semantic-text-neutral-bold-default` (primary text)
- `--semantic-text-neutral-subtle-default` (secondary text)
- `--semantic-text-brand-bold-default` (brand text)
- `--semantic-text-danger-bold-default` (danger text)
- `--semantic-text-disabled` (disabled text)

**Borders:**
- `--semantic-border-neutral-subtle-*` (default borders)
- `--semantic-border-brand-*` (brand borders)
- `--semantic-border-danger-*` (danger borders)

**Icons:**
- `--semantic-icon-neutral-bold-default`
- `--semantic-icon-brand-bold-default`
- `--semantic-icon-danger-*`

**Focus & Interaction:**
- `--semantic-focus-brand-bold` (focus ring color)
- `--semantic-overlay-neutral-bold` (dark overlays)
- `--semantic-selection-brand-subtle` (text selection)

### 3. Dimensions

Standardized spacing scale (in pixels):

```css
--dimension-0: 0px
--dimension-0-5: 2px
--dimension-1: 4px
--dimension-1-5: 6px
--dimension-2: 8px
--dimension-3: 12px
--dimension-4: 16px
--dimension-5: 20px
--dimension-6: 24px
--dimension-8: 32px
--dimension-10: 40px
--dimension-12: 48px
/* ... and more up to --dimension-24: 96px */
```

## Light Mode Colors

**Light mode** (default `:root`) provides:
- Light neutral backgrounds (#FFFFFF, #F6F7F4, etc.)
- Dark text for contrast (#0B0C0A)
- Vibrant brand colors (#9EE770)
- Appropriate shadows and overlays

## Dark Mode Colors

**Dark mode** (`.dark` class) provides:
- Dark neutral backgrounds (#0B0C0A, #161815, etc.)
- Light text for contrast (#FFFFFF)
- Adjusted brand colors for visibility (#9EE770)
- Appropriate shadows and overlays for dark surfaces

### Activating Dark Mode

Add the `dark` class to your root `<html>` or a parent container:

```jsx
// In a client component
export default function Page() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Content automatically uses dark mode tokens */}
    </div>
  )
}
```

## Using Tokens in Components

### In CSS/Tailwind

Use the `var()` function to reference token values:

```css
.button {
  background-color: var(--semantic-bg-brand-bold-default);
  color: var(--semantic-text-neutral-bold-default);
  border: 1px solid var(--semantic-border-brand-bold);
  
  &:hover {
    background-color: var(--semantic-bg-brand-bold-hovered);
  }
  
  &:active {
    background-color: var(--semantic-bg-brand-bold-pressed);
  }
  
  &:disabled {
    background-color: var(--semantic-bg-brand-bold-disabled);
    color: var(--semantic-text-disabled);
  }
}
```

### In Tailwind Classes

Use arbitrary values with `var()`:

```jsx
<Button 
  className="bg-[var(--semantic-bg-brand-bold-default)] 
             text-[var(--semantic-text-neutral-bold-default)]
             hover:bg-[var(--semantic-bg-brand-bold-hovered)]"
>
  Click me
</Button>
```

### In React Components

Reference tokens directly in your component styles:

```jsx
export function Card() {
  return (
    <div 
      style={{
        backgroundColor: 'var(--semantic-bg-neutral-elevated)',
        color: 'var(--semantic-text-neutral-bold-default)',
        borderColor: 'var(--semantic-border-neutral-subtle-default)',
      }}
    >
      {/* Content */}
    </div>
  )
}
```

## Button Component Updates

The Button component has been updated to use semantic tokens for all variants:

### Variants

- **default**: Uses brand colors (`--semantic-bg-brand-bold-*`)
- **destructive**: Uses danger colors (`--semantic-bg-danger-*`)
- **outline**: Uses neutral borders and subtle backgrounds
- **secondary**: Uses neutral bold backgrounds
- **ghost**: Minimal styling with hover states
- **link**: Text-based with brand underline

### States

Each variant supports:
- **default**: Primary state
- **hover**: `--*-hovered` variant
- **active**: `--*-pressed` variant
- **disabled**: `--*-disabled` variant + `--semantic-text-disabled`

## Light vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Screen Background | #FFFFFF | #0B0C0A |
| Card Background | #FFFFFF | #161815 |
| Text (Bold) | #0B0C0A | #FFFFFF |
| Text (Subtle) | #D7D8D2 | #D7D8D2 |
| Primary Button | #9EE770 | #9EE770 |
| Border | #D7D8D2 | #5A5E58 |
| Focus Ring | #163300 | #9EE770 |

## File Locations

- **Token Definitions**: `src/app/globals.css` (CSS custom properties)
- **Button Component**: `src/components/ui/button.tsx` (using tokens)
- **Demo Page**: `src/app/tokens/page.tsx` (visual reference)

## How to Add New Tokens

1. **Define the primitive** in `:root`:
   ```css
   --color-new-color: #123456;
   ```

2. **Create semantic mappings** for light and dark modes:
   ```css
   /* :root for light mode */
   --semantic-new-element: var(--color-new-color);
   
   /* .dark for dark mode */
   .dark {
     --semantic-new-element: #654321;
   }
   ```

3. **Use in components**:
   ```jsx
   <div style={{ color: 'var(--semantic-new-element)' }}>
   ```

## Testing the System

Navigate to `http://localhost:3000/tokens` to see:
- All button variants in light and dark modes
- Complete color palette
- Text color examples
- Border and focus states
- Spacing scale
- Component examples

Use the toggle in the top-right to switch between light and dark modes.

## Best Practices

1. **Always use semantic tokens**, not primitives, in components
   - ✅ Good: `background-color: var(--semantic-bg-brand-bold-default)`
   - ❌ Bad: `background-color: var(--color-bright-green-500)`

2. **Use state variants** for interaction
   ```jsx
   // Provide hover, pressed, and disabled states
   className="bg-[var(--semantic-bg-brand-bold-default)]
              hover:bg-[var(--semantic-bg-brand-bold-hovered)]
              active:bg-[var(--semantic-bg-brand-bold-pressed)]
              disabled:bg-[var(--semantic-bg-brand-bold-disabled)]"
   ```

3. **Respect the dark mode class** for automatic theming
   - Don't hardcode colors
   - Use CSS custom properties
   - Let the cascade handle theme switching

4. **Keep tokens organized** by category
   - Backgrounds separate from text, borders, etc.
   - Use meaningful names that reflect usage
   - Update both light and dark mode values together

## Related Files

- Global CSS: `src/app/globals.css` (1000+ lines of token definitions)
- Button Component: `src/components/ui/button.tsx` (updated with semantic tokens)
- Tokens Demo: `src/app/tokens/page.tsx` (visual reference guide)

## Next Steps

1. Review the tokens page at `/tokens` to see all colors and states
2. Update other components to use semantic tokens
3. Create additional semantic tokens as needed for new component types
4. Test in both light and dark modes regularly

---

**Last Updated**: 2026-05-04  
**Design System**: Wise UI  
**Version**: 1.0.0
