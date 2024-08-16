import { Route,Routes} from "react-router-dom"
import { CreateUser } from "../pages/Create"
import { UserList } from "../pages/List"
import { Update } from "../pages/Update"

export const Router=()=>{


    return(
        
        <Routes>
<Route path="/" element={<CreateUser/>} />
<Route path="/users" element={<UserList/>} />
<Route path="/view/:id" element={<Update/>} />

        </Routes>
    )
}