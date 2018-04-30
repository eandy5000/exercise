import React from "react";
import productData from "../../../model";
import ProductTitle from "./productTitle";
import ProductImg from "./productImg";
import ProductPrice from "./productPrice";
import ProductPromotions from "./productPromotions";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      primaryImg: "",
      displayPrice: "",
      promotions: []
    };
  }
  componentWillMount() {
    productData()
      .then(response => response.CatalogEntryView[0])
      .then(data => {
        this.setState({
          product: data,
          primaryImg: data.Images[0].PrimaryImage[0].image,
          displayPrice: data.Offers[0].OfferPrice[0].formattedPriceValue,
          promotions: getPromoMessage(data.Promotions)
        });
      });
  }
  render() {
    console.log(this.state);
    const { title } = this.state.product;
    const { primaryImg, displayPrice, promotions } = this.state;
    return (
      <div>
        <ProductTitle title={title} />
        <ProductImg image={primaryImg} />
        <ProductPrice price={displayPrice} />
        <ProductPromotions promos={promotions} />
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
