import Image from "next/image";

function ProjectCard({ project }) {
  const { info, tech } = project[Object.keys(project)[0]];
  undefined;

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        {/* Render project title */}
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {info.title}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <div>
          {/* Render project info */}
          <article
            key={info.title}
            style={{
              borderImage:
                "linear-gradient(to right, #4a148c, #880e4f, #b71c1c, #e65100, #ffea00, #b2ff59, #1de9b6, #00b0ff, #3d5afe, #6200ea) 1",
            }}
            className="flex flex-col gap-10"
          >
            <div className="w-full">
              {/* Render project image */}
              <Image
                className="rounded-lg w-full"
                width={500}
                height={300}
                src={info.gif}
                alt=""
              />
            </div>
            <div className="w-full pr-3 mt-5 px-4">
              <div className="flex justify-between w-full">
                {/* Render project title */}
                <h1 className="text-2xl text-[#e0aaff] font-bold mr-2">
                  {info.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {/* Map through project tech and render tech icons */}
                  {tech.map((item, index) => (
                    <Image
                      key={index}
                      className="w-10 rounded-full bg-white"
                      width={50}
                      height={50}
                      src={item.src}
                      alt={item.name}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-white">
                  {/* Render project description */}
                  <p className="text-lg my-6">{info.desc}</p>
                </div>
                <div className="text-white flex justify-evenly gap-2">
                  {/* Render project links */}
                  <a href={info.code} target="_blank" rel="noreferrer">
                    <div className="text-xl my-6">
                      <span>
                        <img
                          className="w-16 rounded-2xl"
                          src="https://i.postimg.cc/FdPkrFs5/Github.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </a>
                  <p className="text-xl my-6">
                    <a href={info.live} target="_blank" rel="noreferrer">
                      <img
                        className="w-16 rounded-2xl"
                        src="https://i.postimg.cc/YG2mBL7z/Live.png"
                        alt=""
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
