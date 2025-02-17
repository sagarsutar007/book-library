
function Book({ title, author }) {
    // let bookName = props.title;
    // let author = props.author;
    // console.log(props);

    function handleButtonClick() {
        console.log("Button Clicked")
    }

    return (
        <div>
            <img src={`//placehold.co/140x200?text=${title}`} alt="" />
            <h3 className="text-danger">{title}</h3>
            <p className="fst-italic">{author}</p>
            <button className="btn btn-danger" onClick={handleButtonClick}>Add to Cart</button>
        </div>
    )
}

export default Book;