let stories = [];

export async function GET() {
  return Response.json(stories);
}

export async function POST(request) {
  const body = await request.json();
  const newStory = {
    id: stories.length + 1,
    title: body.title,
    content: body.content,
    author: body.author || "Anonymous",
  };

  stories.push(newStory);

  return Response.json({ message: "Story stored", story: newStory });
}
