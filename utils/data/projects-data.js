import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Mitra-Fintech Loan Financial App',
        description: "Me and my team built an Mitra-Fintech Loan Financial Mobile Application. I have developed API using Express, Node.js, MongooDB and MongoDB. Used OTP via Fast2SMS. Integrated third-party Loan API and Credit Card API into the project. Implemented Reels & Communities functionality, enhancing user engagement. Developed an API for Lead Case Creation and an Updation API for daily status updates. Implemented daily notifications using Firebase Cloud Messaging, with a cron job for scheduling. Enabled communication, picture posting, likes, and comments in the community section APIs. Ensured app security by implementing authentication using bcrypt and JWT in all APIs .",
        tools: ['Express', 'MongoDB', 'Third-Party API', 'Youtube Reel & Video API', 'Cashfree API', 'Bravo', 'Vercel', 'PM2', 'Nginx','Cloudinary','CloudFlare'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Light Speed Pay ',
        description: 'I have designed and developed a full-stack web app for Merchants. I created the UI using HTML, CSS, JQuery and Bootstrap. Capturing the payment methods used by merchants. Allowing merchants to register multiple accounts, but at a time, they can only transfer funds to one account, and all funds will be transferred to that account. Provided payment services to verified merchants, enabling them to process payments on their platforms. I developed the API using NodeJs, Express, MongooDB, Linux(KVM), and Brevo. I deployed the front-end app to Vercel.',
        tools: ['NodeJs', 'Express', 'MongoDB', 'Linux(KVM)', 'Brevo', 'Vercel', 'PM2', 'Nginx', 'JQuery', 'Bootstrap', 'HTML', 'CSS','Cloudinary'],
        role: 'Full Stack Web Developer',
        code: '',
        demo: '',
        image: travel,
    },
    // {
    //     id: 3,
    //     name: 'AI Powered Real Estate',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },