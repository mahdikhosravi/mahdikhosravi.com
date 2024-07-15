import {
  ComputerDesktopIcon,
  PresentationChartLineIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import {
  SiAndroid,
  SiAndroidstudio,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGmail,
  SiGoodreads,
  SiInstagram,
  SiIntellijidea,
  SiJavascript,
  SiLinkedin,
  SiLinux,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPycharm,
  SiPython,
  SiReact,
  SiReacthookform,
  SiTailwindcss,
  SiX,
  SiTypescript,
  SiVisualstudiocode,
  SiMastodon,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import khosi from "../public/img/khosi.png";

type UniversalIconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

type TopSkillType = {
  icon: UniversalIconType;
  title: string;
};

type SocialNetworkType = {
  icon: UniversalIconType;
  url: string;
};

type SkillRow = {
  array: UniversalIconType[];
  classes: string;
};

type ExperienceType = {
  position: string;
  name: string;
  start: Date;
  end: Date | undefined;
};

type EducationType = {
  degree: string;
  school: string;
  start: Date;
  end: Date | undefined;
};

const socialNetworks: SocialNetworkType[] = [
  {
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/khosi/",
  },
  {
    icon: SiInstagram,
    url: "https://www.instagram.com/khosikhosikhosi/",
  },
  {
    icon: SiX,
    url: "https://twitter.com/khosikhosikhosi",
  },
  {
    icon: SiGithub,
    url: "https://github.com/mahdikhosravi",
  },
  {
    icon: SiGoodreads,
    url: "https://goodreads.com/khosi",
  },
  {
    icon: SiGmail,
    url: "mailto:mahdi0khosravi@gmail.com",
  },
  {
    icon: SiMastodon,
    url: "https://mastodon.social/@khosi",
  },
];

const topSkills: TopSkillType[] = [
  {
    icon: UsersIcon,
    title: "Management",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Software Engineering",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Business Strategy",
  },
];

const skills: SkillRow[] = [
  {
    array: [SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiPrisma],
    classes: "h-16",
  },
  {
    array: [
      SiPostgresql,
      SiVisualstudiocode,
      SiTailwindcss,
      SiGit,
      SiPython,
      SiDjango,
      SiPycharm,
    ],
    classes: "h-12",
  },
  {
    array: [
      SiCplusplus,
      SiLinux,
      SiDocker,
      SiIntellijidea,
      SiAndroidstudio,
      SiAndroid,
      SiGitlab,
      SiGithub,
      SiReacthookform,
    ],
    classes: "h-8",
  },
];

const experiences: ExperienceType[] = [
  {
    position: "VP of Technology",
    name: "DigiExpress",
    start: new Date(2023, 8),
    end: undefined,
  },
  {
    position: "Chief Technology Officer",
    name: "Snapp Store",
    start: new Date(2022, 3),
    end: new Date(2023, 8),
  },
  {
    position: "Chief Technology Officer",
    name: "Snapp Supply",
    start: new Date(2020, 7),
    end: new Date(2022, 3),
  },
  {
    position: "Co-Founder and CEO",
    name: "Azaraxsh",
    start: new Date(2019, 3),
    end: new Date(2020, 6),
  },
  {
    position: "Marketing and Strategy Consultant",
    name: "Darskakaoo",
    start: new Date(2019, 8),
    end: new Date(2020, 4),
  },
  {
    position: "Results-Oriented Project Manager",
    name: "Pegah co.",
    start: new Date(2017, 8),
    end: new Date(2019, 3),
  },
  {
    position: "Co-Founder",
    name: "Azarakhsh",
    start: new Date(2016, 5),
    end: new Date(2017, 8),
  },
  {
    position: "Software Designer and Developer",
    name: "Rahnema Co. (Beep)",
    start: new Date(2013, 10),
    end: new Date(2017, 8),
  },
  {
    position: "Research Assistant",
    name: "Institute for Research in Fundamental Sciences (IPM)",
    start: new Date(2016, 1),
    end: new Date(2017, 7),
  },
];

const educations: EducationType[] = [
  {
    degree: "Master of Business Administration - MBA",
    school: "Kharazmi University",
    start: new Date(2017, 8),
    end: new Date(2019, 5),
  },
  {
    degree:
      "Bachelor of Science (BS), Computer Hardware Engineering - Minor in Economics",
    school: "Sharif University of Technology",
    start: new Date(2012, 8),
    end: new Date(2017, 5),
  },
  {
    degree: "Diploma, Mathematics and Physics",
    school: "Allameh Helli School",
    start: new Date(2007, 8),
    end: new Date(2012, 5),
  },
];

const Home = () => (
  <main className="bg-zinc-800">
    <div className="h-44 md:h-96">
      <div className="flex flex-col justify-center w-fit m-auto md:m-0 text-5xl md:text-7xl tracking-wider font-extrabold text-white md:leading-loose h-full px-10">
        <div>Hi!</div>
        <div>
          I&apos;m{" "}
          <span className="underline-offset-8 decoration-yellow-400 underline">
            Khosi
          </span>
        </div>
      </div>
    </div>
    <div className="flex flex-row md:hidden justify-center md:-mt-20  text-yellow-400">
      {socialNetworks.map((sn) => (
        <Link
          rel="me"
          href={sn.url}
          key={sn.url}
          className="hover:text-yellow-600 m-4"
          target="_blank"
        >
          <sn.icon className="h-8 w-8" />
        </Link>
      ))}
    </div>
    <div className="h-fit bg-gray-200 text-zinc-900">
      <div className="relative w-full min-h-screen p-4 md:p-10 space-y-20">
        <div className="relative max-w-full md:absolute md:w-1/3 w-96 m-auto md:max-w-md h-80 md:h-1/3 md:max-h-80 bg-white md:-top-40 md:right-20 rounded-lg">
          <div className="hidden md:flex flex-row justify-between md:-mt-20  text-yellow-400">
            {socialNetworks.map((sn) => (
              <Link
                rel="me"
                href={sn.url}
                key={sn.url}
                className="hover:text-yellow-600"
                target="_blank"
              >
                <sn.icon className="h-10 w-10" />
              </Link>
            ))}
          </div>
          <Image
            className="object-contain shadow-inner"
            src={khosi}
            fill
            alt="khosi"
          />
        </div>

        <div className="w-full grid md:grid-cols-2">
          <div className="col-span-1 space-y-6">
            <div className="text-bold text-4xl underline decoration-yellow-400">
              about me
            </div>
            <p className="text-lg leading-8 max-w-3xl">
              My name is Mahdi Khosravi, but you can call me Khosi. I am a
              computer software engineer with over a decade of experience in the
              field. I have worked on a variety of projects, ranging from web
              applications to mobile apps, and have experience with a variety of
              programming languages and technologies.
            </p>
            <p className="text-lg leading-8 max-w-3xl">
              In my most recent two jobs, I served as Chief Technology Officer
              (CTO), where I was responsible for leading the technology strategy
              and overseeing the technical teams. I have a passion for creating
              innovative solutions that solve real-world problems, and I enjoy
              working collaboratively with others to achieve these goals.
            </p>
            <p className="text-lg leading-8 max-w-3xl">
              Throughout my career, I have been committed to staying up-to-date
              with the latest technologies and best practices in the field. I
              believe that continuous learning is essential to success in
              software engineering, and I am always seeking out new
              opportunities to expand my knowledge and skills.
            </p>
            <p className="text-lg leading-8 max-w-3xl">
              In my free time, I enjoy reading about new technologies and
              programming languages, as well as spending time with my family and
              friends. I am a dedicated and hardworking individual who is
              passionate about using technology to make a positive impact on the
              world.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-bold text-4xl underline decoration-yellow-400">
            my skills
          </div>

          <div className="w-full max-w-6xl m-auto grid grid-cols-3 text-center py-10">
            {topSkills.map((ts) => (
              <div key={ts.title} className="space-y-4">
                <div className="bg-zinc-900 rounded-full w-fit h-fit m-auto">
                  <ts.icon className="h-20 w-20 text-yellow-400 p-4" />
                </div>
                <div className="text-xl">{ts.title}</div>
              </div>
            ))}
          </div>

          <div className="w-full max-w-6xl m-auto space-y-10">
            {skills.map(({ array, classes }) => (
              <div
                key={array.length}
                className={`flex justify-evenly ${classes}`}
              >
                {array.map((Skill) => (
                  <Skill key={Skill.displayName} className="h-full w-fit" />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-y-10">
          <div className="space-y-10">
            <div className="text-bold text-4xl underline decoration-yellow-400">
              experiences
            </div>

            <ul className="list-disc space-y-4">
              {experiences.map((experience) => (
                <li key={`${experience.name} ${experience.position}`}>
                  <div>
                    <div className="font-bold text-lg">
                      {experience.position}
                    </div>
                    <div>{experience.name}</div>
                    <div>
                      <span>
                        {experience.start.toLocaleString("en-us", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span> - </span>
                      <span>
                        {experience.end?.toLocaleString("en-us", {
                          month: "short",
                          year: "numeric",
                        }) || "Present"}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div className="text-bold text-4xl underline decoration-yellow-400">
              educations
            </div>

            <ul className="list-disc space-y-4">
              {educations.map((education) => (
                <li key={`${education.school} ${education.degree}`}>
                  <div>
                    <div className="font-bold text-lg">{education.degree}</div>
                    <div>{education.school}</div>
                    <div>
                      <span>
                        {education.start.toLocaleString("en-us", {
                          year: "numeric",
                        })}
                      </span>
                      <span> - </span>
                      <span>
                        {education.end?.toLocaleString("en-us", {
                          year: "numeric",
                        }) || "Present"}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-20 bg-zinc-800" />
    </div>
  </main>
);
export default Home;
