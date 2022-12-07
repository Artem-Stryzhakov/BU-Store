import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/slices/posts";
import {Post} from "./components/Post";

export const MainPage = () => {
    const dispatch = useDispatch()
    //const userData = useSelector((state) => state.auth.data)
    const {posts} = useSelector(state => state.posts)

    const isPostsLoading = posts.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    /*let userData_2;
    if (userData !== null) {
        userData_2 = userData
    }

    if (dispatch(logout)) {
        userData_2 = false
    }*/

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

            {(isPostsLoading ? [...Array(5)] : posts.items).map( (obj, index) => isPostsLoading ? (
                <Post key={index} isLoading = {true}/>
            ) : (
                <Post
                    key={index}
                    _id = {obj._id}
                    name = {obj.name}
                    price = {obj.price}
                    createdAt = {obj.createAt}
                    productPicture = {obj.productPicture}
                    user={obj.user}
                    /*isEditable={ userData?._id === obj.user }*/
                />
                ))}
        </div>
    )
}