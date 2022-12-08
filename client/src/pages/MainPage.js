import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/slices/posts";
import {Post} from './components/Post'
import {selectIsAuth} from "../redux/slices/auth";

export const MainPage = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.posts)

    const isAuth = useSelector(selectIsAuth);

    const isPostsLoading = posts.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Main Page</h1>
            <Carousel style={{marginBottom: '15px'}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://adsterra.com/blog/wp-content/uploads/2022/08/online-display-ads-for-affiliates-blogcover.png"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/supper-sale-banner-ad-for-shoes-offre-design-template-263b3813e52a6a6eb85fa45fd49ca3b4_screen.jpg?ts=1625994393"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => isPostsLoading ? (
                (isAuth) ? <Post key={index} isLoading = {true}/> : <></>
            ) : (
                (isAuth) ? <Post
                        key={index}
                        _id = {obj._id}
                        name = {obj.name}
                        price = {obj.price}
                        createdAt = {obj.createAt}
                        productPicture = {obj.productPicture}
                        user={obj.user}
                    /> : <></>

                ))}
        </div>
    )
}