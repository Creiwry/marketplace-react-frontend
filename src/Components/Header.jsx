import LanguageSwitch from './LanguageSwitch'
import { Link } from "react-router-dom"
import {FormattedMessage} from 'react-intl'
import { LogoutButton } from './Logout'

const Header = () => {

  return (
    <header
      className='sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid py-6 bg-transparent border-transparent'>
      <h1 className="font-medium"><b className="font-bold poppins ml-1">
        <FormattedMessage id= "app.header" defaultMessage="Brand" />
      </b></h1>
      <div className="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        <LanguageSwitch />
            <Link to="/" className="duration-200 hover:text-rose-500">Home</Link>
        <LogoutButton />
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    </header>
  )
}

export { Header }
