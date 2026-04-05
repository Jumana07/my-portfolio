function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git','MySQL','Figma','Responsive Design'];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '10px',
        textAlign: 'center'
      }}>
        {skills.map((skill, idx) => (
          <div key={idx} style={{
            backgroundColor: '#e3e3e3',
            padding: '10px',
            borderRadius: '5px'
          }}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
