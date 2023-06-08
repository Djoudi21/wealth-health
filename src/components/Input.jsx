export default function Input(props) {
    function setInputValue(e) {
        props.setInputValue(e.target.value)
    }
    return(
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input onChange={setInputValue} type={props.type} id={props.id} />
        </>
    )
}
