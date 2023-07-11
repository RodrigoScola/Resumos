#react #javascript 
navigate between the pages 
in next, a page is a react component exported from a file in the pages directory 
they are associated with a route based on their file name 
     pages/index.js is associated with the / route
     pages/posts/first-post.js is asssociated with the /posts/first-post route 
to create a new page 
     create a file/folder that you want and the path becomes the url path 
          
navigate between pages 
     in next you use the link component 
     {
          import Link from 'next/link'
            <Link href="/posts/first-post">
          <a>this page!</a>
          </Link>
     }

client side navigation 
     the link component enables client side navigation between two pages in the same next app 

code splitting and prefetching 
     it does code splitting automatically, each page only loads what is necessary 
     for that page. that means when the homepage is rendered, the code for other pages is not served initially 
     this ensures that the homepage loads quickly even if you have hundreds of pages 

assets, metadata, css 
     next has built in support for css and sass 

assets 
     next can serve static assets like images, under the top-level public directory 
     files inside `public` can be referenced from the root of the application similar to `pages`
     the `public` is also useful for `robots.txt`
unoptimized image 
     with regular html you would add the pfp like this 
          <img src="/images/profiile.jpg" alt="your profile pic" />
     however this means you have to manually handle 
          ensuring the image is responsive on different screen sizes 
          optimizing the images with a third-party tool or library 
          only loading images when they enter the viewport 
     instead, next js provides an Image component to handle this 
using the image component 
     instead of optimizing images at build time, next optimizes images on-demand, as users request them 
     unlike static site generators and static only solutions, build times arent increased 
     {
          <Image src="/images/profile.jpg" height:{144} width={144} alt="userImage" />
     }

metadata 
     what if you want to modify the metadata of the page, such as the title tag?
     first you use Head instead of head  
     you can import Head from the next/head module 
          {
               export default function myFirstPost () {
                    const title = 'myFirstPost'
                    return <>
                         <Head>
                              <title>{title}</title>
                         <div>
                              <h1>{title}</h1>
                         </div>
                         </>
               }
          }
third-party javascript 
     refers to any scripts that are added from a third party source. usually they are included in order to introduce newer functionality into a site that does not 
     need to be written from scratch such as analytics, ads and customer support widgets 
          import head from next/head and add the script tag inside the Head component
     although this approach works, including scripts in this manner does not give a clear idea of when it would load with respect to the other javascript code fetched 
     on the same page. if a particular script is render-blocking and can delay page content from loading, this impacts performance 
