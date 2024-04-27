import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MYLIst = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myProducts/${email}`)
      .then(res => res.json())
      .then(data => setDatas(data));
  }, []);

  const handileClickDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(deletes => {
            if (deletes.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
            const finalProduct = datas.filter(prod => prod._id !== _id);
            setDatas(finalProduct);
          });
      }
    });
  };

  return (
    <div className="my-[100px] w-[88%] mx-auto">
      <h2>MY tourst List: </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xl font-bold">
              <th></th>
              <th>UserName</th>
              <th>Turist sport Name</th>
              <th>Country Name</th>
            </tr>
          </thead>
          {datas.map((pro, index) => (
            <tbody key={index}>
              {/* row 1 */}
              <tr className="bg-base-200 ">
                <th>{index + 1}</th>
                <td>{pro?.userName}</td>
                <td>{pro?.TouristsSoprt}</td>
                <td>{pro?.countryName}</td>
                <div className="flex gap-6">
                  <Link to={`/updates/${pro._id}`}>
                    {' '}
                    <button className="btn bg-[#FF497C] text-white">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handileClickDelete(pro._id)}
                    className="btn bg-[#FF497C] text-white"
                  >
                    Delete
                  </button>
                </div>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MYLIst;
