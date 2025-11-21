// "use client";
// import { useState } from "react";

// export default function SubmitStory() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [author, setAuthor] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ title, content, author });
//     alert("Story submitted successfully (backend connection next step)");
//     setTitle("");
//     setContent("");
//     setAuthor("");
//   };

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-pink-50 pt-20 px-4">
//       <h1 className="text-3xl font-bold mb-6 text-pink-600">Share Your Story</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
//       >
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full mb-4 border border-gray-300 rounded-md p-2"
//           required
//         />

//         <textarea
//           placeholder="Write your story..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           rows="6"
//           className="w-full mb-4 border border-gray-300 rounded-md p-2"
//           required
//         />

//         <input
//           type="text"
//           placeholder="Your Name (optional)"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           className="w-full mb-4 border border-gray-300 rounded-md p-2"
//         />

//         <button
//           type="submit"
//           className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 transition"
//         >
//           Submit Story
//         </button>
//       </form>
//     </main>
//   );
// }


"use client";
import { useState } from "react";

export default function SharePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch("/api/stories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, author }),
    });
  
    const data = await res.json();
  
    alert("Story submitted!");
  
    setTitle("");
    setContent("");
    setAuthor("");
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ title, content, author });
  //   alert("Story submitted successfully (backend connection next step)");
  //   setTitle("");
  //   setContent("");
  //   setAuthor("");
  // };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-50 pt-20 px-4">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Share Your Story</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 border border-gray-300 rounded-md p-2 text-black !text-black autofill:!text-black"
          required
        />

        <textarea
          placeholder="Write your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          className="w-full mb-4 border border-gray-300 rounded-md p-2 text-black !text-black autofill:!text-black"
          required
        />

        <input
          type="text"
          placeholder="Your Name (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mb-4 border border-gray-300 rounded-md p-2 text-black !text-black autofill:!text-black"
        />


        {/* <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 border border-gray-300 rounded-md p-2"
          required
        />

        <textarea
          placeholder="Write your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          className="w-full mb-4 border border-gray-300 rounded-md p-2"
          required
        />

        <input
          type="text"
          placeholder="Your Name (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mb-4 border border-gray-300 rounded-md p-2"
        /> */}

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 transition"
        >
          Submit Story
        </button>
      </form>
    </main>
  );
}



// "use client";

// import { useState } from "react";

// export default function SharePage() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [author, setAuthor] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/stories", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, content, author }),
//     });

//     const data = await res.json();
//     setLoading(false);

//     alert("Story Submitted Successfully!");

//     setTitle("");
//     setContent("");
//     setAuthor("");
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">Share Your Story</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Story Title"
//           className="w-full border p-3 rounded-lg"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         <textarea
//           placeholder="Write your story..."
//           className="w-full border p-3 rounded-lg h-40"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//         ></textarea>

//         <input
//           type="text"
//           placeholder="Your Name (optional)"
//           className="w-full border p-3 rounded-lg"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />

//         <button
//           type="submit"
//           className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold"
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Submit Story"}
//         </button>
//       </form>
//     </div>
//   );
// }
