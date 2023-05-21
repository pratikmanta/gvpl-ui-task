const Form = ({children, classes}) => {
    return (
        <form className={classes} onSubmit={(e) => e.preventDefault()}>
            {children}
        </form>
    )
}

export default Form