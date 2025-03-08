async function MyRequest(endpoint : string) {
    const response = await fetch(endpoint);

    return response.json();
}

export default MyRequest;