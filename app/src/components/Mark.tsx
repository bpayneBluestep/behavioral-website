// The Attune mark, from the brand kit (svg/mark.svg): two circles, blue for the
// platform and teal for the people, with the overlap cut out so the background shows
// through. These are the kit's exact paths; never fill the overlap.

export const MARK_VIEWBOX = '1.25 8.25 45.5 31.5'
export const MARK_LEFT = 'M24 9.892A15.75 15.75 0 1 0 24 38.108A15.75 15.75 0 0 1 24 9.892Z'
export const MARK_RIGHT = 'M24 9.892A15.75 15.75 0 1 1 24 38.108A15.75 15.75 0 0 0 24 9.892Z'

/** "reversed" is for navy or dark photos: the teal shifts to light teal. */
export default function Mark({
  className = '',
  variant = 'color',
}: {
  className?: string
  variant?: 'color' | 'reversed' | 'auto'
}) {
  const right =
    variant === 'reversed' ? 'fill-[#72d0d0]' : variant === 'auto' ? 'fill-[#1d9999] dark:fill-[#72d0d0]' : 'fill-[#1d9999]'
  return (
    <svg viewBox={MARK_VIEWBOX} className={className} aria-hidden focusable="false">
      <path d={MARK_LEFT} className="fill-[#3180c3]" />
      <path d={MARK_RIGHT} className={right} />
    </svg>
  )
}
