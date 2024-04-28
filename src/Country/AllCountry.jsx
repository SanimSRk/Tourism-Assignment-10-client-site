import { useLoaderData } from 'react-router-dom';
const AllCountry = () => {
  const countryData = useLoaderData();
  return (
    <div>
      <h2>hello world:{countryData.length}</h2>
    </div>
  );
};

export default AllCountry;
