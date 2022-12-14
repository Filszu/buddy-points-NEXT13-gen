'use client';

import { useSearchParams } from 'next/navigation';

const getLeads = () => {
    const searchParams = useSearchParams();

    const page = searchParams.get('offer_name');
    console.log(page)
  return (
    <div>getLeads {page?page:"none"}</div>
  )
}

const postLeads = () => {
    const searchParams = useSearchParams();

    const page = searchParams.get('offer_name');
    console.log(page)
}

export default getLeads