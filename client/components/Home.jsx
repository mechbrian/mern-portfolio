import "./Home.css";

export default function Home() {
  const homeContent = {
    welcomeMessage: {
      title: "Hi, I’m Po-Kai (Brian) Chao!",
      description:
        "Welcome to my personal portfolio, where I showcase my journey as a Software Developer!",
    },
    missionStatement: {
      description:
        "My mission is to create innovative and user-friendly solutions through my passion for [software development/design/etc.]. I aim to continuously learn and grow while contributing to meaningful projects.",
    },
  };

  const buttonLinks = [
    { path: "/about", label: "About Me" },
    { path: "/projects", label: "Projects" },    
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact Me" },
  ];

  return (
    <div className="home-container">
      <div className="home-buttons">
        {buttonLinks.map((button, index) => (
          <a key={index} href={button.path}>
            <button>{button.label}</button>
          </a>
        ))}
      </div>      
      <div className="home-content">
        <h1>{homeContent.welcomeMessage.title}</h1>
        <p>{homeContent.welcomeMessage.description}</p>
        <p>{homeContent.missionStatement.description}</p>
      </div>      
    </div>
  );
}
