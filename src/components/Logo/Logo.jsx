import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
  const title = 'Home'
  const {
    className,
    loading = 'lazy'
  } = props

  return (
    <a
      href="/"
      className={classNames(className, 'logo')}
      title={title}
      aria-label={title}
    >
      <img
        src="/logo.svg"
        alt=""
        className="logo__image"
        height={60}
        width={199}
        loading={loading}
      />
    </a>
  )
}

export default Logo