import React from "react";

const Skeleton = (productPicture) => {
    return(
        <div>
            <div className="card" style={{maxWidth: "400px"}}>
                <img src={productPicture} className="card-img-top" alt="..." style={{maxWidth: '400px', height: "auto"}}/>
                <div className="card-body">
                    <h5 className="card-title">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></h5>
                    <p className="card-text">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></li>
                    <li className="list-group-item">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></li>
                </ul>
                <div className="card-body">
                    {/*<a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>*/}
                </div>
            </div>
        </div>
    )
}

export const Post = ({
     _id,
     name,
     price,
     createdAt,
     productPicture,
     user,
     isLoading
         }) => {

    if (isLoading) {
        return (
            Skeleton(productPicture)
        );
    }

    const onClickRemove = () => {};

    const isAuth = true;

    return (
        <div>
            <div className="card" style={{maxWidth: "400px"}}>
                <img src={productPicture} className="card-img-top" alt="..." style={{maxWidth: '400px', height: "auto"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{price}</li>
                        <li className="list-group-item">{createdAt}</li>
                        <li className="list-group-item">{user}</li>
                    </ul>
                    <div className="card-body">
                        {/*<a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>*/}
                    </div>
            </div>
        </div>
    );
};