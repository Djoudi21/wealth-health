export default function Input(props) {
    function setInputValue(e) {
        props.setInputValue(e.target.value)
    }
    return(
        <div className="col-md-4 mb-3">
            <label htmlFor={props.id} className="form-label">{props.label}</label>
            <input className="form-control" onChange={setInputValue} type={props.type} id={props.id} />
        </div>
    )
}
