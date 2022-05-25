import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = e => {
        e.preventDefault();
        const newProduct = {
            name: e.target.name.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            img: e.target.img.value,
            description: e.target.desc.value,
            email: user.email,
            supplier: user.displayName

        }

        fetch('https://serene-temple-59285.herokuapp.com/allproducts', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Added Successful');
                }

            })
        e.target.reset();
    }
    return (
        <div>
            <div className="container mb-5">
                <div className=" text-center mt-5 ">
                    <div className="text-center border-bottom mb-5">
                        <h1>Add an Item</h1>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-lg-7 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container">
                                    <form onSubmit={handleAddItem}>
                                        <div className="controls">
                                            <div className="row my-3">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_name">Product Name</label>
                                                        <input type="text" name="name" className="form-control" placeholder="Product Name" required="required" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_lastname">Price</label>
                                                        <input type="number" min="0" name="price" className="form-control" placeholder="Enter the product price" required="required" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_email">Quantity</label>
                                                        <input id="form_email" type="number" min="1" name="quantity" className="form-control" placeholder="Enter Quantity" required="required" />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_email">Image Link</label>
                                                        <input id="form_email" type="text" name="img" className="form-control" placeholder="Please give the img Link" required="required" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="form_message">Decsription</label>
                                                        <textarea name="desc" className="form-control" placeholder="Write a short description here." rows="4" required="required"></textarea
                                                        >
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <input type="submit" className=" btn btn-success btn-send  pt-2 btn-block
                            " value="Add An Item" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;