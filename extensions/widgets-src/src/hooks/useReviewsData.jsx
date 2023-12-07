 import {
  useQuery
} from '@tanstack/react-query'

import { storeFrontReviewsData } from '../actions/reviewsAction';

 
const useReviewsData = (params) => useQuery({
  queryKey: ['reviewsData'],
  queryFn: () =>storeFrontReviewsData(params),
})

export default useReviewsData;
