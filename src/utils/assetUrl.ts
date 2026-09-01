/**
 * Helper to resolve static asset URLs according to the configured Vite base path
 * (e.g., '/almeyda-web/' or any custom deployment base path).
 */
export function getAssetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return `${cleanBase}${cleanPath}`;
}
