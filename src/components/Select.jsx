export default function Select(props) {
    const setSelectValue = (event) => {
        props.setSelectValue(event.target.value)
    };

    return (
        <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor={props.id}>{props.label}</label>
            <select  className="form-select mb-3" onChange={setSelectValue} name={props.name} id={props.id}>
                {props.options.map((option, index) => {
                    return option.abbreviation.length ? (
                        <option value={option.abbreviation} key={index}>{option.name}</option>
                    ) : (
                        <option value={option.name} key={index}>{option.name}</option>
                    );
                })}
            </select>
        </div>
    );
}
