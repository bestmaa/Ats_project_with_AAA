import { BaseUrl } from "../../BaseUrl";

export async function Receive(url, d, method = "GET") {
  if (method === "GET") {
    let jsonData = await fetch(`${BaseUrl}/${url}`);
    let data = await jsonData.json();
    return data;
  } else {
    let jsonData = await fetch(`${BaseUrl}/${url}`,{
        method:method,
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(d),
    });
    let data = await jsonData.json();
    return data;
  }
}
