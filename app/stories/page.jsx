// export default function StoriesPage() {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 text-white text-center px-4">
//         <h1 className="text-5xl font-bold mb-6">All Stories 💫</h1>
//         <p className="text-lg text-white/80 mb-10">Here you can read real emotions shared by others.</p>
//       </div>
//     );
//   }


// import StoryCard from "../../components/StoryCard";
// export default function StoriesPage() {
//   const stories = [
//     { id: 1, title: "The Silent Goodbye", author: "Anonymous", excerpt: "Sometimes goodbye means finding yourself again..." },
//     { id: 2, title: "Midnight Thoughts", author: "A Dreamer", excerpt: "When the world sleeps, the heart speaks the loudest." },
//     { id: 3, title: "Unsent Letters", author: "Lost Soul", excerpt: "I wrote everything I couldn’t say out loud..." },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 text-white px-6 py-10">
//       <h1 className="text-5xl font-bold text-center mb-8">All Stories 💫</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {stories.map((story) => (
//           <StoryCard key={story.id} {...story} />
//         ))}
//       </div>
//     </div>
//   );
// }




// import StoryCard from "../components/StoryCard";

// export default function StoriesPage() {
//   const stories = [
//     { id: 1, title: "The Silent Goodbye", author: "Anonymous", excerpt: "Sometimes goodbye means finding yourself again..." },
//     { id: 2, title: "Midnight Thoughts", author: "A Dreamer", excerpt: "When the world sleeps, the heart speaks the loudest." },
//     { id: 3, title: "Unsent Letters", author: "Lost Soul", excerpt: "I wrote everything I couldn’t say out loud..." },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 text-white px-6 py-10">
//       <h1 className="text-5xl font-bold text-center mb-8">All Stories 💫</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {stories.map((story) => (
//           <StoryCard key={story.id} {...story} />
//         ))}
//       </div>
//     </div>
//   );
// }





import StoryCard from "@/component/StoryCard";


export default function StoriesPage() {
  const stories = [
    { id: 1, title: "The Silent Goodbye", author: "Anonymous", excerpt: "Sometimes goodbye means finding yourself again..." },
    { id: 2, title: "Midnight Thoughts", author: "A Dreamer", excerpt: "When the world sleeps, the heart speaks the loudest." },
    { id: 3, title: "Unsent Letters", author: "Lost Soul", excerpt: "I wrote everything I couldn’t say out loud..." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 text-white px-6 py-10">
      <h1 className="text-5xl font-bold text-center mb-8">All Stories 💫</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stories.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>
    </div>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import StoryCard from "@/app/component/StoryCard";

// export default function StoriesPage() {
//   const [stories, setStories] = useState([]);

//   useEffect(() => {
//     fetch("/api/stories")
//       .then((res) => res.json())
//       .then((data) => setStories(data));
//   }, []);

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">All Stories</h1>

//       <div className="space-y-4">
//         {stories.length === 0 ? (
//           <p className="text-center text-gray-500">No stories yet.</p>
//         ) : (
//           stories.map((s) => (
//             <StoryCard
//               key={s.id}
//               id={s.id}
//               title={s.title}
//               content={s.content}
//               author={s.author}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
