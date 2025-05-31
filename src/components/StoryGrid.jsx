
import img1 from "../assets/img1.jpg"; 
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
const stories = [
    {
        id: 1,
        title: "The Legend of Tanah Lot",
        image: img1,
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
    },
    {
        id: 2,
        title: "Balinese Dance Traditions",
        image: img2,
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    },
    {
        id: 3,
        title: "Ubud's Art Scene",
        image: img3,
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 4,
        title: "Ceremonies of Bali",
        image: img4,
        snippet: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 5,
        title: "Bali's Culinary Delights",
        image: img5,
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 6,
        title: "Bali's Natural Wonders",
        image: img6,
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
    },
  ]
  export default function StoryGrid() {
    return (
      <section className="p-6">
        <h2 className="text-2xl font-headline text-coral mb-6">Featured Stories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg group"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-headline text-lg text-charcoal mb-2">{story.title}</h3>
                <p className="text-sm text-gray-700 font-body">
                  {story.snippet}
                </p>
                <div className="text-coral mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold cursor-pointer">
                  Read More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  