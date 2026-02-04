type ChipsProps = {
  name?: string
}

export const Chips = ({ name = '' }: ChipsProps) => {
  return (
    <div className="skill-pill">
      <span>{name}</span>
    </div>
  )
}
