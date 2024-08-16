import Base from "./base";

 class User extends Base{
    createUser = async (url, input) => {
        return this.http(url, 'post', input)
      }
      getAllUser=async(url)=>{
        return this.http(url, 'get')

      }
}

export default new User