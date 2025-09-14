export default {
  id: "custom-ui",
  name: "Custom UI",
  icon: "box",
  description: "A custom Vue input field for Lloyds Directus",
  component: () => import("./src/index.vue"),
};
