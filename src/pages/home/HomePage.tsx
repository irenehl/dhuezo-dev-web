/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Layout } from '@components/layout';
import { TechnologiesGrid } from '@components/technologies';
import { Timeline } from '@components/timeline';
import { Card } from '@components/card';
import useWindowSize from '@hooks/useWindowsSize';

const HomePage: FC = () => {
  const experience = [
    {
      title: 'Backend Developer',
      startDate: 'April 2023',
      endDate: 'July 2023',
      company: 'RAVN',
      description:
        'Engineered RESTful and GraphQL APIs to enhance frontend-backend integration, elevating user experience. Streamlined codebase for superior maintainability and introduced rigorous unit testing with Jest to ensure software reliability and performance.',
    },
    {
      title: 'Software Developer',
      startDate: 'November 2022',
      endDate: 'March 2023',
      company: 'Southworks',
      description:
        'Spearheaded the development and ongoing enhancement of web applications using React.js, incorporating advanced JavaScript libraries for responsive UIs. Pioneered AWS Lambda-based architecture, optimizing backend services for scalability and efficiency, driving enhanced profitability and system resilience.',
    },
    {
      title: 'ReactJS Developer',
      startDate: 'April 2022',
      endDate: 'November 2022',
      company: 'Resultier',
      description:
        'Led the development of cutting-edge web applications with React and Next.js, focusing on dynamic UIs for diverse applications, from landing pages to comprehensive management systems. Enhanced sports team management through innovative communication, scheduling, and tracking functionalities.',
    },
    {
      title: 'Backend Developer',
      startDate: 'July 2021',
      endDate: 'March 2022',
      company: 'Cubo Pago',
      description:
        'Developed high-performance, secure RESTful APIs using NestJS, focusing on web application robustness and maintainability. Integrated advanced payment gateways for secure financial transactions and optimized database queries, significantly improving data handling and application performance.',
    },
    {
      title: 'Fullstack Developer',
      startDate: 'February 2021',
      endDate: 'July 2021',
      company: 'Elaniin',
      description:
        'Leveraged full-stack development skills across HTML, CSS, JavaScript, React, and Node.js to deliver comprehensive web solutions. Emphasized web excellence through security best practices, optimization techniques, and performance enhancements, achieving notable improvements in loading times and SEO metrics.',
    },
  ];

  const projects = [
    {
      description:
        'Developed a high-performance medical website using AstroJS, HTML, and VanillaJS, optimized for SEO and user experience. Designed to facilitate easy access to medical services and appointments, enhancing patient engagement and streamlining online interactions.',
      role: 'Web Developer',
      technologies: ['AstroJS', 'HTML', 'VanillaJS'],
    },
    {
      description:
        'Automated the production process for a plastic factory, overseeing the project from user story development to production deployment using Express and Prisma. This system revolutionized production control, from raw materials to finished goods, markedly boosting operational efficiency.',
      role: 'System Developer',
      technologies: ['ExpressJS', 'Prisma'],
    },
    {
      description:
        'Developed a citizen complaint management system with React, MaterialUI, and AntDesign, from concept to deployment. This platform enhances administrative capabilities, including form creation, response management, and offer projection, thereby increasing process transparency and efficiency.',
      role: 'Frontend Developer',
      technologies: ['React', 'MaterialUI', 'AntDesign'],
    },
    {
      description:
        'Engineered a bilingual e-commerce platform for a retail store, utilizing NextJS and Tailwind for the frontend and NestJS with TypeORM for the backend. Implemented in Azure DevOps, this solution delivered a comprehensive, multilingual user experience and streamlined site management.',
      role: 'Fullstack Developer',
      technologies: ['NextJS', 'NestJS', 'TypeORM', 'Azure DevOps'],
    },
  ];

  const education = [
    {
      title: 'Computer Science Engineering',
      company: 'Universidad Centroamericana "José Simeón Cañas"',
      startDate: '2018',
      endDate: 'present',
    },
    {
      title: 'Introduction to Python',
      company: 'Secretaria de Innovación',
      startDate: '2021',
    },
    {
      title: 'FullStack Development with JavaScript',
      company: 'Secretaria de Innovación',
      startDate: '2020',
    },
  ];

  const {
    size: [width],
    breakpoint,
  } = useWindowSize();

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Daniela Huezo
        </h1>
        <h2 className="sr-only">Software Engineer</h2>
        <TypeAnimation
          key={`animation-${breakpoint}`}
          sequence={[
            'Software Engineer',
            2500,
            'Frontend Developer',
            2000,
            'Backend Developer',
            2000,
          ]}
          cursor
          wrapper="span"
          speed={30}
          style={{
            background:
              'radial-gradient(circle at 0% 0%, #701cf5, #c241bc, #eb404f)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: width < 768 ? '2.3rem' : '6rem',
            fontWeight: 'bold',
          }}
          repeat={Infinity}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="py-5 font-medium md:text-xl">
          As an expert developer, I excel at creating innovative software
          applications and solutions. My experience covers various programming
          languages and technologies, with a strong track record in delivering
          high quality projects. I am committed to innovation and excellence.
        </p>
        <a
          target="_blank"
          href="https://calendly.com/26irenelopez/30min"
          className="w-1/2 rounded-full border border-secondary-accent bg-secondary-accent/90 p-4 text-center font-bold text-white hover:border-secondary hover:bg-secondary/90 md:w-1/4 md:text-xl"
          rel="noreferrer noopener"
        >
          Let&apos;s book a call
        </a>
        <h2 className="py-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
          Technologies
        </h2>
        <TechnologiesGrid />
        <h2 className="py-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
          Experience
        </h2>
        {experience.map((exp, index) => (
          <Timeline
            key={`${exp.title}-${index}`}
            title={exp.title}
            startDate={exp.startDate}
            endDate={exp.endDate}
            company={exp.company}
            description={exp.description}
          />
        ))}
        <h2 className="py-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
          Freelance
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-5">
          {projects.map((it) => (
            <Card
              key={it.role}
              role={it.role}
              description={it.description}
              technologies={it.technologies}
            />
          ))}
        </div>

        <h2 className="py-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
          Education
        </h2>
        {education.map((ed) => (
          <Timeline
            key={ed.title}
            title={ed.title}
            startDate={ed.startDate}
            endDate={ed.endDate}
            company={ed.company}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
