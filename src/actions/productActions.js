import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_CREATOR,
  SEARCH_PRODUCT,
  FILTER_PRODUCTS_BY_PRICE,
} from "../const/const";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();

  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};


export const filterProducts = (products, creator) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_CREATOR,
    payload: {
      creator: creator,
      items:
        creator === ""
          ? products
          : products.filter((i) => i.creator.indexOf(creator) >= 0),
    },
  });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "Latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  dispatch({
    type: FILTER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
