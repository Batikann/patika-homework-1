import axios from "axios";

async function getData(id) {
    const{data:user} =await (axios(`https://jsonplaceholder.typicode.com/users/${id}`));
    console.log(user);
    const {data:post} =await (axios(`https://jsonplaceholder.typicode.com/posts/${id}`));
    console.log(post);
}

export default getData;