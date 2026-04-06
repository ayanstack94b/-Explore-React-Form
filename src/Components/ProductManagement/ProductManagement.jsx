import React, { useState } from 'react';
import ProductFrom from './ProductFrom';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [product, setProduct] = useState([]);

    const handleAddProduct = (newProduct) => {
        const newProducts = [...product, newProduct]
        setProduct(newProducts)
    }

    return (
        <div>
            <ProductFrom handleAddProduct={handleAddProduct} ></ProductFrom>
            <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default ProductManagement;