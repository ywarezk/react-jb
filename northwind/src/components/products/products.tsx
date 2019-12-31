import React, { Component } from "react";
import "./products.css";
import { ProductModel } from "../../models/product-model";
import Thumbnail from "../thumbnail/thumbnail";
import { NavLink } from "react-router-dom";
import Heading from "../heading/heading";

interface ProductsState {
    products: ProductModel[];
}

export class Products extends Component<null, ProductsState> {

    public constructor(props: null) {
        super(props);
        this.state = {
            products: []
        };
    }

    public componentDidMount(): void {
        fetch("http://localhost:3001/products")
            .then(response => response.json())
            .then(products => this.setState({ products }))
            .catch(err => console.log(err));
    }

    public render(): JSX.Element {
        return (
            <div className="products">

                <Heading>Here are our Products: </Heading>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(p =>
                            <tr key={p.id}>
                                <td>
                                    {/* <NavLink to={"/products/" + p.id}>{p.name}</NavLink> */}
                                    <NavLink to={`/products/${p.id}`}>{p.name}</NavLink>
                                </td>
                                <td>{p.price}</td>
                                <td>{p.stock}</td>
                                <td>
                                    {/* <Thumbnail imageSource={"/assets/images/products/" + p.id + ".jpg"} /> */}
                                    <Thumbnail imageSource={`/assets/images/products/${p.id}.jpg`} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        );
    }
}