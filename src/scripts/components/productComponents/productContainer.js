import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import productData from "../../../model";
import ProductTitle from "./productTitle";
import ProductImg from "./productImg";
import ProductPrice from "./productPrice";
import ProductPromotions from "./productPromotions";
import ProductHighlights from "./ProductHighlights";
import ProductAddButtons from "./productAddButtons";
import ProductQuantityButtons from "./productQuantityButtons";
import ProductReviewContainer from "./productReviewContainers";
import { addToCartAction } from "../../actions";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      primaryImg: "",
      displayPrice: "",
      promotions: [],
      highlights: [],
      customerReview: [],
      cartQuantity: 1,
      inventoryStatus: ""
    };
    this.changeCartQuantity = this.changeCartQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  changeCartQuantity(num) {
    if (this.state.cartQuantity + num >= 0) {
      this.setState(state => {
        return {
          cartQuantity: state.cartQuantity + num
        };
      });
    } else {
      return;
    }
  }

  addToCart() {
    const { cartQuantity, product } = this.state;

    if (cartQuantity > 0) {
      console.log("added to cart");
      this.props.addToCartAction({
        qty: cartQuantity,
        product: product.title,
        price: parseInt(product.Offers[0].OfferPrice[0].priceValue) / 100,
        id: product.UPC
      });
    }
  }

  componentWillMount() {
    productData()
      .then(response => response.CatalogEntryView[0])
      .then(data => {
        this.setState({
          product: data,
          primaryImg: data.Images[0].PrimaryImage[0].image,
          displayPrice: data.Offers[0].OfferPrice[0].formattedPriceValue,
          promotions: getPromoMessage(data.Promotions),
          highlights: data.ItemDescription[0].features,
          customerReview: data.CustomerReview,
          inventoryStatus: data.inventoryStatus
        });
      });
  }
  render() {
    const { title } = this.state.product;
    const {
      primaryImg,
      displayPrice,
      promotions,
      highlights,
      customerReview,
      cartQuantity,
      addToCartFn,
      inventoryStatus
    } = this.state;

    console.log("test ", this.state.product);
    return (
      <div className="pa3">
        <ProductTitle title={title} />
        <ProductImg image={primaryImg} />
        <ProductPrice price={displayPrice} />
        <ProductPromotions promos={promotions} />
        <ProductHighlights list={highlights} />
        <ProductQuantityButtons
          quantity={cartQuantity}
          changeFunction={this.changeCartQuantity}
        />
        <ProductAddButtons
          inventoryStatus={inventoryStatus}
          addToCart={this.addToCart}
        />
        <ProductReviewContainer reviews={customerReview} />
      </div>
    );
  }
}

function getPromoMessage(promoList) {
  return promoList.map(item => {
    return {
      description: item.Description[0].shortDescription,
      key: item.promotionIdentifier
    };
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCartAction }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProductContainer);
