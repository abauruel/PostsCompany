import axios from "axios";

interface IUsers {
  id: number;
  company: {
    name: string;
  };
}
interface IPosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

class ListPostsFromCompany {
  public async execute(name: string): Promise<IPosts[]> {
    if (!name) {
      throw new Error("Company name invalid");
    }

    const users = await axios.get<IUsers[]>(
      "http://jsonplaceholder.typicode.com/users"
    );
    const posts = await axios.get<IPosts[]>(
      "http://jsonplaceholder.typicode.com/posts"
    );

    const usersFromCompany = users.data
      .filter((user) => user.company.name === name)
      .map((user) => user.id);
      
    const postCompany = posts.data.filter((posts) => {
      if (usersFromCompany.includes(posts.userId)) {
        return posts;
      }
    });

    return postCompany;
  }
}
export default ListPostsFromCompany;
