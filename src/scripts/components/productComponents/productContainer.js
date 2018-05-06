import React from "react";
import productData from "../../../model";
import ProductTitle from "./productTitle";
import ProductImg from "./productImg";
import ProductPrice from "./productPrice";
import ProductPromotions from "./productPromotions";
import ProductHighlights from "./ProductHighlights";
import ProductAddButtons from "./productAddButtons";
import ProductQuantityButtons from "./productQuantityButtons";
import ProductReviewContainer from "./productReviewContainers";

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
      cartQuantity: 0,
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

  addToCart(event) {
    event.target.blur();
    if (this.state.cartQuantity === 0) {
      this.setState({ cartQuantity: this.state.cartQuantity + 1 });
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
      addToCart,
      inventoryStatus
    } = this.state;

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

export default ProductContainer;
