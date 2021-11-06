import * as React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import EnhancedTable from "./EnhancedGrid";
function Search() {
  const click_flightNo = useRef();
  const click_Date = useRef();
  const click_Departure_Time = useRef();
  const click_Arrival_Time = useRef();
  const click_Terminals = useRef();

  const [flights, setFlight] = useState({});
  const [fs, setFs] = useState([]);

  function handeleClick(e) {
    const flightNo = click_flightNo.current.value;
    var date = click_Date.current.value;

    var year =
      date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
    var month =
      date.charAt(5) == 0 ? date.charAt(6) : date.charAt(5) + date.charAt(6);
    var day =
      date.charAt(8) == 0 ? date.charAt(9) : date.charAt(8) + date.charAt(9);
    date = day + "-" + month + "-" + year;
    const departureTime = click_Departure_Time.current.value;
    const arrivalTime = click_Arrival_Time.current.value;
    const terminal = click_Terminals.current.value;

    const j = {};
    if (flightNo) {
      j["FlightNo"] = flightNo;
    }
    if (date !== "--") {
      j["FlightDate"] = date;
    }
    if (departureTime !== "") {
      j["DepartureTime"] = departureTime;
    }
    if (arrivalTime !== "") {
      j["ArrivalTime"] = arrivalTime;
    }
    if (terminal !== "") {
      j["Terminal"] = terminal;
    }
    console.log(j);
    setFlight(j);
    console.log(flights);
  }
  useEffect(() => {
    if (flights !== {}) {
      axios
        .post(`http://localhost:8000/flights/search`, flights)
        .then((res) => setFs(res.data));
    }
  }, [flights]);

  return (
    <div>
      <input type="text" placeholder="FlightNo" ref={click_flightNo}></input>
      <input type="date" placeholder="Date" required ref={click_Date}></input>
      <input
        type="time"
        placeholder="Departure Time"
        ref={click_Departure_Time}
      ></input>
      <input
        type="time"
        placeholder="Arrival Time"
        ref={click_Arrival_Time}
      ></input>
      <input type="text" placeholder="Terminals" ref={click_Terminals}></input>
      <button onClick={handeleClick}>Search</button>
      <EnhancedTable rows={fs} />
    </div>
  );
}

export default Search;

// {fs.map((flight) => (
//     <div className="alert alert-primary" key={flight._id}>
//       {flight.FlightNo} {flight.From} {flight.To} {flight.FlightDate}{" "}
//       {flight.Cabin} {flight.SeatsAvailable}
//     </div>
//   ))}
