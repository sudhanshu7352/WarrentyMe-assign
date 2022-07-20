import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
export const Home = () => {
  const [value, setValue] = useState([]);
  const [type,SetType] =useState()
  const [search, setSearch] = useState("");

  const getData = () => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?q=${search}&token=2aba646dac802c37148d5e3a782d6de3&max=16&country=in`
      )
      .then((res) => {
        console.log(res.data);
        setValue([...res.data.articles]);
      });
  };
  const handle = (e) => {
    // console.log(e.target.value);
    SetType(e.target.value)
    // setSearch(e.target.value);
  };

  const handleSearch =()=>{
       setSearch(type);
  }
  useEffect(() => {
    getData();
  }, [search]);
  return (
    <>
      <div className="search_div">
        <input
          className="search_input"
          type="text"
          onChange={handle}
          required
          placeholder="search by keyword"
        />
        <button className="search" onClick={handleSearch}>search</button>
      </div>

      <div className="box">
        {value &&
          value.map((news, i) => (
            <div key={i} className="news_box">
              <div className="details_div">
                <h2 id="title">{news.title}</h2>
                <p id="desc">{news.description}</p>
                More Details{" "}
                <a className="more_details" href={news.url}>
                  click here
                </a>
              </div>

              <img className="img" src={news.image} alt="" />
            </div>
          ))}
      </div>
    </>
  );
};
