import { Children } from "react";
import { projectsDetails } from "./types";
import Currencynet from '../assets/currencynet.png'
import Sanctablog from '../assets/sanctablog.jpeg' 
import WemallF from '../assets/wemall-f.jpeg'

export const projects: projectsDetails[] = [
    {
        name: "Keybinder",
        type: 'dev',
        tags: ['typescript', 'chrome'],
        main_lang: 'typescript',
        image: 'https://img.youtube.com/vi/lfLIXIBuCJs/hqdefault.jpg',
        links: {
          github : "https://github.com/codad5/keybinder",
          website: 'https://www.npmjs.com/package/domkeybinder'
        },
        children: (
            <div>
              This is a Frontend tool(Library: any) used to manipulate keyboard action in the browser.
            </ div >
      )
    },
    {
      name: "Wemall",
      type: 'backend',
      main_lang : 'php',
      tags: ['php', 'backend'],
      links: {
        github: "https://github.com/codad5/wemall-v2",
      },
      children: (
        <div>
          This is an E-commerce CMS that helps Frontend/mobile developer build a fullstack E-commerce application by just communicating with the API
        </div>
      )
    },
    {
      name: "CurrrencyNet",
      type:'dev',
      tags:['currency', 'javascript', 'library', 'api'],
      image: Currencynet,
      main_lang:'javascript',
      links:{
        github:"https://github.com/codad5/currencynet",
        website:'https://codad5.github.io/currencynet'
      },
      children:(
        <div>
          This is a Frontend tools (library) that helps convert currencynet based off user location ,
          <br/>
          <br/>
          <h5 className="font-bold">let use this test cases : </h5>
          <ul className="list-disc">
            <li>A developer from indian develops a website with <b>Indian Rupes (INR) </b> </li>
            <li>But a citizen of Uniteds States finds it difficult to understand the currency</li>
            <li>Yes he could simply go to <a className="underline italic font-semibold">google.com</a> to convert these currency but thats a bad user experience</li>
            <li>Then the developer can decides to implement <b>Currencynet</b>, This would help to convert the currency (to USD for US citizens) in real time with out the developer or users to convert it them selves</li>
            <li>Best part is that it works for more than <b>100+ countries</b> in the world.</li>
          </ul>
        </div>
      )
    },
    {
      name:"sanctablog.com",
      main_lang:'wordpress',
      image:Sanctablog,
      type:'fullstack',
      tags:['paid', 'blog', 'wordpress'],
      links:{
        website:'https://sanctablog.com'
      },
      children:(
        <div>
          This is a school blog for a client 
        </div>
      )
    },
  {
    name: "CurrrencyNet (for React.js)",
    type: 'dev',
    main_lang:'typescript',
    image:Currencynet,
    tags: ['javascript', 'library', 'typescript'],
    links: {
      github: "https://github.com/codad5/currencynet-react",
      website: 'https://www.npmjs.com/package/currencynet'
    },
    children: (
      <div>
        The React.js based version of Currencynet written in <b>Typescript</b>
      </div>  
    )
  },
  {
    name : "Laravel Banking API........",
    type : 'backend',
    main_lang:'PHP (laravel)',
    tags:['laravel', 'php', 'api'],
    links:{
      github:'https://github.com/codad5/PHP-LARAVEL-BANKING-API'
    },
    children:(
      <div>
        This is a demo banking API built with laravel framework 
      </div>
    ),
    },
  {
    name: "PHP INex",
    type: 'dev',
    main_lang: 'PHP',
    tags: ['php', ''],
    links:{
      github:"https://github.com/codad5/php-inex",
      website:'https://packagist.org/packages/codad5/php-inex'
    },
    children: (
      <div>
        This is a PHP library that helps to simulate <b> Node.js</b> import and export feature , fixing some of the flaws of <b>PHP</b> <i className="font-light">require/include</i>
      </div>
    ),
  },
  {
    name:'xupg',
    main_lang:'typescript',
    type:'command-line',
    tags:['typescript', 'php', 'xampp'],
    links:{
      github:"https://github.com/codad5/xupg"
    },
    children:(
      <div>
        This is a command line tool that helps to upgrade your <b>XAMPP PHP</b> version
      </div>
    )
  },
  {
    name:'php file uploader (library)',
    main_lang:'php',
    type:'dev',
    tags:['php', 'file uploader'],
    links:{
      github:'https://github.com/codad5/php-file-uploader',
      website: 'https://packagist.org/packages/codad5/file-helper'
    },
    children:(
      <div>
        A PHP based librarythat aid easy file uplaoding and verification in PHP
      </div>
    )
  },
  {
    name:'U-secret (Node.js)',
    main_lang:'javascript (Express.js)',
    type:'fullstack',
    tags:['messaging service'],
    links:{
      github:'https://github.com/codad5/usecret-node-version',
      website:'https://helpful-cuff-links-deer.cyclic.app/home'
    },
    children: (
      <div>
        This is an anonymous messaging service written in javascript, that helps to recieve anonymous message from friends and family
      </div>
    )
  }, 
  {
    name:"U-secret (PHP)",
    main_lang:"PHP",
    type:"fullstack",
    tags:['messaging service'],
    links: {
      github:'https://github.com/codad5/U-secret'
    }, 
    children: (
      <div>
        This is an anonymous messaging service written in PHP, that helps to recieve anonymous message from friends and family
      </div>
    )
  },
  {
    name: "listmining.com",
    main_lang: 'wordpress',
    type: 'fullstack',
    tags: ['paid', 'blog', 'wordpress'],
    links: {
      website: 'https://sanctablog.com'
    },
    children: (
      <div>
        This is a crypto blog for a client
      </div>
    )
  },
  {
    name:"Test Wemall shop (frontend)",
    main_lang: "Javascript (React.js)",
    type:'frontend',
    image : WemallF,
    tags:['api'],
    links:{
      website:'https://wemall.vercel.app',
      github:'https://github.com/codad5/wemall-frontend'
    }, 
    children: (
      <div>
        A web app to test wemall API 
      </div>
    )
  },
  {
    name:'Hotel Ms',
    main_lang: "PHP (Laravel)",
    type:'fullstack',
    tags:['laravel'],
    links:{
      github:'https://github.com/codad5/HotelMs'
    },
    children: (
      <div>
        An Hotel management system built in PHP with the laravel framework
      </div>
    )
  },
  {
    name:"My portfolio",
    main_lang:'typescript (React.js}',
    type:'frontend',
    tags:['tailwindcss', 'react'],
    links: {
      website:'https://codad5.me',
      github:'https://github.com/codad5/portfolio2'
    },
    children:(
      <div>
        What you are viewing, <a href="https://preview.codad5.me" className="underline">click to see currrent beta version</a>
      </div>
    )
  }
  ]
