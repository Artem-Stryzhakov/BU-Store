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
     isLoading,
     isEditable
         }) => {

    if (isLoading) {
        return (
            Skeleton(productPicture)
        );
    }

    const onClickRemove = () => {};

    return (
        <div>
            <div className="card mb-3" style={{maxWidth: '1000px', margin: 'auto'}}>
                <div className="row g-0" >
                    <div className="col-md-4">
                        <img src={productPicture} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            {isEditable ? (
                                <div>
                                    <a href={''}>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="..."
                                            style={{
                                                maxWidth: '20px',
                                                position: "absolute",
                                                top: '10px',
                                                right: '20px'
                                            }}/></a>
                                </div>
                            ) : (
                                <></>
                            )}

                            <p className="card-text">{price} $</p>
                            <p className="card-text"><small className="text-muted">{user}</small></p>
                            <p className="card-text"><small className="text-muted">{createdAt}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};