import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Card from './Card';
import GithubCard from './githubCard'


function App() {
  const [date, setDate] = useState(new Date())
  const [cardPosition, setCardPosition] = useState(0)
  const cardID = ["wel_card", "about_card", "skill_card", "edu_card", "exp_card", "prg_card"];
  const [pinnedRepo , setPinnedRepo] = useState(false)
  const refreshClock = () => {
    setDate(new Date());
  }
  
  const updatecurrenctCard = (right = true) => {
    if(right){
      if(cardPosition >= cardID.length - 1) return
      setCardPosition(old => old+1);
      return
    } 
    if(cardPosition <= 0) return
    setCardPosition(old => old-1);

  }
  const timerId = setInterval(refreshClock, 1000);
  useEffect(() => {
    axios.get('https://gh-pinned-repos.egoist.dev/?username=codad5')
    .then(res => {
       console.log(res.data)
      setPinnedRepo(res.data)
      })
    .catch(err => { console.log(err)})
    
  } , [])
  
  return (
    <div className="App scroll-smooth relative">
      <header className="App-header">
        <h1>Codad5</h1>
        <div className="time-show">
          
          <h2 class="text-sm">{date.toLocaleTimeString()}</h2>
        </div>
        </header>
      <a onClick={(e) =>{updatecurrenctCard(false)}} href={`#${cardID.at(cardPosition)}`} class="fixed top-[50%] left-8   p-4 rounded-full border-4 border-indigo-500/50" > L </a>
      <a onClick={(e) =>{updatecurrenctCard()}} href={`#${cardID.at(cardPosition)}`} class="fixed top-[50%] right-8   p-4 rounded-full border-4 border-indigo-500/50" > R </a>
      <main className="main scroll-smooth">
        <Card id="wel_card"class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

          <div class="vw-full md:w-auto h-1/3 flex justify-center items-center">
            <pre class="leading-loose py-12 text-center">
              <code class="block language-php">
              console.log('Hello World');
            </code>
              <code class="block language-php">
              echo "I am Codad5";
            </code>
            </pre>
            
          </div>
          <div class="vw-full md:w-auto h-1/3 flex justify-center items-center">
            <a href="#about_card"class="border border-slate-300 hover:border-indigo-300 p-6">
              $page->next();
            </a>
            
          </div>
          
          <div class="flex flex-col items-center pb-10 h-1/3 flex justify-center px-4 pt-4">
            <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/66634814?v=4" alt="Bonnie image" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Aniezeofor Chibueze</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Software Developer</span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a href="https://drive.google.com/file/d/12kectPqTy3WLon5FwOJE2IiNPcHURe1N/view" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Resume</a>
              <a href="mailto:aniezeoformic@gmail.com" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white">Message</a>
            </div>
        </div>
        </Card  >
        
        
        <Card id="about_card">
          <div className="font-bold oldstyle-nums w-full p-6 text-xl pb-2 pt-8 ">
              About
          </div>
          <article class="w-full text-sm p-6 pt-0 leading-6">
            I am a mechanical engineer who is passionate about software development. I have a strong passion for learning new technologies and I am always looking for new ways to improve my skills.
            during my years of experience, I have developed a  <span class="font-black underline decoration-dotted">nucleus energy</span> towards <span class="font-black">backend Technologies</span> and a strong understanding of the software development process and have gained valuable experience in the field of software development.
            </article>
          <div className="font-light oldstyle-nums w-full p-6 text-xl pb-2 pt-8 text-center">
            <a href="#skill_card" class="border border-slate-300 hover:border-indigo-300 p-4 ">
              $page->next();
            </a>
          </div>
        </Card>
        <Card id="skill_card">
          <div className="font-bold oldstyle-nums w-full p-6 text-xl pb-2 pt-8 ">
              Skills
          </div>
          <article class="w-full text-sm p-6 pt-0 leading-6 h-4/6 overflow-hidden overflow-y-scroll ">
            lorem is reallTailwind lets you conditionally apply utility classes in different states using variant modifiers. For example,
            <div class="w-full font-bold text-lg pt-3">Backend</div>
            <ul class="list-disc p-6 pt-2 pb-2">
              <li>PHP</li>
              <li>JAVASCRIPT</li>
              <li>NODE.JS</li>
              <li>Express.js</li>
              <li>Laravel</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Unit Testing</li>
            </ul>
            <div class="w-full font-bold text-lg pt-3">Frontend & Others</div>
            <ul class="list-disc p-6 pt-2 " style={{maxHeight:'20%'}}>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap & Tailwind Css</li>
              <li>Redis</li>
              <li>Git & Github, OOPs ...more</li>
            </ul>
            </article>
          <div className="font-light oldstyle-nums w-full p-6 text-xl pb-2 pt-8 text-center">
            <a href="#edu_card" class="border border-slate-300 hover:border-indigo-300 p-4 ">
              $page->next();
            </a>
          </div>
        </Card>
        <Card id="edu_card">
          <div className="font-bold oldstyle-nums w-full p-6 text-xl pb-2 pt-8 ">
              Education
          </div>
          <article class="w-full text-sm p-6 pt-0 leading-6 ">
            lorem is reallTailwind lets you conditionally apply utility classes in different states using variant modifiers. For example,
            <ul class="list-none p-6 pl-0  pb-2">
            <li class="w-full pt-2">
              <div class="font-bold text-xl pt-3">Federal Government College</div>
              <div class="text-sm">2014 - 2020 (secondary school)</div>

              </li>
            <li class="w-full pt-2 leading-10">
              <div class="font-bold text-xl pt-3">University of Nigeria</div>
              <div class="text-sm">2014 - 2020 (B.Eng)</div>
              <div class="text-sm">Mechanical Engineering</div>

              </li>
              
            </ul>
            
            </article>
          <div className="font-light oldstyle-nums w-full p-6 text-xl pb-2 pt-8 text-center">
            <a href="#exp_card" class="border border-slate-300 hover:border-indigo-300 p-4 ">
              $page->next();
            </a>
          </div>
        </Card>
        <Card id="exp_card">
          <div className="font-bold oldstyle-nums w-full p-6 text-xl pb-2 pt-8 ">
              Experience
          </div>
          <article class="w-full text-sm p-6 pt-0 leading-6 ">
            lorem is reallTailwind lets you conditionally apply utility classes in different states using variant modifiers. For example,
            <ul class="list-none p-6 pl-0  pb-2">
            <li class="w-full pt-2">
              <div class="font-bold text-xl pt-3 pb-1"><a class="underline" href="https://listmining.com/">Listmining.com</a></div>
              <div class="text-sm">2021 ( Freelance ) </div>
              <div class="text-sm">Stack: PHP | WORDPRESS</div>

              </li>
            <li class="w-full pt-2">
              <div class="font-bold text-xl pt-3 pb-1"><a class="underline" href="https://Sanctablog.com/">Sanctablog.com</a></div>
              <div class="text-sm">2021-2022 ( Freelance ) </div>
              <div class="text-sm">Stack: PHP | WORDPRESS</div>

              </li>
            <li class="w-full pt-2">
              <div class="font-bold text-xl pt-3 pb-1"><a class="underline" href="https://sidehustle.ng/">Side hustle</a></div>
              <div class="text-sm">Aug 2022- Sept 2022 ( Intership ) </div>
              <div class="text-sm">Stack: Node.js - BACKEND </div>

              </li>
            
              
            </ul>
            
            </article>
          <div className="font-light oldstyle-nums w-full p-6 text-xl pb-2 pt-8 text-center">
            <a href="#about_card" class="border border-slate-300 hover:border-indigo-300 p-4 ">
              $page->next();
            </a>
          </div>
        </Card>
        <Card id="prg_card">
          <div className="font-bold oldstyle-nums w-full p-6 text-xl pb-2 pt-8 ">
              Projects
          </div>
          <article class="snap-mandatory  snap-x w-full flex flex-nowrap  text-sm p-6 pl-3 pt-0 leading-6 overflow-scroll space-x-2">
            {pinnedRepo ? pinnedRepo.map((repo, index) => <GithubCard repo={repo} key={index} /> ) : 'lo'}
            
            {/* <GithubCard/> 
            <GithubCard/>
            <GithubCard/> */}
            

            
            </article>
          <div className="font-light oldstyle-nums w-full p-6 text-base pb-6 pt-8 text-center">
            <a href="https://github.com/codad5?tab=repositories" class="border border-slate-300 hover:border-indigo-300 p-4 ">
              $page->redirect('view more')
            </a>
          </div>
          <div className="font-light oldstyle-nums w-full p-6 text-xl pb-2 pt-8 text-center">
            <a href="#about_card" class="border border-slate-300 hover:border-indigo-300 p-4 ">
              $page->next();
            </a>
          </div>
        </Card>

      </main>
    </div>
  );
}

export default App;
