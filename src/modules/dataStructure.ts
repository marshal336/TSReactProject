import { facebook, figma, folder, google, heart, instagram, invision, microsoft, notion, phpstorm, procreate, sketch, slack, slackPng, toolbox, twitter, visualstudiocode, wordpress, zeplin } from "../assets/img/image";
import { headerItemsString, heroIconsString, CardItemsString, trustedImagesString, buttonType, } from "./interface";

export const headerItems: headerItemsString[] = [
    {
        id: 'Home',
        title: 'Home'
    },
    {
        id: 'Categories',
        title: 'Categories'
    },
    {
        id: 'My Collections',
        title: 'My Collections'
    },
    {
        id: 'Blog',
        title: 'Blog'
    },
]
export const heroIcons: heroIconsString[] = [
    {
        id: 'facebook',
        icon: facebook
    },
    {
        id: 'instagram',
        icon: instagram,
    },
    {
        id: 'twitter',
        icon: twitter
    },
]
export const popularCard: CardItemsString[] = [
    {
        id: 'figma',
        logo: figma,
        title: 'FIGMA',
        subTitle: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },
    {
        id: 'Sketch',
        logo: sketch,
        title: 'Sketch',
        subTitle: 'Trial & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },
    {
        id: 'visualstudiocode',
        logo: visualstudiocode,
        title: 'Visual Studio Code',
        subTitle: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },
    {
        id: 'Notion',
        logo: notion,
        title: 'Notion',
        subTitle: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },
    {
        id: 'Slack',
        logo: slack,
        title: 'Slack',
        subTitle: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },
    {
        id: 'Invision',
        logo: invision,
        title: 'Invision',
        subTitle: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },

]
export const trustedImages: trustedImagesString[] = [
    {
        id: 'microsoft',
        icon: microsoft
    },
    {
        id: 'google',
        icon: google
    },
    {
        id: 'slackPng',
        icon: slackPng,
    },
    {
        id: 'wordpress',
        icon: wordpress
    },
]
export const newcomerCard: CardItemsString[] = [
    {
        id: 'Zeplin',
        logo: zeplin,
        title: 'Zeplin',
        subTitle: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },
    {
        id: 'PHPStorm',
        logo: phpstorm,
        title: 'PHPStorm',
        subTitle: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },
    {
        id: 'Toolbox',
        logo: toolbox,
        title: 'Toolbox',
        subTitle: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },
    {
        id: 'Procreate',
        logo: procreate,
        title: 'Procreate',
        subTitle: 'Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconOne: heart,
        iconTwo: folder,
    },
] 
export const footerLinks = [
    {
        id: 'FooterLinkContactUs',
        title: 'Contact Us',
        links: [
            { name: +621987463 },
            { name: 'M Building, No.10 A'  },
            { name: 'antools@awesome.com' }
        ]
    },
    {
        id: 'FooterLinkCategories',
        title: 'Categories',
        links: [
            { name: 'Design' },
            { name: 'Development' },
        ]
    },
    {
        id: 'FooterLinkCompanyInfo',
        title: 'Company Info',
        links: [
            { name: 'About Us' },
            { name: 'Our Partners' },
            { name: 'Blog' }
        ]
    }
]
export const button: buttonType[] = [
    {label: 'login', backgound: 'bg-transparent', textColor: '', border: 'max-mdl:border border-slate-600', hover: 'hover:bg-hoverColor'},
    {label: 'Sign Up', backgound: 'bg-mainTwo', textColor: '', border: '', hover: 'hover:bg-orange-700'},
    {label: 'Search', backgound: 'bg-mainTwo', textColor: '', border: '', hover: 'hover:bg-orange-700'},
    {label: 'Visit', backgound: 'bg-transparent', textColor: '', border: '', hover: 'hover:bg-mainTwo'},
    {label: 'Load more', backgound: 'bg-transparent', textColor: 'text-orange-600 max-mdl:text-sm', border: 'border border-slate-600', hover: 'hover:bg-hoverColor'},
    {label: 'Explore more', backgound: 'bg-mainTwo', textColor: 'max-mdl:text-sm', border: '', hover: 'hover:bg-orange-700'},
    {label: 'Join Us', backgound: 'bg-mainTwo', textColor: '', border: '', hover: 'hover:bg-orange-700'},

]