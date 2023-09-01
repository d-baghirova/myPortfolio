import './Projects.css';

export default function Projects() {
    const revealA = () => {
        const reveals = document.querySelectorAll(".a");
      
        for (var i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      const revealAp = () => {
        const reveals = document.querySelectorAll(".ap");
      
        for (var i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      const reveal = () => {
        revealA();
        revealAp();
      }
      
      window.addEventListener("scroll", reveal);
    return (
        <div id="projects">
        <div class="a fade-left">
            <h2>Projects:</h2>
            <h3>Playlists creater</h3>
            <article>
                <p>It is playlists creater. A website that is connected to Spotify. Here you can search for songs, create playlist and then save it to your Spotify account!
                    <a  class="demo" href="https://daaancing.surge.sh/ "> demo version</a><br />
                <em>JavaScript</em> <em>CSS</em> <em>React</em> <em>Spotify API</em></p>
                <img class="dev" src="assets/j.png" />
            </article>
        </div>
        <div class="ap fade-right">
            <h3>Online Shop</h3>
            <article>
                <p>An online shop of pillows. <a  class="demo" href="https://pillow-fight.surge.sh/">demo version</a><br />
                <em>React</em> <em>React Router DOM</em> <em>JavaScript</em> <em>CSS</em></p>
                <img class="dev" src="assets/s.png" />
            </article>
        </div>
        <div class="a fade-left">
            <h3>Online Minigames</h3>
            <article>
                <p>A small website with some minigames, such as flash-cards game and arcades. <a  class="demo" href="https://round-pine-1352.on.fleek.co/"> demo version</a><br />
                <em>JavaScript</em> <em>CSS</em> <em>Canvas</em></p>
                <img class="dev" src="assets/m.png" />
            </article>
        </div>
        <div class="ap fade-right">
            <h3>Interactive-Calendar</h3>
            <article>
                <p>Online-Calendar, which you can use to plan events. <a  class="demo" href="http://interactive-calendar.surge.sh/"> demo version</a><br />
                <em>JavaScript</em> <em>CSS</em> <em>React</em></p>
                <img class="dev" src="assets/ca.png" />
            </article>
        </div>
        <div class="a fade-left">
            <h3>My Chat</h3>
            <article>
            <p>A website wih authorization and ability to send messages to other users. A Full-Stack project. Unfortunated I haven't deployed it yet, because I couldn't find free hosting for dynamic websites, so this link goes to the repository of this project.
                <a class="demo" href="https://github.com/d-baghirova/chat"> repository </a><br />    <em>JavaScript</em> <em>CSS</em> <em>Node.js</em> <em>Express.js</em> <em>json files</em> <em>EJS</em>
            </p>
            <img class="dev" src="assets/c.png" />
            </article>
        </div>
        <div class="ap fade-right">
            <h3>Poets</h3>
            <article>
            <p>A website for poets entusiasts, wherre they can share poems and find rhyming words using rhymes finder tool. A Full-Stack project. Unfortunated I haven't deployed it yet, because I couldn't find free hosting for dynamic websites, so this link goes to the repository of this project.
            <a class="demo" href="https://github.com/d-baghirova/poems"> repository</a><br /><em>JavaScript</em> <em>CSS</em> <em>HTML</em> <em>Node.js</em> <em>Express.js</em> <em>Mongo.db</em></p>
            <img class="dev" src="assets/p.png" />
            </article>
        </div>
    </div>
    )
}