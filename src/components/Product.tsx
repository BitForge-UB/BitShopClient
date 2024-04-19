type Props = {
    name: string;
    img: string;
    price: number;
  };
  
  const Product: React.FC<Props> = ({ name, img, price }) => {
    return (
      <div>
        <div className="flex justify-between">
            <p>{name}</p>
            <p>{Math.ceil(price)} kr</p>
        </div>
        <div className="h-40 flex">
            <img src={img} alt={name} className="max-h-40 max-w-full mx-auto object-cover"/>
        </div>
      </div>
    );
  };
  
  export default Product;