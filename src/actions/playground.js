import axios from "axios";

export const fetchAlProducts = () => {
  return dispatch => {
    return axios
      .get("/api/products")
      .then(res => res.data)
      .then(allProducts => {
        dispatch(getAllProducts(allProducts));
      })
      .catch(console.error);
  };
};

export function fetchAllProducts() {
  return async dispatch => {
    try {
      const response = await axios.get("/api/products");
      const allProducts = response.data;

      dispatch(getAllProducts(allProducts));
    } catch (error) {
      console.error(error);
    }
  };
}
