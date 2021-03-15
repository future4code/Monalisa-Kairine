

export const goToHomePage = (history) => {
  history.replace("/");
};

export const goToLoginPage = (history) => {
  history.push("/LoginPage");
};

export const goToTripDetails = (history) => {
    history.push("/trip-details");
  };


export const goToAdmPage = (history) =>{
  history.push("/adm")
}
  

export const goToListTripsPage = (history) => {
  history.push("/ListTripsPage");
};


export const goToLogin = (history) => {
  history.push("/login");
};

export const goToList = (history) => {
  history.push("/trips/list");
};

