import React from "react";
import productData from "../../../model";
import ProductTitle from "./productTitle";
import ProductImg from "./productImg";
import ProductPrice from "./productPrice";
import ProductPromotions from "./productPromotions";
import ProductHighlights from "./ProductHighlights";
import ProductAddButtons from "./productAddButtons";
import ProductQuantityButtons from "./productQuantityButtons";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      primaryImg: "",
      displayPrice: "",
      promotions: [],
      highlights: [],
      customerReview: []
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
          promotions: getPromoMessage(data.Promotions),
          highlights: data.ItemDescription[0].features,
          customerReview: data.CustomerReview
        });
      });
  }
  render() {
    const { title } = this.state.product;
    const { primaryImg, displayPrice, promotions, highlights } = this.state;
    console.log("tester ", this.state.customerReview);
    console.log("tester2 ", this.state.highlights);
    return (
      <div>
        <ProductTitle title={title} />
        <ProductImg image={primaryImg} />
        <ProductPrice price={displayPrice} />
        <ProductPromotions promos={promotions} />
        <ProductHighlights list={highlights} />
        <ProductQuantityButtons />
        <ProductAddButtons />
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
