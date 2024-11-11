export default function Event() {
    const handleClick = () => {
        alert('picchi mota miss u...')
    }
    const handleClick2 = (num) => {
        alert(num + 5)
    }

    return (
        <>
            <button onClick={handleClick}>Click1</button>
            <button onClick={() => { alert('inside clicked') }}>Click2</button>
            <button onClick={() => handleClick2(8)}>Click  prp</button>
        </>
    )

}