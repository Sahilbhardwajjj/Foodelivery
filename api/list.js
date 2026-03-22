module.exports = async function handler(req, res) {
  try {
    const {
      lat = "18.5204303",
      lng = "73.8567437",
      "is-seo-homepage-enabled": isSeoHomepageEnabled = "true",
      page_type: pageType = "DESKTOP_WEB_LISTING",
    } = req.query;

    const url = new URL("https://www.swiggy.com/dapi/restaurants/list/v5");
    url.searchParams.set("lat", lat);
    url.searchParams.set("lng", lng);
    url.searchParams.set("is-seo-homepage-enabled", isSeoHomepageEnabled);
    url.searchParams.set("page_type", pageType);

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
      error: "Failed to fetch restaurant list",
      message: error.message,
    });
  }
};
