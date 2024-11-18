import formatToIDRCurrency from "../../../Utils/formatToIDRCurrency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import Button from "../../Elements/Button/Index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({product}) => {
    const { Namaproduct = "No Name", Category = "No Category", price =  0, Img, Alt, stock, slug } = product
    return (
        <Link to={`/products/${slug}` ?? ''} className="flex flex-col max-w-[370px] rounded-xl flex-wrap p-[12px] bg-[#081116] hover:ring-opacity-40 active:ring-5 active:ring-[#6247eb] hover:ring-4 active:ring-2 active:ring-opacity-90" >
        <>
            <div className="flex flex-col max-w-[370px] flex-wrap p-[12px] bg-[#081116] rounded-xl">
                <img src={Img} alt={Alt} className="rounded-md block h-[250px] max-w-[300px] flex justify-center mb-4 object-cover" />
                <div className="flex flex-col gap-2">
                    <h4 className="font-medium text-[20px] text-white">
                        {Namaproduct}
                    </h4>
                    <span className="block font-medium text-[14px] text-[#EAEAEA]">
                        {Category}
                    </span>
                    <span className="block font-medium text-[20px] text-white">
                        {formatToIDRCurrency(price) ?? 'Not for sale'}
                    </span>
                    <div>
                        {stock <= 0 ? (
                        <>
                            <p className="text-sm font-semibold text-center text-red-500 mb-4">
                                Out of Stock
                            </p>
                            <Button
                            type="submit"
                            classname="gap-2 text-center text-[#fffff0] items-center w-full justify-center bg-slate-400 text-center"
                            >
                            <FontAwesomeIcon icon={faCartShopping} className="mb-0 text-[#fffff0] mr-2" />
                                <span>Add to cart</span>
                            </Button>
                        </>
                        ) : stock <= 25 && stock !== 0 ? (
                        <>
                            <p className="text-sm mb-4 font-semibold text-left text-yellow-500">
                                <span className="text-sm text-[#fffff0] text-white text-left">Sisa {stock}</span> (Almost Sold Out) 
                            </p>
                            <Button
                            type="submit"
                            classname="gap-2 text-center items-center text-[#fffff0] w-full justify-center bg-[#6173E6] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]"
                            >
                            <FontAwesomeIcon icon={faCartShopping} className="mb-0 mr-2" />
                                <span>Add to cart</span>
                            </Button>
                        </>
                        ) : (
                        <>
                            <p className="mb-4 font-semibold">
                            <span className="text-sm text-white">Sisa {stock}</span>
                            </p>
                            <Button
                                type="submit"
                                classname="gap-2 text-center text-[#fffff0] items-center w-full justify-center bg-[#6173E6] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]"
                            >
                                <FontAwesomeIcon icon={faCartShopping} className="mb-0 mr-2" />
                                <span>Add to cart</span>
                            </Button>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </>
        </Link>
    )
}

export default Card

Card.propTypes = {
    product: PropTypes.object
  }