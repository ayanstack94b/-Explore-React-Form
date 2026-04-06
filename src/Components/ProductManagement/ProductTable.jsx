import React from 'react';

const ProductTable = ({ product }) => {
    return (
        <div>
            <h3>Products: {product.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        product.map((item, i) => <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>

                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default ProductTable;