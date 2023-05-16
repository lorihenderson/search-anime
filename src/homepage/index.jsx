import { useState } from "react";
import Search from "../components/search";
import "./style.css"
import AnimeItem from "../anime-item";

const Homepage = () => {

    const [loadingState, setLoadingState] = useState(false);
    const [animes, setAnimes] = useState([]);

    const getDataFromSearchComponent = (searchData) => {
        setLoadingState(true)

        async function getAnimes() {
            const apiResponse = await fetch(
                `https://api.jikan.moe/v4/anime?q=${searchData}&limit=10`
            );
            const result = await apiResponse.json();
            const { data } = result;
    
            if (data && data.length > 0) {
                setLoadingState(false);
                setAnimes(data);
            }
            console.log(result);
        }
        getAnimes();
    };

    console.log(loadingState, animes, "loadingState");

    return (
        <div className="homepage">
            <Search getDataFromSearchComponent={getDataFromSearchComponent} />

            {
                loadingState && (
                    <div className="loadingMsg"> Loading.... please wait </div>
                )
            }

            <div className="itembox">
                {
                    animes && animes.length > 0 ? 
                    animes.map((item) => 
                        <AnimeItem 
                            id={item.mal_id}
                            image={item.images.jpg.image_url}
                            title={item.title}
                            airingstatus={item.status}
                            rank={item.rank}
                            rating={item.rating}
                            url={item.url}
                        />)
                        :null
                }
            </div>

        </div>
    )
}

export default Homepage;