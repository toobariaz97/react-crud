import React, { useEffect, useState } from "react";
import { fetchUsers } from "../data/user";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../store/actions";
import Table from "../components/table";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from '@mui/icons-material/Edit';

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  {
    key: "phone",
    label: "Phone",
  },
  {
    key: "address",
    label: "Address",
  },
  {
    key: "city",
    label: "City",
  },
  {
    key: "state",
    label: "State",
  },
];
export const UserList = () => {
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state?.users);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  const fetchData = async (page=1) => {
    const data = await fetchUsers({page});
    dispatch(setAuth(data));
    setData({ ...data });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {/* <div className="">
        <button className="btn btn-primary">
          <Link to={"/"} className="text-white">
            Create User
          </Link>
        </button>
      </div> */}

      <div className="row row-table border p-3">
        <div>
          <h2 className=""> User List</h2>
        </div>

        {loading ? (
          <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
        ) : (
          <Table
            data={data}
            fields={columns}
            hasPagination={true}
            extraHeads={() => <th className="">Action</th>}
            extraCells={(item) => (
              <td>
                <div className="row">
                  {/* <div className=" text-left col-3">
                    <Link className="text-black" to={`/view/${item._id}`}>
                      <RemoveRedEyeIcon />
                    </Link>
                  </div> */}
                  <div className="col-3 ">
                    <DeleteIcon />
                  </div>
                  <div className="col-3">
                     <div className=" text-left col-3">
                    <Link className="text-black" to={`/view/${item._id}`}>
                    <EditIcon/>
                    </Link>
                  </div>
                  </div>
                </div>
              </td>
            )}
            pageChanged={(page) => fetchData(page)}
          />
        )}
      </div>
    </div>
  );
};
