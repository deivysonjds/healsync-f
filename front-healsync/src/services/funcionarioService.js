import Cookies from "js-cookie";
const URL_BASE_FUNCIONARIOS = `${process.env.NEXT_PUBLIC_API}/funcionarios`

export async function fetchUserData(setUserData) {
    const token = Cookies.get("token");
    
    const res = await fetch(URL_BASE_FUNCIONARIOS, {
        method: "GET",
        headers: {
        Authorization: `Bearer ${token}`
        },
    });

    const data = await res.json();
    
    setUserData(data);
}

