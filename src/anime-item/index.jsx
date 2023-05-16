import "./style.css";

const AnimeItem = (props) => {

    const { id, image, title, airingstatus, rank, rating, url } = props

    return (
        <div className="item" key={id}>
            <img className="image" src={image} alt={title} />
            <ul className="description">
                <li><i class="fa-solid fa-ranking-star"> Rank: {rank} </i></li>
                <li><i class="fa-solid fa-star"> Rating: {rating} </i></li>
                <li><i class="fa-solid fa-eye"> Status: {airingstatus}</i></li>
                <li><i class="fa-solid fa-link"> URL: </i><a href={url}> myanimelist/{title}</a></li>
            </ul>
        </div>
    )
}

export default AnimeItem;