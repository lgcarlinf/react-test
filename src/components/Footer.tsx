import logo from '../public/logo.png'

export const Footer = () => {
  return (

        <footer className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center bg-gray-800 text-white text-center p-4'>
        <img src={logo} alt='logo' width={96} height={30}/>
        <p>© 2024 - Todos los derechos reservados</p>
        <div className='flex gap-4'>
        <a href='https://wa.me/51994266065' target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/lgcarlinf/cdnTest@master/assets/whatsapp.svg" alt="linkedin" width={22}/>
          </a>
          <a href='https://www.linkedin.com/in/luiggycf/' target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/lgcarlinf/cdnTest@master/assets/linkedin.svg" alt="linkedin" width={22}/>
          </a>
          <a href='https://github.com/lgcarlinf' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/lgcarlinf/cdnTest@master/assets/github.svg" alt="github" width={22}/>
          </a>
        </div>
        </footer>

  )
}
