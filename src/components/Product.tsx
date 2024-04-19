type Props = {
    name: string;
    img: string;
    price: number;
  };
  
  const Product: React.FC<Props> = ({ name, img, price }) => {
    return (
      <div className="h-52 rounded-lg border-2 border-Text shadow-md bg-white">
        <div className="flex justify-between items-center h-14 border-b-2 border-Text gap-1 p-1">
            <p className="break-words">{name}</p>
            <p className="text-nowrap">{Math.ceil(price)} kr</p>
        </div>
        <div className="h-36 flex flex-col justify-center p-2">
            <div className="">
                <img src={img} alt={name} className="max-h-32 max-w-full mx-auto object-cover"/>
            </div>
        </div>
      </div>
    );
  };
  
  export default Product;