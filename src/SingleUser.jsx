export default function SingleUser({ singleUser }) {
    const { name, phone } = singleUser
    // console.log(singleUser)

    return (
        <div>
            <h4>Name:{name}</h4>
            <h4>Phone:{phone}</h4>
        </div>
    )
}