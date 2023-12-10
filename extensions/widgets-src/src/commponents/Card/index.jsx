import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';


const fetchReviews = async ({ pageParam,productId }) => {
  const res = axios.get(
    `${rvxpo_url}/-/api/storefront/${rvxpo_clientId}/widgets/products/${productId}/reviews/?shop=${rvxpo_shopDomain}&order_by=desc&rating=all&page=${pageParam}`
  );
  return res;
};

function Card({productId}) { 
  const {
    data,
    fetchNextPage,
    isPending,
    error,
  } = useInfiniteQuery({
    queryKey: ['reviews'],
    queryFn:(context) => fetchReviews({ pageParam: context.pageParam,productId:productId }),
    initialPageParam: 1, 
    getNextPageParam: (results) => { 
      return results?.data?.data?.meta.next_page_url && results?.data?.data?.meta.current_page + 1;
    },
  
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const bodyElement = document.body;
 

  useEffect(() => {
    let modalContainer = document.getElementById('modal-container');

    if (!modalContainer) {
      // Create a new div element
      modalContainer = document.createElement('div');
      modalContainer.setAttribute('id', 'modal-container');
      document.body.appendChild(modalContainer);
    }

    // Render the modal component into the newly created div
    if (isOpen) {
      // Modal content
      const modalContent = (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h2>Modal Content Goes Here</h2>
            {/* Add your modal content here */}
          </div>
        </div>
      );

      // Render modal content into the modal container
      ReactDOM.render(modalContent, modalContainer);
    }

    // Cleanup function to remove the modal container when the component unmounts
    return () => {
      modalContainer && document.body.removeChild(modalContainer);
    };
  }, [isOpen]);
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>

 
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