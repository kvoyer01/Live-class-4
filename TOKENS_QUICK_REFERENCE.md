# Wise UI Tokens - Quick Reference

## 🎨 Most Used Tokens

### Backgrounds
```css
--semantic-bg-neutral-screen          /* Page background (light: white, dark: near-black) */
--semantic-bg-neutral-elevated        /* Card background (light: white, dark: dark-gray) */
--semantic-bg-neutral-floating        /* Popup/tooltip background */
--semantic-bg-brand-bold-default      /* Primary action button */
--semantic-bg-brand-subtle-default    /* Secondary brand surface */
```

### Text
```css
--semantic-text-neutral-bold-default     /* Primary text (headings, body) */
--semantic-text-neutral-subtle-default   /* Secondary text (labels, hints) */
--semantic-text-neutral-subtlest-default /* Tertiary text (disabled, muted) */
--semantic-text-brand-bold-default       /* Brand/primary text */
--semantic-text-danger-bold-default      /* Error/destructive text */
--semantic-text-disabled                 /* Disabled form text */
```

### Borders
```css
--semantic-border-neutral-subtle-default   /* Default borders (inputs, cards) */
--semantic-border-neutral-subtle-hovered   /* Hover state */
--semantic-border-brand-bold               /* Brand/primary borders */
--semantic-border-danger-bold              /* Error borders */
```

### Interactions
```css
--semantic-focus-brand-bold                /* Focus ring color */
--semantic-bg-brand-bold-hovered           /* Button hover state */
--semantic-bg-brand-bold-pressed           /* Button active/pressed state */
--semantic-bg-brand-bold-disabled          /* Button disabled state */
```

---

## 💡 Common Patterns

### Primary Button (Brand Color)
```jsx
<Button className="bg-[var(--semantic-bg-brand-bold-default)]
                   text-[var(--semantic-text-neutral-bold-default)]
                   hover:bg-[var(--semantic-bg-brand-bold-hovered)]
                   active:bg-[var(--semantic-bg-brand-bold-pressed)]
                   disabled:bg-[var(--semantic-bg-brand-bold-disabled)]" />
```

### Text Input
```jsx
<input className="bg-[var(--semantic-bg-neutral-screen)]
                  text-[var(--semantic-text-neutral-bold-default)]
                  border border-[var(--semantic-border-neutral-subtle-default)]
                  focus:border-[var(--semantic-border-brand-bold)]
                  focus:ring-[var(--semantic-focus-brand-bold)]" />
```

### Card
```jsx
<Card className="bg-[var(--semantic-bg-neutral-elevated)]
                 border-[var(--semantic-border-neutral-subtle-default)]
                 text-[var(--semantic-text-neutral-bold-default)]" />
```

### Disabled State
```jsx
<button className="disabled:bg-[var(--semantic-bg-brand-bold-disabled)]
                   disabled:text-[var(--semantic-text-disabled)]
                   disabled:border-[var(--semantic-border-neutral-subtle-disabled)]" />
```

---

## 🌓 Dark Mode

Dark mode is automatic when you add the `dark` class to a parent:

```jsx
// Toggle dark mode
<div className={isDarkMode ? "dark" : ""}>
  {/* All child elements automatically use dark mode tokens */}
</div>
```

All semantic tokens have built-in light/dark values. No additional CSS needed!

---

## 📐 Spacing Scale

```css
--dimension-1: 4px     --dimension-6: 24px   --dimension-12: 48px
--dimension-2: 8px     --dimension-7: 28px   --dimension-13: 52px
--dimension-3: 12px    --dimension-8: 32px   --dimension-14: 56px
--dimension-4: 16px    --dimension-9: 36px   --dimension-15: 60px
--dimension-5: 20px    --dimension-10: 40px  --dimension-16: 64px
```

Use with Tailwind: `p-[var(--dimension-4)]` = 16px padding

---

## 🎯 Token Naming Convention

`--semantic-[element]-[variant]-[state]`

- **element**: bg, text, border, icon, overlay, shadow, selection, link, focus
- **variant**: neutral, brand, danger, success, warning
- **state**: default, hovered, pressed, disabled, subtle, bold, elevated, floating

Examples:
- `--semantic-bg-brand-bold-default` = Brand button default state
- `--semantic-text-neutral-subtle-default` = Secondary text
- `--semantic-border-danger-bold` = Error state border

---

## 🔧 Setup (Already Done!)

Your project has:
- ✅ All primitive colors defined in CSS
- ✅ All semantic tokens for light mode
- ✅ All semantic tokens for dark mode
- ✅ Button component updated with tokens
- ✅ Demo page at `/tokens` showing all tokens
- ✅ Full documentation in `WISE_UI_TOKENS.md`

---

## 📚 Documentation

- **Full Guide**: `WISE_UI_TOKENS.md` (comprehensive)
- **This File**: `TOKENS_QUICK_REFERENCE.md` (quick lookup)
- **Visual Demo**: `http://localhost:3000/tokens` (see all colors/states)
- **Token Definitions**: `src/app/globals.css` (CSS custom properties)

---

## ✅ Design System Stats

- **Primitive Colors**: 70+ color values
- **Semantic Tokens**: 80+ context-aware token variables
- **Spacing Scale**: 24 dimension values
- **Button Variants**: 6 (default, destructive, outline, secondary, ghost, link)
- **Component Support**: Light & Dark modes with full state coverage

---

## 🚀 Quick Start Example

```jsx
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <div className="bg-[var(--semantic-bg-neutral-screen)] 
                    text-[var(--semantic-text-neutral-bold-default)] 
                    p-[var(--dimension-6)]">
      <h1>Hello World</h1>
      <Button>Primary Action</Button>
    </div>
  )
}
```

Works in light and dark modes automatically! 🎉
