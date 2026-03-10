"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: "oklch(100% 0 0 / 0.06)" }}
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + tagline */}
          <div className="text-center sm:text-left">
            <p
              className="text-lg font-bold"
              style={{ color: "var(--color-coral)" }}
            >
              selfstorage.help
            </p>
            <p
              className="text-sm mt-0.5"
              style={{ color: "var(--color-slate)" }}
            >
              SEO built exclusively for self storage businesses.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="/privacy"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--color-slate)" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--color-slate)" }}
                >
                  Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="mt-6 pt-6 border-t text-center"
          style={{ borderColor: "oklch(100% 0 0 / 0.06)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-slate)" }}>
            &copy; {currentYear} selfstorage.help. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
