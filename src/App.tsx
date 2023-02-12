import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DropSection from './components/DropSection'
import ProjectCard from './components/ProjectCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-full h-screen">
      <div className="accordion h-full w-full flex flex-col relative" id="Main">
        <DropSection title={"Home"} expanded={true} style={"h-[48vh]"}>
          <div className="w-full bg-hero-pattern bg-cover bg-center h-full relative">
            <div className='text-3xl  absolute text-white w-8 left-3 bottom-3 left-3 font-semibold' style={{color:"#fff"}}>
              Chibueze Michael Aniezeofor
              
            </div>  
          </div>
        </DropSection>
        <DropSection title={"About"}>
          <div className='w-full py-4 px-5'>
              <article className="w-full text-sm p-6 pt-0 leading-6 scroll-smooth">
                I am a mechanical engineering student who is passionate about software development.I have a strong passion for learning about new technologies, and I am always looking for new ways to improve my skills.
                During my years of experience, I have developed a <span className="font-black underline decoration-dotted">nucleus energy</span> towards <span className="font-black">backend technologies</span>, a strong understanding of the software development process, and have gained valuable experience in the field of software development.
                <p>Aside from my passion for software development, I aspire to create innovations that benefit the people of Earth or possibly aliens (if they exist). </p>
              </article>
              <h4 className='bold'>Here are list of my stacks below</h4>
              <ul>
                <h6>Languages.</h6>
                <li>PHP</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
              </ul>
               
            </div>
        </DropSection>
        <DropSection title={"Projects"}>
          <div className='w-full py-[60px] px-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center justify-center items-center place-items-center'>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
            </div>
        </DropSection>
        <DropSection title={"Work"}>
            <div className='w-full'>
              Hello
            </div>
        </DropSection>
        <DropSection title={"Contact"}>
            <div className='w-full'>
              Hello
            </div>
        </DropSection>
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
