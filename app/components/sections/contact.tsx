import { contactsType } from "../types";
import Link from "next/link";
import Image from "next/image";
import GithubLogo from '@/app/assets/Github.svg'
import LinkedinLogo from '@/app/assets/Linkedin.svg'
import TwitterLogo from '@/app/assets/Twitter.svg'

const contactsText: contactsType[] = [
    {
        label: "Email",
        value: "Aniezeoformic@gmail.com",
        link: "mailto:aniezeoformic@gmail.com"
    },
    {
        label: "Phone",
        value: "+234(0)8142572488",
        link: "tel:+2348142572488"
    }
]

const contactLogo: contactsType[] = [
    {
        label: "Github",
        value: GithubLogo,
        link: "https://github.com/codad5"
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

export default function ContactSection(){
    return (
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
                            <Link href={values.link}><Image alt={`codad5 ${values.label}`} src={values.value} /></Link>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}