import axios from "axios";

const apiEndpoint = "https://api.unsplash.com/"
const apiAccessKey = "zVdXkGnVKC0Cbqyu5PmtNI3-mX4Z2-LSkXZ9j1vauH8"

const searchImages = async (term) => {
    const response = await axios.get(apiEndpoint + "search/photos", {
        headers: {
            Authorization: "Client-ID " + apiAccessKey,
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;