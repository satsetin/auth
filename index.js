import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import {getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.7/croot.js";
import {redirect} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

if (getCookie("login")===""){
    redirect("/");
}

getJSON("https://asia-southeast2-awangga.cloudfunctions.net/satsetin/data/user","login",getCookie("login"),responseFunction)

function responseFunction(result){
    if (result.status === 200){
        setInner("content","Selamat datang "+result.data.name);
        redirect("https://satsetin.github.io/home.html");
    }else{
        getJSON("https://asia-southeast2-awangga.cloudfunctions.net/satsetin/data/konsumen/user","login",getCookie("login"),apiResponse)
    }
    console.log(result);
}

function apiResponse(result){
    if (result.status===200){
        setInner("content","Selamat datang "+result.data.data.fullname);
        redirect("/testi");
    }else{
        setInner("content","Silahkan lakukan pendaftaran dahulu ke Makanear Login");
        redirect("https://satsetin.github.io/login.html");  
       //redirect("https://wa.me/pamongdesa?text=bantuan+operator");
    }
    
}