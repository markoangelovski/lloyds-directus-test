export default function registerHook({ action }) {
  action("items.create", async ({ collection, item }) => {
    if (collection === "articles") {
      console.log(`New article created: ${item.title}`);
    }
  });
}
