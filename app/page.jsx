// export default function Home() {
//     return (
//       <main className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400 text-white flex flex-col items-center justify-center px-6 text-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
//           StoryNest
//         </h1>
//         <p className="text-lg md:text-xl max-w-2xl mb-8">
//           A safe space to share your real-life emotions — love, pain, and motivation.  
//           Express yourself. Inspire others. ✨
//         </p>
//         <div className="flex gap-4">
//           <a
//             href="/share"
//             className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition transform"
//           >
//             Share Your Story
//           </a>
//           <a
//             href="/feed"
//             className="bg-transparent border-2 border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-purple-700 transition"
//           >
//             Read Stories
//           </a>
//         </div>
  
//         <footer className="absolute bottom-4 text-sm opacity-80">
//           © {new Date().getFullYear()} StoryNest · Built with ❤️ by Akash
//         </footer>
//       </main>
//     );
//   }





import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white text-center px-4">
      <h1 className="text-6xl font-extrabold mb-3 tracking-wide drop-shadow-lg">
        StoryNest 🕊️
      </h1>

      <p className="text-lg max-w-lg text-white/90 mb-10">
        A cozy digital space to share real emotions — <br />
        Love ❤️ | Pain 💔 | Motivation 💪 | Life 🌙
      </p>

      <div className="flex space-x-5">
        <Link
          href="/share"
          className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition-all"
        >
          Share Your Story
        </Link>

        <Link
          href="/stories"
          className="bg-pink-700 hover:bg-pink-800 px-6 py-3 rounded-xl font-semibold shadow-lg transition-all"
        >
          Read Stories
        </Link>
      </div>

      <footer className="absolute bottom-5 text-white/70 text-sm">
        Made with ❤️ by Akash kumar
      </footer>
    </div>
  );
}






// "use client";

// import { useState } from "react";

// export default function ShareStory() {
//   const [form, setForm] = useState({
//     name: "",
//     title: "",
//     story: "",
//     emotion: "Love",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Story submitted:", form);
//     alert("Your story has been shared 💖");
//     setForm({ name: "", title: "", story: "", emotion: "Love" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 flex flex-col items-center justify-center px-4 py-10 text-white">
//       <h1 className="text-4xl font-bold mb-2">Share Your Story 🕊️</h1>
//       <p className="mb-8 text-white/80 text-center max-w-lg">
//         Express your heart — your story might inspire, heal, or touch someone’s soul 💫
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-full max-w-md shadow-xl"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name (optional)"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
//         />

//         <input
//           type="text"
//           name="title"
//           placeholder="Story Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//           className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
//         />

//         <textarea
//           name="story"
//           placeholder="Write your story..."
//           value={form.story}
//           onChange={handleChange}
//           required
//           rows="6"
//           className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
//         ></textarea>

//         <select
//           name="emotion"
//           value={form.emotion}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white outline-none"
//         >
//           <option value="Love">❤️ Love</option>
//           <option value="Pain">💔 Pain</option>
//           <option value="Motivation">💪 Motivation</option>
//           <option value="Life">🌙 Life</option>
//         </select>

//         <button
//           type="submit"
//           className="w-full bg-white text-pink-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
//         >
//           Share Story
//         </button>
//       </form>
//     </div>
//   );





// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white text-gray-800 px-4">
//       {/* Logo + Name */}
//       <div className="flex flex-col items-center mb-8">
//         <Image
//           src="/logo.png"
//           alt="StoryNest Logo"
//           width={80}
//           height={80}
//           className="rounded-full mb-3"
//         />
//         <h1 className="text-4xl font-bold mb-2">StoryNest</h1>
//         <p className="text-lg text-gray-600 text-center max-w-md">
//           A safe space to share emotions, experiences, and real stories —
//           <br /> anonymously or with your name.
//         </p>
//       </div>

//       {/* Buttons */}
//       <div className="flex space-x-6 mt-4">
//         <Link
//           href="/submit"
//           className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-pink-600 transition"
//         >
//           Share Your Story
//         </Link>

//         <Link
//           href="/story"
//           className="border border-pink-500 text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
//         >
//           Read Stories
//         </Link>
//       </div>

//       {/* Footer */}
//       <footer className="absolute bottom-6 text-sm text-gray-500">
//         © {new Date().getFullYear()} StoryNest — Crafted with ❤️
//       </footer>
//     </main>
//   );
// }
