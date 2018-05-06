import React from "react";
import Review from "./review";

class ProductReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      con: {},
      pro: {},
      overallRating: "",
      totalReviews: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      Con,
      consolidatedOverallRating,
      totalReviews,
      Pro
    } = nextProps.reviews[0];
    if (nextProps.reviews[0] !== undefined) {
      this.setState({
        con: Con[0],
        pro: Pro[0],
        overallRating: consolidatedOverallRating,
        totalReviews
      });
    }
  }

  render() {
    const { overallRating, totalReviews, con, pro } = this.state;
    return (
      <div>
        <div>overall rating {this.state.overallRating}/5 stars</div>
        <div>
          <a href="#">see all {totalReviews} reviews</a>
        </div>

        <div>
          <h4>Con</h4>
          <Review review={con} />
        </div>

        <div>
          <h4>Pro</h4>
          <Review review={pro} />
        </div>
      </div>
    );
  }
}

export default ProductReviewContainer;
