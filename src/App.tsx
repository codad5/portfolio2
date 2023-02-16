import { ReactHTMLElement, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import GithubLogo from './assets/Github.svg'
import LinkedinLogo from './assets/Linkedin.svg'
import TwitterLogo from './assets/Twitter.svg'
import './App.css'
import DropSection from './components/DropSection'
import ProjectCard from './components/ProjectCard'
import { contactsType, projectsDetails } from './components/types'
import { projects } from './components/projects'
import Keybinder from 'domkeybinder'
const keyController = new Keybinder({
    default_listener : 'keyup',
    element : window,
    allow_default : false
})



function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // short cut to open intro drop section
    keyController.ListenToKey('H', 'I', () => {
      (document.querySelector('#btn_Intro') as HTMLButtonElement).click();
    })
    
    // for About section
    keyController.ListenToKey('A', () => {
      (document.querySelector('#btn_About') as HTMLButtonElement).click();
    })

    // for Projects section
    keyController.ListenToKey('P', () => {
      (document.querySelector('#btn_Projects') as HTMLButtonElement).click();
    })

    // for Blog section
    keyController.ListenToKey('B', () => {
      (document.querySelector('#btn_Blog') as HTMLButtonElement).click();
    })
    
    // for Contact section
    keyController.ListenToKey('C','/', () => {
      (document.querySelector('#btn_Contact') as HTMLButtonElement).click();
    })
  }, [])
  const contactsText: contactsType[] = [
    {
      label : "Email",
      value : "Aniezeoformic@gmail.com",
      link : "mailto:aniezeoformic@gmail.com"
    }, 
    {
      label: "Phone",
      value: "+234(0)8142572488",
      link: "tel:+2348142572488"
    }
  ]
  
  const contactLogo : contactsType[] =  [
    {
      label:"Github",
      value: GithubLogo,
      link : "https://github.com/codad5"
    },
    {
      label: "Twitter",
      value: TwitterLogo,
      link: "https://twitter.com/codad5_"
    },
    {
      label: "Linkedin",
      value: LinkedinLogo,
      link: "https://www.linkedin.com/in/chibueze-aniezeofor/"
    }
  ]

  
 
  return (
    <div className="App w-full h-screen">
      <div className="accordion h-full w-full flex flex-col relative" id="Main">
        <DropSection title={"Intro"} expanded={true} style={"h-[48vh]"} shortcutSwitches={['H', 'I']}>
          <div className="w-full bg-hero-pattern bg-cover bg-center h-full relative">
            <div className='text-3xl  absolute text-white w-8 left-3 bottom-3 left-3 font-semibold' style={{color:"#fff"}}>
              <h1>Chibueze Michael Aniezeofor</h1>
              
            </div>  
          </div>
        </DropSection>
        <DropSection title={"About"} shortcutSwitches={['A']}>
          <div className='w-full py-4 px-5'>
            <article className="w-full text-sm p-6 pt-0 leading-6 scroll-smooth">
              <p>
                Hola!, I am <span className="font-black underline decoration-dotted">Chibueze Michael Aniezeofor</span> ,a mechanical engineering student at the <span className="font-bold underline decoration-dotted">University of Nigeria</span> who is passionate about software development.I have a strong passion for learning about new technologies, and I am always looking for new ways to improve my skills.
                During my years of experience, I have developed a <span className="font-bold underline decoration-dotted">nucleus energy</span> towards <span className="font-bold">backend technologies</span>, a strong understanding of the software development process, and have gained valuable experience in the field of software development.
                <p>Aside from my passion for software development, I aspire to create innovations that benefit the people of Earth or possibly aliens (if they exist). </p>
                
              </p>
              <br/>
              <p>
              Due to the force of attraction between the  <span className="font-bold underline decoration-dotted">nucleus (ME)</span> and my <span className="font-bold">my first level  eletrons  (backend  development)</span>,  I consider myself a <span className="font-bold underline decoration-dotted">backend  developer</span> although i also learn technologies outside my field.
              Below are the technologies I have worked with.
              </p>
              <div className="w-full font-bold text-lg pt-3">Backend</div>
              <ul className="list-disc p-6 pt-2 pb-2">
                <li>PHP</li>
                <li>JAVASCRIPT</li>
                <li>TYPESCRIPT</li>
                <li>NODE.JS</li>
                <li>Express.js</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Unit Testing</li>
              </ul>
              <div className="w-full font-bold text-lg pt-3">Frontend & Others</div>
              <ul className="list-disc p-6 pt-2 " style={{ maxHeight: '20%' }}>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap & Tailwind Css</li>
                <li>Redis</li>
                <li id='endingof'>Git & Github, OOPs ...more</li>
              </ul>
            </article>
               
            </div>
        </DropSection>
        <DropSection title={"Projects"} shortcutSwitches={['P']}>
          <div className='w-full py-[60px] px-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center justify-center items-center place-items-center'>
              {
                projects.length > 0 ? projects.map((value, index) => (
                  <ProjectCard name={value.name} tags={value.tags} main_lang={value.main_lang} links={value.links} type={value.type} key={index} image={value.image}>
                    {value.children}
                  </ProjectCard>
                )) : <h2> No project</h2>
              }
            </div>
        </DropSection>
        <DropSection title={"Work"}>
            <div className='w-full'>
              Hello
            </div>
        </DropSection>
        <DropSection title={"Blog"}>
          <div className='w-full grid place-items-center h-[50vh]'>
              <b className='text-3xl'>
                Coming Soon
              </b>
            </div>
        </DropSection>
        <DropSection title={"Contact"} style={"min-h-[40vh]"}>
            <div className='w-full'>
              {
                contactsText.map((element, index) => (
                  <div className='p-5' key={index}>
                    <div className='w-full text-center space-y-2'>
                      <label htmlFor={`#${element.label}`} className='font-bold w-4/5 inline-block text-left underline text-2xl'>{element.label}:</label>
                      <a href={element.link} id={element.label} className='font-semibold w-4/5 inline-block text-left underline decoration-dotted'>{element.value}</a>
                    </div>
                  </div>
                ))
              }
              <div className='w-full p-5 text-center space-x-10'>
                {
                  contactLogo.map((values, index) => (
                      <div className='w-auto h-auto  inline-block text-center' title={values.label} key={index}>
                          <a href={values.link}><img srcSet={values.value} /></a>
                      </div>
                    ))
                }
              </div>
              
            </div>
        </DropSection>
        <footer className='w-full h-15 bg-slate-600 text-center text-white p-4'>
          Designed by <a href='https://github.com/codad5' className='underline decoration-dotted font-bold'>Codad5</a>
        </footer>
      </div>




      {/* <div class="accordion" id="accordionExample">
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingOne">
            <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
              aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              <strong>This is the first item's accordion body.</strong> It is shown by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingTwo">
            <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
              aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              <strong>This is the second item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingThree">
            <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
              aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              <strong>This is the third item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default App
