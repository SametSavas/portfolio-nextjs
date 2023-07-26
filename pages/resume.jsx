import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Samet | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Samet Savaş</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/samet-sava%C5%9F-83a7b1222/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>NextJS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>PostreSql
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">ODAKGIS</span>
            <span className="px-2">|</span>Ankara, TÜRKİYE
          </p>
          <p className="py-1 italic">Internship (10.2022 - 01.2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              I gained valuable experiences during the adaptation process with
              the work environment and colleagues.
            </li>
            <li>
              I strengthened my software skills by developing simple projects
              using the C# language.
            </li>
            <li>
              I focused on learning the industrys architecture and workflow.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">ikas</span>
            <span className="px-2">|</span>Ankara, TÜRKİYE
          </p>
          <p className="py-1 italic">Frontend Developer Internship</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              During the internship, I had the opportunity to attend daily
              meetings with the software team and follow the workflow and
              projects.
            </li>
            <li>
              I regularly presented reports to the senior developer who mentored
              me and received feedback.
            </li>
            <li>
              I developed an e-commerce themed project using technologies such
              as Javascript, React, HTML, and CSS.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold"> Ostim Technical University</span>
            <span className="px-2">|</span> Ankara,TÜRKİYE
          </p>
          <p className="py-1 italic">Computer Programmer (2020 – 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a strong understanding of programming fundamentals and
              various programming languages.
            </li>
            <li>
              Acquired hands-on experience in software development through
              individual and group projects.
            </li>
            <li>
              Expanded my knowledge in data structures, algorithms, and database
              management.
            </li>
            <li>
              Successfully completed courses in web development, object-oriented
              programming
            </li>
            <li>
              Engaged in continuous learning and kept up-to-date with the
              latest industry trends and technologies.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
