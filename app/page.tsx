const { ACCESS_TOKEN } = process.env

const fetchData = async () => {
  const res = await fetch('https://artkalugin27.amocrm.ru/api/v4/leads', {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${ ACCESS_TOKEN }` }
  });
  return res.json();
};

export default async function Home() {
  const data = await fetchData().catch(() => null);
  return (
      <main>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Название сделки</th>
                <th>Бюджет</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {
                data?._embedded?.leads?.map(lead => (
                  <tr key={ lead.id }>
                    <td>{ lead.name }</td>
                    <td>{ lead.price }</td>
                    <td>{ lead.id }</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </main>
  );
}
