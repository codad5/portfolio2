import './App.css';
import Card from './Card';
import logo from './logo.svg'

function App() {
  return (
    <div className="App scroll-smooth">
      <header className="App-header">
        <h1>Codad5</h1>
        <div className="time-show">
          <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
        </header>
      <main className="main scroll-smooth">
        Copy
        <Card class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

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
              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Resume</a>
              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white">Message</a>
            </div>
        </div>
        </Card  >
        
        
        <Card id="about_card">
          <div className="font-bold oldstyle-nums w-full p-6 text-xl pb-2 pt-8 ">
              About
          </div>
          <article class="w-full text-sm p-6 pt-0 leading-6">
            lorem is reallTailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:text-base to only apply the text-base utility on hover.
            lorem is reallTailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:text-base to only apply the text-base utility on hover.
            lorem is reallTailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:text-base to only apply the text-base utility on hover.
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
          <article class="w-full text-sm p-6 pt-0 leading-6 ">
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
            <ul class="list-disc p-6 pt-2">
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
            <li class="w-full ">
              <span class="font-bold text-xl pt-3">Federal Government College</span>

              </li>
              
            </ul>
            
            </article>
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
