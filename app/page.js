import Link from "next/link";
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";
import Image from "next/image";
const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];
const cards = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Home() {
  return (
    <div id="home_page">
      <div className="">
        <div className="flex justify-end sticky top-0 py-5 px-3 bg-gray-500">
          <Link href="#software" className="text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500 mr-4">
            Software Development
          </Link>
          <Link href="#roadmap" className="text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500">
            Roadmap
          </Link>
        </div>

        <div className="container mx-auto px-4">
          <section id="sofware" className="min-h-[300px] p-10 text-gray-300">
            <h2 className="text-3xl mb-3 font-bold">Software Development</h2>
            <p className="text-xl mb-5">
              Commit code and explore changes. Review code and create merge requests. Create, manage, share, and
              reproduce cloud dev environments. Automate your workflows and CI/CD pipelines. Store and manage package
              repositories. Connect JetBrains IDEs to Space.
            </p>

            <div className="grid grid-cols-3 gap-4 justify-between mb-6">
              {cards.map((card) => (
                <>
                  <div key={card.name} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <card.icon className="h-10 w-10 text-indigo-600 mb-5" aria-hidden="true" />
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {card.name}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </>
              ))}
            </div>

            <h2 className="text-3xl mb-3 font-bold">Source code management</h2>

            <p className="text-xl mb-5">Fast and scalable Git hosting and streamlined source code management.</p>

            <div className="overflow-hidden bg-gray-300 py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        A better workflow
                      </p>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
                        eaque, iste dolor cupiditate blanditiis ratione.
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                              <feature.icon
                                className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                aria-hidden="true"
                              />
                              {feature.name}
                            </dt>{" "}
                            <dd className="inline">{feature.description}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  <Image
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                    alt="Product screenshot"
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width={2432}
                    height={1442}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="border-b-2 border-b-stone-600 h-[2px]"></div>
        <div className="container mx-auto px-4 py-10">
          <section id="roadmap" className="min-h-[300px] text-gray-300">
            <h2 className="text-4xl mb-3 font-bold">Roadmap</h2>
            <p className="text-xl mb-5">
              Commit code and explore changes. Review code and create merge requests. Create, manage, share, and
              reproduce cloud dev environments. Automate your workflows and CI/CD pipelines. Store and manage package
              repositories. Connect JetBrains IDEs to Space.
            </p>

            <div className="flex px-20">
              <div className="md:basis-4/12">
                <h3 className="text-xl">Space Issue flow </h3>
                <p className="text-gray-300">
                  Space Issue flow is an issue-centric approach to software development workflow that seamlessly
                  integrates coding into the development pipeline, boosting developer productivity and reducing
                  friction. Developers can focus on writing code while Space handles tasks like development environment
                  setup, branch creation, testing, and deployment, with each change linked to the related issue.
                </p>
              </div>
              <div className="md:basis-8/12">
                <Image
                  src="https://www.jetbrains.com/space/roadmap/img/2023-q-3-4/Roadmap_issue_flow.png"
                  alt="Flow roadmap"
                  className="w-full h-full" // just an example
                  height={300}
                  width={300}
                  // layout="fill" // required
                  // objectFit="cover" // change to suit your needs
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
