import './App.css';
import jsonData from "./data/data.json";
import React, {useEffect, useState} from "react";


function App() {
    const [data, setData] = useState(jsonData.body.sort((a, b) => b.rating - a.rating));
    const [isRating, setIsRating] = useState(false);

    const handleRatingChange = (index, newRating) => {
        const newData = [...data];
        newData[index].rating = newRating;
        console.log(newData[index].name);
        setData(newData.sort((a, b) => b.rating - a.rating));
    };

    useEffect(() => {
        let interval;
        if (isRating) {
            interval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomRating = Math.floor(Math.random() * 10) + 1;
                handleRatingChange(randomIndex, randomRating);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRating]);

    const handleRateRandomly = () => {
        setIsRating((prevIsRating) => !prevIsRating);
    };

    return (

        <div className="container d-flex flex-column col-6">
            <button className="btn btn-warning m-3" onClick={handleRateRandomly}>Rate Random Song</button>
            {data.map((item, hero) => <div key={hero} className="wrapperHero text-center m-3">
                <div className="infoHero p-2 d-flex flex-row align-items-center">
                    <h2 className="col-6 ">{`${item.single} by ${item.name}`}</h2>
                    <img className="col-6 rounded" src={item.coverUrl} alt="cover"/>
                </div>
                <div className="ratingStars d-flex flex-row">
                    <div className="stars">
                        {[...Array(10)].map((_, i) => (
                            <span key={i} className={i < item.rating ? "star filled" : "star"}
                                  onClick={() => handleRatingChange(hero, i + 1)}>
                                ★</span>))}
                    </div>
                    <p>{item.rating}</p>
                </div>
            </div>)}
        </div>);

}

export default App;
