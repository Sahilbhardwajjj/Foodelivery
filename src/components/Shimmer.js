const Shimmer = () => {
  return (
    <div className="res-container">
      {[...Array(8)].map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="shimmer-media"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-subtitle"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line" style={{ width: "60%" }}></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
