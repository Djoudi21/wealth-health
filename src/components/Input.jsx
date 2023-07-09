export default function Input(props) {
    function setInputValue(e) {
        props.setInputValue(e.target.value)
    }

    function resetErrorMessage() {
        props.resetErrorMessage()
    }

    return(
        <div className="col-md-4 mb-3">
            <label htmlFor={props.id} className="form-label">{props.label}</label>
            <input onFocus={resetErrorMessage} className="form-control" onChange={setInputValue} type={props.type} id={props.id} />
            <p className="error-message">{props.error && props.error}</p>
        </div>
    )
}
