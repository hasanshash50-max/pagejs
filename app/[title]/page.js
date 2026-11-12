export default async function () {
    const response = await fetch(
         "https://jsonplaceholder.typicode.com/posts",
        {
            next: {
                revalidate: 120,
            },
        }
    );
    const posts = await response.json();
    const postJSX = posts.slice(0,5).map((post) => {
        return (
              <div>
                 <h2 id="title">{post.title}</h2>
                 <p id="body">{post.body}</p>
              </div>
        );
    });
    return (
        <div>
            <h1>
               
            </h1>
            {postJSX}
        </div>
    );
} 