import React from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/request";
import TripCard from "../../components/TripCard/TripCard";
import NavBar from "../../components/NavBar/NavBar";
import { TitleList, DivCards } from "./styled";

const ListTripPage = () => {

  const getTrips = useRequestData(`${baseUrl}/trips`, undefined);

  

  return (
    <div>
      <NavBar/>
        <TitleList>Nossas viagens disponíveis!</TitleList>
        <DivCards>
          {getTrips &&
            getTrips.trips.map((trip, i) => {
              return (
                <TripCard
                  key={trip.id}
                  image={`https://picsum.photos/400/200?a=${i}`}
                  name={trip.name}
                  description={trip.description}
                  duration={trip.durationInDays}
                  planet={trip.planet}
                  date={trip.date}
                  id={trip.id}
                />
              );
            })}
        </DivCards>
    </div>
  );
};

export default ListTripPage;


