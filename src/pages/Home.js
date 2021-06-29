function Home(props) {
    return (
    <div className="container">
      <section className="Header">
      <h1>Welcome to my portfilo</h1>
      </section>
      <section className="Main">
        <h3>Hello! My name is Guled Ahmed, I'm a Maryland based full-stack engineer.</h3>
        <p> I have a diverse set of skills, ranging from design, to HTML + CSS + Javascript.</p> 
        {/* Took the wording from https://www.freecodecamp.org/news/15-web-developer-portfolios-to-inspire-you-137fb1743cae/ */}
      </section>
    </div>
    );
  }
  
  export default Home;