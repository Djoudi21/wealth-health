export default function Select(props) {
    const setSelectValue = (event) => {
        props.setSelectValue(event.target.value)
    };

    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <select onChange={setSelectValue} name={props.name} id={props.id}>
                {props.options.map((option, index) => {
                    return option.abbreviation.length ? (
                        <option value={option.abbreviation} key={index}>{option.name}</option>
                    ) : (
                        <option value={option.name} key={index}>{option.name}</option>
                    );
                })}
            </select>
        </>
    );
}
