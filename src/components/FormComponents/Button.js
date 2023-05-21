const Button = ({ variant, title, fontSize, fontWeight, width, height, classes }) => {

    let primaryButtonElement = 
    <button class={`bg-primary-blue flex justify-center items-center text-white px-4 py-2 rounded-md focus:outline-none ${classes}`}
        style={{
            fontSize,
            fontWeight,
            width,
            height
        }}>
        {title}
    </button>

    let secondaryButtonElement =
    <button
        class={`bg-white text-primary-blue flex justify-center items-center border border-primary-blue rounded-md px-4 py-2 rounded-md focus:outline-none ${classes}`}
        style={{
            fontSize,
            fontWeight,
            width,
            height
        }}
    >
        {title}
    </button>


    return (
        <>
            { variant === 'primary' ? primaryButtonElement : secondaryButtonElement }
        </>

    )
}

export default Button

