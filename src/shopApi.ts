async function getItems(limit: number) {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data = await response.json();
    return data;
}

async function getItemById(id: number | string) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
}

export { getItems, getItemById }