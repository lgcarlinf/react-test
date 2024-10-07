import  { SVGAttributes } from 'react'

export const DotSVG = (props:SVGAttributes<SVGElement>) => {
  return (
    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="2" cy="2" r="2" fill="#919EAB"/>
    </svg>
    
  )
}
