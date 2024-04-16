type ProductProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageId: number;
    };

const Product = ({ id, name, description, price, stock, imageId }: ProductProps) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Stock: {stock}</p>
            {/* <img src={`/images/${imageId}.jpg`} alt={name} /> */}
            <p>Image Id: {imageId}</p>
        </div>
    );
}

export default Product;