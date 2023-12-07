  async function storeFrontReviewsData(params){
    return axios
      .get(
        `https://shopify.revews.dev/-/api/storefront/${params.shopUid}/widgets/products/${params.productId}/reviews/?shop=${params.shopDomain}&order_by=${params.order_by}&rating=${params.star}&page=${params.pageParam}`,
        {
          headers: {
            'X-localization': params.lang,
          },
        }
      )
      .then((response) => response?.data?.data);
  }

  export {
    storeFrontReviewsData,
  }