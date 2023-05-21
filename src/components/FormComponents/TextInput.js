const Label = ({ name, classes, label, fontSize, fontWeight, width, height }) => {
    let labelStyles = {
        fontSize,
        fontWeight,
        width,
        height
    }
    return (
        <label htmlFor={name} className={classes} style={labelStyles}>{label}</label>
    )
}

const InputField = ({ name, type, placeholder, classes, fontSize, fontWeight, width, height, value, checked }) => {
    let inputStyles = {
        fontSize,
        fontWeight,
        width,
        height
    }
    return (
        <input
            name={name}
            type={type}
            class={classes}
            style={inputStyles}
            placeholder={placeholder}
        />
    )
}

const TextInput = ({ children, classes }) => {
    return (
        <div class={classes}>
            { children }
        </div>
    )
}

export {
    Label,
    InputField,
    TextInput
} 