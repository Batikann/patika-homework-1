import axios from "axios";

async function getData(id) {
    //ilk önce verilen id ye göre o kullanıcıyı getiriyoruz
    const{data:user} =await (axios(`https://jsonplaceholder.typicode.com/users/${id}`));

    //gelen userı yazdırıyoruz console ekranına
    console.log(user);
    //verilen id değerine göre postu yazdırıyoruz.
    const {data:post} =await (axios(`https://jsonplaceholder.typicode.com/posts/${id}`));
    //gelen post değerini console ekranona yazdırıyoruz
    console.log(post);
}

//Fonksiyonumuzu export ediyoruz dışarıya kullanıma açıyoruz.
export default getData;