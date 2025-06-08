
export async function validateToken(token){

    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/validate`, {
        method: "POST",
        headers: {
        Authorization: `Bearer ${token}`
        },
    });

    if (res.status != 202) {
        return false
    }

    return true
}