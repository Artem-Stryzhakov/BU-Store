import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {useDispatch} from "react-redux";
import axios from "../axios";
import {fetchPosts} from "../redux/slices/posts";

export const MainPage = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchPosts())
        //axios.get('/getData')
    }, [])
    return(
        <div>
            <h1>Main Page</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.wallpapertip.com/wmimgs/7-72323_http-2-bp-blogspot-com-h9vnxn-republic-day.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.wallpapertip.com/wmimgs/27-276757_black-ppt-background-background-ppt-tema-hitam.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://1.bp.blogspot.com/-LMeYFNN9OkE/YD1a7CnMQbI/AAAAAAAAgT0/gZHfnIkFVXMs06jtpWLkVrJIgPeXrsO3QCLcBGAsYHQ/w1200-h630-p-k-no-nu/wallpaper-iphone.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://64.media.tumblr.com/b211d3bfdd614bd59d00b858d527bc8b/tumblr_p9kn0vFQ261sn3ne4o2_540.jpg" />
                <Card.Body>
                    <Card.Title>Mage</Card.Title>
                    <Card.Text>
                        Fucking mage HA HAGHH!!
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}