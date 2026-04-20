//async js coding is a way to write code that can run asynchronously, meaning that it can run in the background while other code is running. This is useful for tasks that take a long time to complete, such as fetching data from an API or reading a file. 
// line by line code is synchronous lekin jo code async nature ka ho, usey side stack mein bhej do and agle code ko chalao o bhi sync nature ka ka ho, jab bhi saara syn code chal jaaye, tab check ckaro ki async code complete hua ya nhi and agar wo complete hua ho to usey stack mei laao and execute krdo.

async function abcd(){
    var blob = await fetch('https://randomuser.me/api/'); // await is used to wait for the promise to resolve before moving on to the next line of code.
    var ans = await blob.json();

    console.log(ans.results[0]);
}

abcd();

