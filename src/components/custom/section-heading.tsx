type SectionHeadingT = {
  tag: string
  heading: string
  description: string
}

export default function SectionHeading({
  tag,
  heading,
  description,
}: SectionHeadingT) {
  return (
    <div className="text-center space-y-2 mb-8">
      <h5 className="text-next-gray">{tag}</h5>
      <h2 className="h2 text-dark font-bold text-2xl uppercase">{heading}</h2>
      <p className="text-sm text-next-gray">{description}</p>
    </div>
  )
}
