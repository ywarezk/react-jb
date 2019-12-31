import * as React from 'react';
import { ProductModel } from '../../models/product-model';
import { NavLink } from 'react-router-dom';
import Heading from '../heading/heading';

export interface DetailsState {
    product: ProductModel
}

class Details extends React.Component<any, DetailsState> {

    constructor(props: any) {
        super(props);
        this.state = {
            product: null
        };
    }

    public componentDidMount(): void {

        const prodID = this.props.match.params.prodID; // prodID בשם Route-מביא פרמטר מה

        setTimeout(() => {

            fetch("http://localhost:3001/products/" + prodID)
                .then(response => response.json())
                .then(product => this.setState({ product }))
                .catch(err => alert(err.message));

        }, 3000);

    }

    public render(): JSX.Element {
        return (
            <div className="details">

                <Heading>Product Details:</Heading>

                {!this.state.product && <img src="/assets/images/loading.gif" />}

                {this.state.product &&
                    <React.Fragment>
                        <h3>Name: {this.state.product.name}</h3>
                        <h3>Price: {this.state.product.price}</h3>
                        <h3>Stock: {this.state.product.stock}</h3>
                        <img src={`/assets/images/products/${this.state.product.id}.jpg`} />

                        <br /><br />

                        <NavLink to="/products">Back to List</NavLink>

                    </React.Fragment>
                }

            </div>
        );
    }
}

export default Details;