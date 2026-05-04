"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TokensPage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[var(--semantic-bg-neutral-screen)] text-[var(--semantic-text-neutral-bold-default)] p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with dark mode toggle */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">Wise UI Design Tokens</h1>
              <p className="text-[var(--semantic-text-neutral-subtle-default)]">
                Complete color system with primitives and semantic tokens
              </p>
            </div>
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="outline"
              className="gap-2"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </div>

          {/* Button Variants */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
            <div className="bg-[var(--semantic-bg-neutral-elevated)] rounded-lg p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="default" disabled>
                  Default Disabled
                </Button>
                <Button variant="destructive" disabled>
                  Destructive Disabled
                </Button>
                <Button variant="outline" disabled>
                  Outline Disabled
                </Button>
              </div>
            </div>
          </section>

          {/* Color Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Color Palette</h2>

            {/* Neutral Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Neutral Grays</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"].map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div
                      className="w-full aspect-square rounded-lg border border-[var(--semantic-border-neutral-subtle-default)]"
                      style={{
                        backgroundColor: `var(--color-gray-${shade})`,
                      }}
                    />
                    <p className="text-xs text-center font-mono">Gray {shade}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Brand Colors (Bright Green)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {["100", "200", "300", "400", "500", "600", "700"].map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div
                      className="w-full aspect-square rounded-lg border border-[var(--semantic-border-neutral-subtle-default)]"
                      style={{
                        backgroundColor: `var(--color-bright-green-${shade})`,
                      }}
                    />
                    <p className="text-xs text-center font-mono">BG {shade}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic Background Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Semantic Backgrounds</h3>
              <div className="grid gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { name: "Bold Default", var: "--semantic-bg-neutral-bold-default" },
                    { name: "Bold Hovered", var: "--semantic-bg-neutral-bold-hovered" },
                    { name: "Bold Pressed", var: "--semantic-bg-neutral-bold-pressed" },
                    { name: "Bold Disabled", var: "--semantic-bg-neutral-bold-disabled" },
                  ].map((item) => (
                    <div key={item.var} className="space-y-2">
                      <div
                        className="w-full aspect-square rounded-lg border border-[var(--semantic-border-neutral-subtle-default)]"
                        style={{
                          backgroundColor: `var(${item.var})`,
                        }}
                      />
                      <p className="text-xs text-center font-mono">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Semantic Brand Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Semantic Brand</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { name: "Default", var: "--semantic-bg-brand-bold-default" },
                  { name: "Hovered", var: "--semantic-bg-brand-bold-hovered" },
                  { name: "Pressed", var: "--semantic-bg-brand-bold-pressed" },
                  { name: "Disabled", var: "--semantic-bg-brand-bold-disabled" },
                ].map((item) => (
                  <div key={item.var} className="space-y-2">
                    <div
                      className="w-full aspect-square rounded-lg border border-[var(--semantic-border-neutral-subtle-default)]"
                      style={{
                        backgroundColor: `var(${item.var})`,
                      }}
                    />
                    <p className="text-xs text-center font-mono">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Typography with Tokens */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Typography & Text Colors</h2>
            <div className="bg-[var(--semantic-bg-neutral-elevated)] rounded-lg p-6 space-y-4">
              <div>
                <p className="text-xs text-[var(--semantic-text-neutral-subtle-default)] uppercase tracking-wide mb-1">
                  Bold Text
                </p>
                <p className="text-lg font-semibold text-[var(--semantic-text-neutral-bold-default)]">
                  This uses semantic-text-neutral-bold-default
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--semantic-text-neutral-subtle-default)] uppercase tracking-wide mb-1">
                  Subtle Text
                </p>
                <p className="text-base text-[var(--semantic-text-neutral-subtle-default)]">
                  This uses semantic-text-neutral-subtle-default
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--semantic-text-neutral-subtle-default)] uppercase tracking-wide mb-1">
                  Brand Text
                </p>
                <p className="text-base font-semibold text-[var(--semantic-text-brand-bold-default)]">
                  This uses semantic-text-brand-bold-default
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--semantic-text-neutral-subtle-default)] uppercase tracking-wide mb-1">
                  Danger Text
                </p>
                <p className="text-base font-semibold text-[var(--semantic-text-danger-bold-default)]">
                  This uses semantic-text-danger-bold-default
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--semantic-text-neutral-subtle-default)] uppercase tracking-wide mb-1">
                  Disabled Text
                </p>
                <p className="text-base text-[var(--semantic-text-disabled)]">
                  This uses semantic-text-disabled
                </p>
              </div>
            </div>
          </section>

          {/* Border & Input Tokens */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Borders & Focus States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-[var(--semantic-border-neutral-subtle-default)] rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Default Border</p>
                <input
                  type="text"
                  placeholder="Border neutral subtle default"
                  className="w-full px-3 py-2 border border-[var(--semantic-border-neutral-subtle-default)] rounded bg-[var(--semantic-bg-neutral-screen)] text-[var(--semantic-text-neutral-bold-default)]"
                />
              </div>

              <div className="border-2 border-[var(--semantic-border-brand-bold)] rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Brand Border</p>
                <input
                  type="text"
                  placeholder="Border brand bold"
                  className="w-full px-3 py-2 border border-[var(--semantic-border-brand-bold)] rounded bg-[var(--semantic-bg-neutral-screen)] text-[var(--semantic-text-neutral-bold-default)]"
                />
              </div>

              <div className="border-2 border-[var(--semantic-border-danger-bold)] rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Danger Border</p>
                <input
                  type="text"
                  placeholder="Border danger bold"
                  className="w-full px-3 py-2 border border-[var(--semantic-border-danger-bold)] rounded bg-[var(--semantic-bg-neutral-screen)] text-[var(--semantic-text-neutral-bold-default)]"
                />
              </div>

              <div className="rounded-lg p-4 ring-2 ring-[var(--semantic-focus-brand-bold)]">
                <p className="text-sm font-semibold mb-2">Focus Ring</p>
                <p className="text-sm text-[var(--semantic-text-neutral-subtle-default)]">
                  Ring uses semantic-focus-brand-bold
                </p>
              </div>
            </div>
          </section>

          {/* Dimensions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Spacing & Dimensions</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {[0, "0-5", 1, "1-5", 2, "2-5", 3, "3-5", 4, "4-5", 5, 6].map((val) => (
                  <div key={val} className="space-y-2">
                    <div
                      className="bg-[var(--semantic-bg-brand-bold-default)] rounded"
                      style={{
                        height: `var(--dimension-${val})`,
                        minHeight: val === 0 ? "1px" : "auto",
                      }}
                    />
                    <p className="text-xs text-center font-mono">--dimension-{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cards Example */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Component Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-[var(--semantic-bg-neutral-elevated)] border-[var(--semantic-border-neutral-subtle-default)]">
                <CardHeader>
                  <CardTitle className="text-[var(--semantic-text-neutral-bold-default)]">
                    Card with Tokens
                  </CardTitle>
                  <CardDescription className="text-[var(--semantic-text-neutral-subtle-default)]">
                    All colors use semantic tokens
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-[var(--semantic-text-neutral-subtle-default)]">
                    Background: semantic-bg-neutral-elevated
                  </p>
                  <Button variant="default">Action</Button>
                </CardContent>
              </Card>

              <Card className="bg-[var(--semantic-bg-brand-subtle-default)] border-[var(--semantic-border-brand-bold)]">
                <CardHeader>
                  <CardTitle className="text-[var(--semantic-text-brand-bold-default)]">
                    Brand Card
                  </CardTitle>
                  <CardDescription className="text-[var(--semantic-text-neutral-subtle-default)]">
                    Brand semantic colors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--semantic-text-neutral-subtle-default)]">
                    Background: semantic-bg-brand-subtle-default
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
