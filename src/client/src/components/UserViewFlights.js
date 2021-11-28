import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
 Typography,
  CardHeader,
  CardActionArea,
  Box
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function UserViewFlights() {
  const [flights, setFlights] = useState([]);
  //  const [fs, setFs] = useState([]);
  const baseURL = "http://localhost:8000/flights/all-flights";
  const fetchFlights = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchFlights();
  }, [flights]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="column"
        //  width={1000}
        // justify="flex-start"
        // alignItems="flex-start"
      >
        {flights.map((flight) => (
          <Grid item key={flights.indexOf(flight)}>
            <Card>
          
              <CardActionArea  onClick={event => alert("I am an alert box!")}>
              <CardContent>
                <Typography  variant="h6" color="textPrimary"> <Box sx={{ fontWeight: 500  }}> Flight No. {flight.FlightNo}</Box> </Typography>
                <Typography sx={{ mb: 0.5 }} color="textSecondary">
                  {flight.From} 🠖 {flight.To} 
                  <span style={{  float: "right"}}>
                    <strong>${flight.fprice}</strong>{" "}
                </span>
                </Typography>
           
                  

                <Typography gutterBottom color="textSecondary">
                  <p>
                    <strong> &#128198; Date</strong> {flight.FlightDate.replaceAll('-','/')}{" "}
                  </p>
                  <p>
                    <span>
                      {" "}
                      <strong> &#128337; Departure </strong>{" "}
                      {flight.DepartureTime} &nbsp; &nbsp;{" "}
                      <strong>Arrival </strong> {flight.ArrivalTime}{" "}
                    </span>
                  </p>
               
               
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
