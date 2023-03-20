import App from "@/app/components/main";
import { getPosts, getPostsAndMetadata } from "./helpers/post";
import reactLogo from '@/app/assets/react.svg'
import GithubLogo from '@/app/assets/Github.svg'
import LinkedinLogo from '@/app/assets/Linkedin.svg'
import TwitterLogo from '@/app/assets/Twitter.svg'
import { contactsType } from "@/app/components/types";
const post = getPostsAndMetadata();

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

export default function Home() {
  return (
    <>
      <App posts={post} contactsText={contactsText} contactLogo={contactLogo}/>
    </>
  )
}