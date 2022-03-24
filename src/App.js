import React, {useState, useEffect} from 'react';

import {Grid} from '@material-ui/core'
import {CssBaseline} from '@material-ui/core'

import getPlacesData from './api/index'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import './App.css';

function App() {

  const [places, setPlaces] = useState([])
  const [childClicked, setChildClicked] = useState(null)
  
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  const [isLoading, setIsLoading] = useState(false)

  //GET CURRENT LOCATION
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data)
        setIsLoading(false)
      })
  }, [coordinates, bounds])

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            setChildClicked={setChildClicked}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
