import { SVGAttributes } from 'react'

export const FavoriteSVG = (props:SVGAttributes<SVGElement>) => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.29289 2.70711L10 3.41421L10.7071 2.70711C11.5873 1.82693 12.9877 1 14.5 1C16.9251 1 19 2.98969 19 6C19 9.11322 17.3374 11.6182 15.2515 13.5849C13.4145 15.3169 11.3471 16.5421 10 17.3374C8.65287 16.5421 6.58547 15.3169 4.74851 13.5849C2.66262 11.6182 1 9.11322 1 6C1 2.99431 3.10853 1 5.5 1C7.01232 1 8.41272 1.82693 9.29289 2.70711Z" fill="white" stroke="black" strokeWidth="2" {...props}/>
    </svg>
    
  )
}
