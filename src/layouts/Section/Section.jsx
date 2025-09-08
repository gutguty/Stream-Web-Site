import './Section.scss'
import classNames from 'classnames'

const Section = (props) => {
  const {
    className,
    title,
    titleId,
    description,
    actions,
    children,
    isActionsHiddenOnMobile = false
  } = props

  return (
    <section
      className={classNames(className, 'section container')}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <h2
            className="section__title h3"
            id={titleId}
          >{title}</h2>
          {description && (
            <section className="section__description">
              <p>{description}</p>
            </section>
          )}
        </div>
        {actions && (
          <div
            className={classNames("section__actions", {
              'hidden-mobile': isActionsHiddenOnMobile,
            })}
          >
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">
        {children}
      </div>
    </section>
  )
}

export default Section