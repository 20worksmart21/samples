import axios from "axios";
export const myFetch = (url) => {
     fetch(url).then((res) => {
        console.log("???", res)
        return res.json();
    }, (rej) => {
        console.log("some error happened", rej)
    });
}

export const myaxios = (url) => {
    try{
        axios.get(url).then((data) => data, err => {
            console.log("axios error", err)
        });
    } catch (err){
        console.log("axios error")
    }

}