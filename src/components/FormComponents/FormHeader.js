const FormHeader = ({title, step}) => {
    return (
        <div class="flex justify-between">
          <h2 className="text-xl font-normal">{title}</h2>
          <h2 className="text-base font-medium">Step {step}</h2>
        </div>
    )
}

export default FormHeader