using the script component 
     next/script is an extension of the html script element and optimizes when additional scripts are fetched and executed 
          {
               <Script src="thesrource" strategy='lazyOnload' onload={() => console.log('script loaded)};
          }
     notice that a few additional properties have been defined in the script component 
          strategy - controls when the third party script should load. a value of lazyOnload tells next to load this script lazily during browser idle time 
          onLoad - is used to run any js code immediately after the script has loaded correctly 

css styling 
     { <style jsx>{``}</style> }
     this is a library called styled-jsx. its a css in js library and lets you write css within a react component 
Layout component
     lets create a Layout component that will be shared across all pages 
          {
               export default const Layout = ({children}) => {return <div>{children}</div>}
          }
     then add it to an existing component
          {
               import Head from 'next/head'
               import Layout from '../../Components/Styles/Layout'
               export default function FirstPost () {
                    return <> <Layout>
                         <Head><title>this is the tile</title></Head>
                         <header>
                         <h1>this is the title</h1>
                         </header>
                         </Layout>
                    </>
               }}
     adding css 
          now add some styles to the Layout component. to do so well use css modules 
          create a file called components/layout.module.css 
               {
                    .container {
                         max-width: 36rem;
                         padding: 0 1rem; 
                         margin 3rem auto 6rem;
                    }
               }
          to use the container clss inside the components/layout.js you need to 
               import the css file and assign a name to it 
               use the styles.container as the className 
                    {
                         import styles from './layout.module.css'
                         export default const Layout = ({children}) => {
                              return <div className={styles.container}>{children}</div>
                         }
                    }
          
global styles 
     css modules are useful for component level styles but if you want some css to be loaded by every page, next js has support for that aswell 
     to load global css files create a file called _app.js with the following content 
          { 
               export default function App ({Component, pageProps}) { 
                    return <Component {...pageProps} />
               }
          }
     this app compoentn is the top-level component which will be common across all the different pages. you can use this component to keep state when navigating between pages 
adding global css 
     in next you can add global css files by importing them from pages/_app.js, you cannot import global css anywhere else 
     the reason that global css cant be imported outside of pages/_app.js is that global css affects all elements on the page
     you can place the global css file anywhere and use any name 
          create a top-level styles directory and create global.css inside 
     thats it 

prerendering 
     by default next pre-renders every page, this means that it generates html for each page in advance
     each generated html is associated with minimal js code necessary for that page. when a page is leaded by the browser, its js runs and makes the page fully interactive 

it has two forms of pre-rendering 
     static generation - generates html at build time, the html is reused on each request 
     server side rendering - generated the html on each request 
per page basis 
     next lets you choose which pre-rendering form to use for each page, you can create a hybrid next app using static for some pages and server for others

when to use static vs server side
     its recommended using static generation whenever possible because your page can be built once and served by cdn, wich makes it much faster than having a server render the page on every request 

static generation   
     it can be done with and without data 
     for some pages, you might not be able to render the html without first fetching some external data      

static generation with data using
     when you export a page component, ou can export an async function called getStaticProps 
          runs at build time and you can fetch external data and send it as props to the page
          {
               export default function Home(props) {
                    ...
               }
               export async function getStaticProps() {
                    // get external data from the file system, api, db...
                    let data = ...
                    //the value of the props key will be passed to the home component 
                    return {
                         props: ...
                    }
               }
          }
          this allows you to tell next: this page has some data dependencies - when you pre-render this page at build time, make sure to resolve them first 
     applying 
          {
               export async function getStaticProps() {
                    const data = await fetch('link')    
                    return {
                         props: {
                              data
                         }
                    }
               }
               export function Home({data}) {
                    return <>
                         data.map(value => {
                              return <h1>{value.title}</h1>
                         })
                    </>
               }    
          }
what if i need to fetch data at request time 
     static generation is not a good idea if you cannot prerender a page ahead of a users request 

fetching data at request time 
     if you need to fetch data at request time instead of at build time, you can try server side rendering 
     to use server side rendering, you need to export getServerSideProps instead of getStaticProps from the page 

using getServerSideProps 
     {
          export async function getServerSideProps(context) {
               ...
          }
     }
     because getServerSideProps is called at request time, its parameter context contains request specific params 

swr 
     is a react hook for data fetching
     {
          const Profile = () => {
               const {data,error } = useSWR('/api/user', fetch)
               if (error) return <div>failed to load</div>
               if (!data) return <div>...loading</div>
               return <div>hello there, {data.name}</div>
          }
     }
     
dynamic routes ------------------------------------------------------------------------------------------------------------------------------
     page paths depends on external data 
     where each path depends on external data, next allows you to statically generate pages with paths that depend on external data. this enables dynamic urls in next 

how to statically generate pages with dynamic routes 
     create a file called [something].js 
now export an async function called getStaticPaths  and return a list of possible values 
     {
          async function getStaticPaths() {
               const paths = await getAllIds()
               return {
                    paths,
                    fallback: false
               }
          }
     }
then export an async function getStaticProps 
     {
          const getStaticProps = async({params}) => {
               const postId = getPost(params.id)
               return {
                    props: {
                         postId
                    }
               }
          }
     }
fetch external api or query database 
     if fallback is false, any paths not returned by getStaticPaths will result in a 404 page 
     if fallback true, behaviour changes 
          the paths returned from getStaticPaths will be rendered to html at build time 
          the paths that have not been generated at build time will not result in a 404 page. instead next will serve a fallback version of the page on the first request to such a path 

catch all routes 
     dynamic routes can be extended to catch all paths by adding three dots inside brackets 
          [...id]
     matches
          /post/a,post/a/b,post/a/b/c 
     if you do it in getStaticPaths, you must return an array as the value of the id like so 
          {
               return [
                    params: {
                         id: ['a','b','c']
                    }
               ]
          }
404 pages 
     to create a custom 404 page, create pages/404.js 
          {
               export default function Custom404()
          }
     
api routes ------------------------------------------------------------------------------------------------------------------------------------

let you create an api endpoint inside a next app, you can do so by creating a function inside the pages/api 
     {
          export default function handler(req,res) {
               res.status(200).json({text: 'hello'})
          }
     }

do not fetch an api route from getStationProps or getStaticPaths
     it only runs server-side and will never be run on client-side 
     