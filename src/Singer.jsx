export default function Singer({ singer }) {

    return (
        // console.log(singer)
        <li>
            Id: {singer.id} ,
            Name: {singer.name} ,
            Age: {singer.age}
        </li>
    )

}