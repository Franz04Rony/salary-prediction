interface Props {
  label ?: string,
  handle ?: any
}

export const Button = ({label = "boton", handle = ()=>{}}: Props) => {
  return (
    <button onClick={handle} className="
      p-1
      group
      flex items-center justify-center
      bg-[#C4A7E7]
      rounded-lg
      text-2xl
    ">
      <span className="
        px-5 py-2
        bg-[#1F1D27]
        group-hover:bg-opacity-0
        transition ease-in-out duration-300
        rounded-md
      ">
        {label}
      </span>
    </button>
  )
}