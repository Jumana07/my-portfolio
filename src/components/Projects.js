function Projects() {
  const dummyProjects = [
    { name: 'Quiz', tech: 'Html, CSS',image: process.env.PUBLIC_URL + '/assets/imgquiz.png'
      , link: 'https://github.com/Jumana07/Quiz-App',live:'https://jumana07.github.io/Quiz-App/',description:'takes CSV specified format as input and produce a quiz ' },
    { name: 'Online Bookstore', tech: 'HTML, JS',image:process.env.PUBLIC_URL + '/assets/imgbook.png', link: 'https://github.com/Jumana07/BOOKSTORE',description:'Category wise display and realtime purchase model' },
    { name: 'Price-Enquiry-Chatbot', tech: 'HTML, JS', image:process.env.PUBLIC_URL +'/assets/imgchatbot.png',link:'https://github.com/Jumana07/PriceEnquiry-Chatbot',live: 'https://jumana07.github.io/PriceEnquiry-Chatbot/',description:'Cake menu display and query answer chat which gives price for each item  ' },
    { name: 'Hair-Spa Promo', tech: 'HTML, JS',image:process.env.PUBLIC_URL + '/assets/imghairday.png', link:'https://github.com/Jumana07/Hair-DayPromo',live: 'https://jumana07.github.io/Hair-DayPromo/',description:'meta project exercise' }
  ];
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {dummyProjects.map((project, idx) => (
          <div key={idx} style={{
            border: '2px solid #EC7063',
            borderRadius: '8px',
            padding: '15px',
            width: '100%',
            maxWidth: '300px',
            backgroundColor: '#fff'
          }}>
            <h3>{project.name}</h3>
            <p>{project.tech}</p>
            <img src={project.image} alt="project screenshot" style={{ width: '100%', borderRadius: '8px' }} />

            <a href={project.link}>Code</a><br/>|<br/>
            <a href={project.live}>Live</a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
