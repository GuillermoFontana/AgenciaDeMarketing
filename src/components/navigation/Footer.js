import { connect } from "react-redux"

const navegation = {
    solutions: [
     {name: 'Marketing', href:'#'},
     {name: 'Analytics', href:'#'},
     {name: 'Commerce', href:'#'},
     {name: 'Insights', href:'#'},
    ],
    support:[
     {name: 'Pricing', href:'#'},
     {name: 'Documentation', href:'#'},
     {name: 'Guides', href:'#'},
     {name: 'API Status', href:'#'},
    ],
    company:[
     {name: 'About', href:'#'},
     {name: 'Blog', href:'#'},
     {name: 'Jobs', href:'#'},
     {name: 'Press', href:'#'},
     {name: 'Partners', href:'#'},
    ],
    legal:[
     {name: 'Claim', href:'#'},
     {name: 'Privacy', href:'#'},
     {name: 'Terms', href:'#'},
    ],
    social:[
         {
             name: 'GitHub',
             href: '#',
             icon: (props) => (
                 (
                     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                         <path d="M12 2C6.48 2 2 6.48 2 12S4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605"/>
                     </svg>
                 )                
             ),
         },
         {
             name: 'Facebook',
             href: '#',
             icon: (props) => (
                 <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                     <path
                     fillRule="evenodd"
                     d="M12 2C6.48 2 2 6.48 2 12S4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605" 
                     clipRule="evenodd"
                     />
                 </svg>
             ),
         },
         {
             
             name: 'Instagram',
             href: '#',
             icon: (props) => (
                 <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                     <path
                     fillRule="evenodd"
                     d="M12 2C6.48 2 2 6.48 2 12S4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605" 
                     clipRule="evenodd"
                     />
                 </svg>
             ),
         },
         {
             name: 'Twitter',
             href: '#',
             icon: (props) => (
                 <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                     <path d="M12 2C6.48 2 2 6.48 2 12S4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605"/>
                 </svg>
             ),
         },
         {
             name: 'Dribbble',
             href: '#',
             icon: (props) => (
                 <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                     <path
                     fillRule="evenodd"
                     d="M12 2C6.48 2 2 6.48 2 12S4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605" 
                     clipRule="evenodd"
                     />
                 </svg>
             ),
         },
     ]
 }

function Footer() {
    return(
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <img className="h-10" src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300" alt="Company name" />
                        <p className="text-base text-gray-500">
                            Making the world abetter place through constructing elegant hierarchies
                        </p>
                        <div className="flex space-x-6">
                            {navegation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>                     
                                <h3 className="text-base font-medium text-gray-900">Solution</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navegation.solutions.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray">
                                            {item.name}
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">Support</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navegation.support.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray">
                                            {item.name}
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navegation.company.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray">
                                            {item.name}
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">Legal</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navegation.legal.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray">
                                            {item.name}
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; 2020 Your Company</p>
                </div>
            </div>
        </footer>
    )
}

const mapStateToProps = state=>({

})

export default connect(mapStateToProps, {

})(Footer)