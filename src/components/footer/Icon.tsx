interface Props {
    brand: string
}

const Icon = ({ brand }: Props) => {
  return (
    <i className={'text-white hover:text-Teal-200 p-2 rounded-full border fa fa-' + brand}></i>
  )
}

export default Icon
