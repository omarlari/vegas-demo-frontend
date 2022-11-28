export function addDataLayer(map, data) {
  if (!map.getSource("dcmusic.live")) {
    map.addSource("dcmusic.live", {
      type: "geojson",
      data: data,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
      clusterProperties: {
        sum: ["+", ["get", "event_count"]],
      },
    });
  } else {
    map.getSource("dcmusic.live").setData(data);
  }

  map.addLayer({
    id: "unclustered-point",
    type: "circle",
    source: "dcmusic.live",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-radius": ["step", ["get", "event_count"], 20, 100, 30, 750, 40],
      "circle-color": "rgb(229, 36, 59)",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  /*map.addLayer({
    id: "unclustered-point",
    source: "dcmusic.live",
    filter: ["!", ["has", "point_count"]],
    type: "heatmap",
  });*/

  map.addLayer({
    id: "event-count",
    type: "symbol",
    source: "dcmusic.live",
    filter: ["!", ["has", "point_count"]],
    layout: {
      "text-field": "{event_count}",
      "text-font": ["Open Sans Bold"],
      "text-size": 16,
    },
    paint: {
      "text-color": "white",
    },
  });
}
