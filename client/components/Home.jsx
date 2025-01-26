import './Home.css';

export default function Home() {
   
   const homeContent = {
    welcomeMessage: {
      title: "Hi, I’m Po-Kai (Brian) Chao!",
      description:
        "Welcome to my personal portfolio, where I showcase my journey as a [Software Developer/Engineer]. Explore my projects, learn about my skills, and let’s connect!"
    },
    missionStatement: {      
      description:
        "My mission is to create innovative and user-friendly solutions through my passion for [software development/design/etc.]. I aim to continuously learn and grow while contributing to meaningful projects."
    }
  };

  return (
    <div>
      <h1>{homeContent.welcomeMessage.title}</h1>
      <p>{homeContent.welcomeMessage.description}</p>
      <p>{homeContent.missionStatement.description}</p>
    </div>
  );
}