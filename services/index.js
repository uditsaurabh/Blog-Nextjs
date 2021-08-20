export const getPosts = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  response = await response.json();
  return response;
};
export const getCommentsForPostById = async (id) => {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  res = await res.json();
  return res;
};
export const getPostById = async (id) => {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  res = await res.json();
  return res;
};
export const deletePostById = async (id) => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
  return res;
};
