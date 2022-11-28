export default (req, res) => {
    res.statusCode = 200;
    res.json({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-115.1749, 36.092] },
          properties: {
            title: "Mandalay Bay",
            cluster: false,
            venue: "MND",
            event_count: 5,
          },
        },
      ],
    });
  };
  