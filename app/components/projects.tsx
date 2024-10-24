import { Children } from "react";
import { projectsDetails } from "./types";
import Currencynet from '@/app/assets/currencynet.png'
import Sanctablog from '@/app/assets/sanctablog.jpeg' 
import WemallF from '@/app/assets/wemall-f.jpeg'
import GTD from '@/app/assets/Google-Task-Desktop.png'
import UsecretPic from '@/app/assets/usecret.png'
import UsecretOld from '@/app/assets/usecret-old.png'
import WemallB from '@/app/assets/wemall-b.png'
import FLi from '@/app/assets/fli.png'
import Quickcv from '@/app/assets/quickcv.png'

export const projects: projectsDetails[] = [
    {
      name: "Google Task Desktop",
      type: 'desktop',
      main_lang: 'tauri',
      tags: ['rust', 'desktop', 'react'],
      image: GTD.src,
      links: {
        github: "https://github.com/codad5/google-task-tauri",
        website: 'https://google-task.codad5.me/'
      },
      children: (
        <div>
          This is an unofficial desktop app for google task built with <b>Tauri</b> (Rust + React.js)
        </div>
      )
    },
    {
      name: "QuickCv", 
      type: 'web',
      main_lang: 'next.js',
      tags: ['typescript', 'next.js', 'ai'],
      image: Quickcv.src,
      links: {
        github: "https://github.com/codad5/quickcv", 
        website : "https://quickcv.codad5.me"
      },
      children: (
        <div>
          This is a web app that helps to generate resume in markdown format using <a href="https://groq.com">Groq API</a> aimed for high ATS score
        </div>
      )
    },
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
            {/* <span className="underline decoration-dotted font-bold"> {isBrowser && false ? 'which i use in this project for shortcuts' : 'Try using a Desktop to use this library here!'}</span> */}
            </ div >
      )
    },
    {
      name: "Wemall",
      type: 'backend',
      main_lang: 'php',
      image: WemallB.src,
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
      name:'U-secret (Next.js)',
      main_lang:'Typescript (Next.js)',
      type:'fullstack',
      tags: ['messaging service'],
      image: UsecretPic.src,
      links:{
        github:'https://github.com/codad5/usecret-node-version',
        website:'https://usecret.xyz'
      },
      children: (
        <div>
          This is a rewrite of U-secret (Node.js) in Next.js, that helps to recieve anonymous message from friends and family.
        </div>
      )
    }, 
    {
      name: "Fli",
      type: 'dev',
      main_lang : 'rust',
      tags: ['rust', 'dev'],
      image: FLi.src,
      links: {
        github: "https://github.com/codad5/fli",
      },
      children: (
        <div>
          This is a cli parser built with rust , inspired by commander.js (javascript) 
        </div>
      )
    },
    {
      name: "CurrrencyNet",
      type:'dev',
      tags:['currency', 'javascript', 'library', 'api'],
      image: Currencynet.src,
      main_lang:'javascript',
      links:{
        github:"https://github.com/codad5/currencynet",
        website:'https://codad5.github.io/currencynet'
      },
      children:(
        <div>
          This is a Frontend tools (library) that helps convert currencynet based off user location.
        </div>
      )
    },
    {
      name:'webpdf',
      main_lang:'typescript',
      type:'chrome-ext',
      image:'https://github.com/codad5/webpdf/raw/master/assets/preview.png',
      tags:['pdf', 'web-to-pdf'],
      links: {
        github:'https://github.com/codad5/webpdf'
      },
      children:(
        <div>
          This is a chrome extension that helps to convert set of webpages as one PDF
        </div>
      )
    },
    {
      name:"sanctablog.com",
      main_lang:'wordpress',
      image:Sanctablog.src,
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
    image:Currencynet.src,
    tags: ['javascript', 'library', 'typescript'],
    links: {
      github: "https://github.com/codad5/react-currencynet",
      website: 'https://www.npmjs.com/package/currencynet'
    },
    children: (
      <div>
        The React.js based version of Currencynet written in <b>Typescript</b>
      </div>  
    )
  },
  {
    name : "Laravel Banking API",
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
    tags: ['messaging service'],
    image: UsecretOld.src,
    links:{
      github:'https://github.com/codad5/usecret-node-version/tree/v1',
      website:'https://usecret.cyclic.app'
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
    image : WemallF.src,
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
  },
  {
    name : 'clog',
    main_lang:'PHP (laravel)',
    type: 'backend',
    tags:['blog', 'php', 'laravel'],
    links: {
      github : 'https://github.com/codad5/clog'
    },
    children:(
      <div>
          This is a blog built with PHP laravel
      </div>
    )
  }

  ]
