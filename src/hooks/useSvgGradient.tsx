export const useSvgGradient = (color1: string, color2: string) => {
  const info = {
    start: color1,
    end: color2,
    id: 'gradient',
    target: 'url(#gradient)',
  }

  const svgElement = (
    <svg width="0" height="0">
      <linearGradient id={info.id} x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor={info.start} offset="0%" />
        <stop stopColor={info.end} offset="100%" />
      </linearGradient>
    </svg>
  )

  return [info, svgElement] as const
}
