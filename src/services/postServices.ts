import { Post } from "@/models/postModel";

const posts: Post[] = [];
let id = 1;

/* fungsi get semua post */
export async function Index() {
    return posts;
}

/* fungsi create post baru */
export async function Store(data : {title: string, content: string}) {
    const newPost: Post = {
        id: id++,
        title: data.title,
        content: data.content,
        craetedAt: new Date(),
    };
    posts.push(newPost);
    return newPost;
}

export async function deletePost(postId: string): Promise<Response> {
  
  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
}



