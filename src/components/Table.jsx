export default function Table({table}) {
    return (
        <table className="table table-striped">
            <thead>
                <tr className="table-dark">
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Department</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Street</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Zip Code</th>
                </tr>
            </thead>
            <tbody>
            {table.map((el, index) => {
                return (
                    <tr key={index}>
                        <td>{el.firstname}</td>
                        <td>{el.lastname}</td>
                        <td>{el.startDate}</td>
                        <td>{el.department}</td>
                        <td>{el.dateOfBirth}</td>
                        <td>{el.street}</td>
                        <td>{el.city}</td>
                        <td>{el.state}</td>
                        <td>{el.zipCode}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
