const ItemsList = (props) => {
  const { items } = props;
  const { itemCards, categories } = items;
  const AllItemCards = [
    ...(itemCards || []),
    ...(categories ? categories.flatMap((c) => c.itemCards || []) : []),
  ];

  return (
    <div>
      {AllItemCards.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-auto w-auto p-4 flex shadow-xl justify-between bg-white"
        >
          <div className="flex flex-col pr-4 w-10/12">
            <h2 className="py-2 text-2xl font-semibold tracking-wide">
              {item?.card?.info?.name}
            </h2>
            <h4 className="menu-card-price">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </h4>
            <h4 className="menu-card-rating">
              <span>
                ★ {item?.card?.info?.ratings.aggregatedRating?.rating}
              </span>
            </h4>
            <p className="menu-card-desc">{item?.card?.info?.description}</p>
          </div>

          <div className="w-2/12 flex flex-col">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item?.card?.info?.imageId
              }
              className="rounded-2xl max-w-40"
              alt="menu-logo"
            />
            <button className="bg-white text-green-400 w-20 h-10 font-bold text-xl rounded-lg mx-auto  my-2 hover:bg-gray-200">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
