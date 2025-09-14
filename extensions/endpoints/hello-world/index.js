export default function registerEndpoint(router, { services, exceptions }) {
  router.get('/', (req, res) => {
    res.json({ message: 'Hello from Lloyds Directus custom endpoint!' });
  });
}
