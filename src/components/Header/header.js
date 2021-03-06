import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import headerStyles from './header.module.scss'

// const Header = () => {
//     const data = useStaticQuery(graphql`
//       query{
//           site{
//               siteMetadata{
//                   title
//               }
//           }
//       }
//     `)
    
//     return (
//         <header className={headerStyles.header}>
//             <h1>
//                 <Link className={headerStyles.title} to='/'>
//                     {data.site.siteMetadata.title}
//                 </Link>
//             </h1>
//             <nav>
//                 <ul className={headerStyles.navList}>
//                     <li>
//                         <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/blog">Blog</Link>
//                     </li>
//                     <li>
//                         <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/about">About</Link>
//                     </li>
//                     <li>
//                         <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/contact">Contact</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// export default Header


const Header = () => {
     
    
    return (
        <StaticQuery
        query={graphql`
          query HeadingQuery{
            site{
                siteMetadata{
                    title
                }
            }
          }
        
        `}
        render={data =>(
            <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to='/'>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        )}
        />
    )
}

export default Header


    