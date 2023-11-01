function BookReview({ id, review, starRate }) {
  return (
    <div>
      <p>{id}</p>
      <p>{starRate}</p>
      <p>{review}</p>
    </div>
  );
}

export default BookReview;
