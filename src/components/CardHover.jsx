import React from "react";
// import '../../styles/Home.module.css';

function Card({ title, imageSrc, description }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`face face1 ${isHovered ? "hovered" : ""}`}>
        <div className="content">
          <img src={imageSrc} alt={title} />
          <h3>{title}</h3>
        </div>
      </div>
      <div className={`face face2 ${isHovered ? "hovered" : ""}`}>
        <div className="content">
          <p>{description}</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container flex justify-center w-[100%]">
      <Card
        title="About Hire"
        imageSrc="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <Card
        title="Docs"
        imageSrc="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <Card
        title="About Freelancing"
        imageSrc="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
    </div>
  );
}

export default App;
