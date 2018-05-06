import React from "react";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: "",
      title: "",
      review: "",
      datePosted: "",
      screenName: ""
    };
  }

  timeFormatter(time) {
    if (time) {
      const formatedTime = new Date(time);
      console.log("time ", formatedTime.getFullYear());
      const dateObj = {
        month: formatedTime.getMonth() + 1,
        day: formatedTime.getDate(),
        year: formatedTime.getFullYear()
      };
      return `${dateObj.month}/${dateObj.day}/${dateObj.year}`;
    } else {
      return "";
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.review) {
      this.setState({
        overallRating: nextProps.review.overallRating,
        title: nextProps.review.title,
        review: nextProps.review.review,
        datePosted: this.timeFormatter(nextProps.review.datePosted),
        screenName: nextProps.review.screenName
      });
    }
  }

  render() {
    const { overallRating, title, review, datePosted, screenName } = this.state;
    return (
      <div className="ba pa2">
        <div>rating {overallRating}/5 stars</div>
        <h4>{title}</h4>
        <p>{review}</p>
        <div>
          <p>
            <a href="#">{screenName}</a> {datePosted}
          </p>
        </div>
      </div>
    );
  }
}
