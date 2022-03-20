import React from "react";
import {box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'

const PlaceDetails = ({place}) => {
    const classes = useStyles()
    return(
        <Card elevation={6}>
            <CardMedia 
                style={{height: 350}}
                image={place.photo ? place.photo.images.large.url : 'https://www.bbrollingdoor.com/upload/services/mainimages/Restuarant1.jpg'}
                title={place.name}
            />
        </Card>
    )
}

export default PlaceDetails