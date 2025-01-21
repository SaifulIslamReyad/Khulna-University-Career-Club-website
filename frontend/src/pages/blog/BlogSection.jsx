import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="bg-gradient-to-tr from-[#55b2b2] from-0% to-[#0c80b2] to-100% w-full h-full">
      <section className="w-full flex items-center justify-center flex-col relative">
        {/* Section article and heading starts*/}
        <section className="flex flex-col items-center justify-center gap-5 md:gap-10 pt-10 md:pt-20 text-center px-20">
          <article className="text-xl md:text-3xl text-white">
            Our club thrives thanks to the dedication of its members. Meet the
            team behind the events, initiatives, and programs that shape the
            future of Khulna University students.
          </article>
          <div className="relative w-full flex flex-col items-center justify-center">
            <div>
              <h1 className="text-xl md:text-4xl text-gray-950">
                Admin&apos;s Picks
              </h1>
              <span>
                <hr className="mt-1 w-30 h-1 bg-gray-950 rounded-sm shadow-sm" />
              </span>
            </div>
            <div className="relative sm:absolute pt-3 sm:pt-0 right-0 bottom-3 ">
              <Button>
                <Link to="/blog/create">Post Your Blog</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Section article and heading ends */}
        {/* Blog section */}
        <section className="flex flex-col justify-center items-center gap-5 md:gap-10 my-10 w-full h-full px-10 ">
          {/* blog -1 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 border shadow-lg">
            <img
              src="src/assets/images/post1.png"
              className="w-48 sm:w-72 md:w-96 h-32 sm:h-48 md:h-72 object-cover p-2"
            />
            <article className="flex flex-col gap-2 items-center sm:items-start justify-start p-2">
              <h2 className="text-xl sm:text-2xl md:2xl font-light">
                MINIMALISM
              </h2>
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-950 ">
                Culpa sit Laboris Exerc itatio nea Fugiat
              </h1>
              <div className="text-sm sm:text-xl md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                soluta aut assumenda dolores minima cupiditate, dolorum maiores
                ipsam, praesentium unde doloremque et? Nulla
              </div>
            </article>
          </div>
          {/* Blog 2 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 border shadow-lg">
            <img
              src="src/assets/images/post2.png"
              className="w-48 sm:w-72 md:w-96 h-32 sm:h-48 md:h-72 object-cover p-2"
            />
            <article className="flex flex-col gap-2 items-center sm:items-start justify-start p-2">
              <h2 className="text-xl sm:text-2xl md:2xl font-light">
                TECHNOLOGY
              </h2>
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-950 ">
                Amet non Ex Offic ia nulla Cupi d atat
              </h1>
              <div className="text-sm sm:text-xl md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                soluta aut assumenda dolores minima cupiditate, dolorum maiores
                ipsam, praesentium unde doloremque et? Nulla
              </div>
            </article>
          </div>
          {/* Blog 3 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 border shadow-lg p-2">
            <img
              src="src/assets/images/post3.png"
              className="w-48 sm:w-72 md:w-96 h-32 sm:h-48 md:h-72 object-cover p-2"
            />
            <article className="flex flex-col gap-2 items-center sm:items-start justify-start">
              <h2 className="text-xl sm:text-2xl md:2xl font-light">ARTICLE</h2>
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-950 ">
                Dolor ex Tempor Cotur Culpa li
              </h1>
              <div className="text-sm sm:text-xl md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                soluta aut assumenda dolores minima cupiditate, dolorum maiores
                ipsam, praesentium unde doloremque et? Nulla
              </div>
            </article>
          </div>
        </section>
      </section>
    </div>
  );
};
export default BlogSection;
