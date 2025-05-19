function ExpericenceCard() {
  return (
    <div className="divide-y-2 divide-gray-500/20 text-base leading-8 text-zinc-400 sm:text-lg">
      <div className="pb-6">
        <div>
          <h2 className="mt-6 h-2">
            Cognizant | Warsaw, Poland Software Engineer
          </h2>
        </div>
        <div>
          <h2 className="mt-6 h-2">12/2023 - 07/2024</h2>
        </div>
      </div>

      <p className="mt-6 py-6">
        Contributed to the development and maintenance of scalable, high-quality
        web applications within a globally distributed Agile/Scrum team.
        <ul className="ml-4 list-disc">
          <li className="py-2">
            Developed and maintained robust backend services and RESTful APIs
            using Java (Java 21) and Spring Framework.{' '}
          </li>
          <li className="py-2">
            Built and enhanced responsive frontend applications using Angular,
            ensuring seamless user experiences.
          </li>
          <li className="py-2">
            Actively participated in peer code reviews, promoting clean,
            maintainable, and well-tested code in alignment with best practices.
          </li>
          <li className="py-2">
            Worked across a modern technology stack: Java 21, Spring Framework,
            Angular, JavaScript, TypeScript, Hibernate, SQL (MySQL) databases,
            Docker, CI/CD pipelines, and test automation frameworks.{' '}
          </li>
          <li className="py-2">
            Embraced Agile principles, continuously improving processes and
            ensuring sprint goals were met with high quality and efficiency.
          </li>
        </ul>
      </p>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Experience
      </h1>
      <ExpericenceCard />
    </>
  )
}
