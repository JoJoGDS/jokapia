<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project conventions for Jokapia

This project is a Next.js app using the App Router, React Aria components, and Tailwind-driven design tokens.

## Stack
- Next.js with TypeScript
- React Aria for accessible interactive primitives
- Tailwind CSS with shadcn-style token variables in `app/globals.css`
- Design system components under `components/ui`

## Required patterns
- Prefer React Aria components for interactive UI instead of plain HTML controls when possible.
- Use existing design tokens from `app/globals.css` (`background`, `foreground`, `primary`, `secondary`, `muted`, `border`, `ring`) to keep the UI consistent.
- For button styling, use the shared `Button` component from `@/components/ui/button` and match the project’s rounded, soft-shadow, and typography patterns.
- Keep links and actions subtle and accessible, with `focus-visible` ring states.
- Respect the current font setup: Inter for sans text and JetBrains Mono for headings via CSS variables.

## UI guidance
- Navbar links should remain centered within the header while the logo sits on the left and the main CTA sits on the right.
- On screens below the `md` breakpoint, replace the desktop links with an accessible hamburger toggle beside the CTA. The mobile links should expand inline beneath the header, close when a link is selected, and animate open and closed with a reduced-motion fallback. Keep closed menu links out of keyboard navigation.
- Hero sections should use a responsive two-column layout: text on the left and visual content on the right.
- Use a rotating image-based hero visual with a subtle fade transition every few seconds instead of dashboard-style cards when the brand direction calls for a more editorial feel.
- On smaller screens, stack the hero vertically with text first and the graphic underneath.
- Keep the mobile hero compact and prevent horizontal overflow. Stack its actions on narrow screens, make the primary action easy to tap, and place the hero in normal document flow so an expanded mobile menu moves the content down instead of covering it.
- Primary hero CTAs should be filled, rounded, and use the brand accent gradient or strong primary tokens; secondary actions should remain inline text links with an arrow indicator.
- Break large page sections into reusable components such as `Navbar`, `HeroSection`, and future section components so content can be updated without restructuring the page.
- Keep the layout airy and polished, with compact spacing and contained borders rather than heavy shadows.
- Maintain the existing light/dark theme behavior without introducing color mismatches.
