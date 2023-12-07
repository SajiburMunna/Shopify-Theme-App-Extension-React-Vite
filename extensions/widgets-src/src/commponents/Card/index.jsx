import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios';


const fetchReviews = async ({ pageParam }) => {
  const res = axios.get(
    `https://shopify.revews.dev/-/api/storefront/r5mS-V8mjj9Xq-Zr80/widgets/products/7707374551207/reviews/?shop=testjouleslabs.myshopify.com&order_by=desc&rating=all&page=${pageParam}`
  );
  return res;
};

function Card() { 
  const {
    data,
    fetchNextPage,
    isPending,
    error,
  } = useInfiniteQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
    initialPageParam: 1, 
    getNextPageParam: (results) => { 
      return results?.data?.data?.meta.next_page_url && results?.data?.data?.meta.current_page + 1;
    },
  
  });
   
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
    <div className='container'>4Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in suscipit, quia pariatur soluta illo magnam labore mollitia molestiae quibusdam exercitationem quisquam ex inventore consectetur enim accusamus. Eveniet, sunt voluptatibus.34

{data?.pages?.map((page) => {
 
 return page?.data?.data?.reviews.map((item) => { 
   return <div key={item.uid}>{item.name}</div>
 })
})}

<div onClick={fetchNextPage}>
 load More
</div>
    </div>
    </>
    
  )
}

export default Card