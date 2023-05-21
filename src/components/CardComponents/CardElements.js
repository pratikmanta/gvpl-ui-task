const CardImage = ({ logo, classes, width, height }) => {
    
    return ( 
        <img className={`${classes} ${width} ${height}`} src={logo} alt="avatar" />
     );
}

const CardText = ({ text, classes, fontSize, fontWeight }) => {
    return (
        <p className={`${classes} ${fontSize} ${fontWeight}`  }>
            {text}
        </p>
    )
}

const CardHeader = ({ children, classes }) => {
    return ( 
        <div className={classes}>
            { children }
        </div>
     );
}

const CardContent = ({children, classes }) => {
    return (
        <div className={classes}>
            {children}
        </div>
    )
}


export {
    CardImage,
    CardContent,
    CardHeader,
    CardText,
};