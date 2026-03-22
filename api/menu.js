module.exports = async function handler(req, res) {
  try {
    const {
      lat = "18.5204303",
      lng = "73.8567437",
      restaurantId,
    } = req.query;

    if (!restaurantId) {
      return res.status(400).json({ error: "restaurantId is required" });
    }

    const url = new URL("https://www.swiggy.com/dapi/menu/pl");
    url.searchParams.set("page-type", "REGULAR_MENU");
    url.searchParams.set("complete-menu", "true");
    url.searchParams.set("lat", lat);
    url.searchParams.set("lng", lng);
    url.searchParams.set("restaurantId", restaurantId);

    const response = await fetch(url.toString(), {
      headers: {
        "user-agent": "Mozilla/5.0",
        accept: "application/json",
      },
    });

    const text = await response.text();

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    res.status(response.status).send(text);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch restaurant menu",
      message: error.message,
    });
  }
};