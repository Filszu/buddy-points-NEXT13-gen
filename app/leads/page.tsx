import { serverURL } from "../../config/config";
import { Lead } from "../../typing";

const getLeads = async() =>{
  const res = await fetch(`${serverURL}/api/leads`,{next:{revalidate:60}})

    const leads:Lead[]= await res.json();

    console.log(leads)

    return leads;
}

const LeadsPage=async() =>{
  const leads = await getLeads();
  return (
    
    <div className="container">
      
      <section>
        <>
        <h1>Latest leads</h1>
        <h2>PAGE: 1 ROWS per page:10</h2>

        
        <table>
        
        <tr>
          <th>leadID</th>
          <th>offer_id</th>
          <th>offer_name</th>
          <th>admitad_id</th>
          <th>website_name</th>
          <th>website_id</th>
          <th>subid</th>
          <th>action</th>
          <th>action_id</th>
          <th>subid1</th>
          <th>subid2</th>
          <th>subid3</th>
          <th>subid4</th>
          <th>payment_sum</th>
          <th>payment_status</th>
          <th>reward_ready</th>
          <th>currency</th>
          <th>order_id</th>
          <th>order_sum</th>
          <th>click_time</th>
          <th>time</th>
          <th>conversion_time</th>
          <th>type</th>
          <th>user_agent</th>
          <th>user_referer</th>
          <th>country_code</th>

        </tr>
            {leads.map((lead)=><tr>
              <td>{lead.leadID}</td>
              <td>{lead.offer_id}</td>
              <td>{lead.offer_name}</td>
            <td>{lead.admitad_id}</td>
            <td>{lead.website_name}</td>
            <td>{lead.website_id}</td>
            <td>{lead.subid}</td>
            <td>{lead.action}</td>
            <td>{lead.action_id}</td>
            <td>{lead.subid1}</td>
            <td>{lead.subid2}</td>
            <td>{lead.subid3}</td>
            <td>{lead.subid4}</td>
            <td>{lead.payment_sum}</td>
            <td>{lead.payment_status}</td>
            <td>{lead.reward_ready}</td>
            <td>{lead.currency}</td>
            <td>{lead.order_id}</td>
            <td>{lead.order_sum}</td>
            <td>{lead.click_time}</td>
            <td>{lead.time}</td>
            <td>{lead.conversion_time}</td>
            <td>{lead.type}</td>
            <td>{lead.user_agent}</td>
            <td>{lead.user_referer}</td>
            <td>{lead.country_code}</td>
              
            </tr>)}
          
        </table>
        </>
{/*         
        <table>       
        <tr>
          <th>leadID</th>
          <th>offer_id</th>
          <th>offer_name</th>
          <th>admitad_id</th>
          <th>website_name</th>
          <th>website_id</th>
          <th>subid</th>
          <th>action</th>
          <th>action_id</th>
          <th>subid1</th>
          <th>subid2</th>
          <th>subid3</th>
          <th>subid4</th>
          <th>payment_sum</th>
          <th>payment_status</th>
          <th>reward_ready</th>
          <th>currency</th>
          <th>order_id</th>
          <th>order_sum</th>
          <th>click_time</th>
          <th>time</th>
          <th>conversion_time</th>
          <th>type</th>
          <th>user_agent</th>
          <th>user_referer</th>
          <th>country_code</th>

        </tr>

        {
          leads.map((lead)=>{
            <tr key={lead.leadID}>
              <td>{lead.leadID}</td>
              <td>{lead.offer_name}</td>
            </tr>

          })
        }
          
        </table> */}
        
      </section>

    </div>
    
  )
}

export default LeadsPage