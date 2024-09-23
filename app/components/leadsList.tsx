import Card from "../components/card";

const { ACCESS_TOKEN } = process.env

const fetchData = async () => {
  const res = await fetch('https://artkalugin27.amocrm.ru/api/v4/leads', {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${ ACCESS_TOKEN }` }
  });
  return res.json();
};


const LeadsList = async () => {
    const data = await fetchData().catch(() => null);
    return (
        <div className="grid gap-4">
            {
                data?._embedded?.leads?.map(lead => (
                    <Card key={ lead.id } name={ lead.name } id={ lead.id }  price={ lead.price } />
                ))
            }
        </div>
    );
}
 
export default LeadsList;