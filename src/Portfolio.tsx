export const Portfolio = () => {
  return (
    <>
      <header className="grid grid-cols-2">
        <div className="info">
          <h1>Fullstack developer</h1>
          <p>I'm a passionate developer with experience in building web applications.</p>

          <div>
            <button>View My Work</button>
            <button>Contact Me</button>
          </div>
        </div>
        <div className="photo">
          <img
            src="/profilepic.webp"
            alt="Developer Photo"
            className="h-52 w-52 rounded-full object-cover"
          />
        </div>
      </header>
    </>
  );
};
