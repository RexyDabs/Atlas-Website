// lib/queries/hero.ts
export const heroQuery = `
*[_type == "heroVideo"][0]{
  headline,
  subheading,
  ctaLabel,
  ctaLink,
  "videoUrl": video.asset->url
}
`
