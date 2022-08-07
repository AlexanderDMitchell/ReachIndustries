interface Props {
  src: string
}

export const VideoPlayer = ({ src }: Props) => {
  return (
    <video>
      <source src={src} />
    </video>
  )
}
