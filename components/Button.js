import Link from 'next/link'
const Button = ({text, color, url}) => {
  return (
    <Link href={`/${url}`}>
      <span className={`${color} py-3 px-5 text-sm uppercase rounded text-nebula-50 cursor-pointer`}>
        {text}
      </span>
    </Link>
    
  )
}

export default Button
