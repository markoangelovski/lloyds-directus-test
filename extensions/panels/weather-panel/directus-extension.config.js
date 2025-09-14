export default {
  id: "weather-panel",
  name: "Weather Panel",
  icon: "cloud",
  description: "Shows current weather in Lloyds Directus",
  component: () => import("./src/index.tsx"),
};
