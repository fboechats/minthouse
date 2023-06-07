import { Fragment } from 'react'

type LogoProps = {
  variant: 'primary' | 'secondary'
}

export function Logo({ variant }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={variant === 'primary' ? '0 0 160 53' : '0 0 53 53'}
      height="53"
      width={variant === 'primary' ? '160' : '53'}
    >
      {variant === 'primary' ? (
        <Fragment>
          <path
            fill="black"
            d="M70.7447 33.5376H79.5799C79.5799 36.413 77.2489 38.744 74.3735 38.744H64V17.7999C64 14.0749 67.0197 11.0552 70.7447 11.0552V33.5376Z"
          />
          <path
            fill="black"
            d="M91.839 39.0596C89.6828 39.0596 87.7369 38.5994 86.0014 37.6791C84.2923 36.7587 82.9381 35.444 81.9388 33.7348C80.9659 32.0256 80.4795 30.0272 80.4795 27.7395C80.4795 25.4781 80.9791 23.4928 81.9783 21.7836C82.9775 20.0481 84.3448 18.7202 86.0803 17.7999C87.8158 16.8796 89.7617 16.4194 91.9179 16.4194C94.0741 16.4194 96.0199 16.8796 97.7554 17.7999C99.4909 18.7202 100.858 20.0481 101.857 21.7836C102.857 23.4928 103.356 25.4781 103.356 27.7395C103.356 30.0009 102.844 31.9993 101.818 33.7348C100.819 35.444 99.4383 36.7587 97.6765 37.6791C95.941 38.5994 93.9952 39.0596 91.839 39.0596ZM91.839 33.222C93.1274 33.222 94.2187 32.7487 95.1127 31.8021C96.0331 30.8555 96.4932 29.5013 96.4932 27.7395C96.4932 25.9777 96.0462 24.6235 95.1522 23.6769C94.2844 22.7302 93.2063 22.2569 91.9179 22.2569C90.6031 22.2569 89.5119 22.7302 88.6441 23.6769C87.7764 24.5972 87.3425 25.9514 87.3425 27.7395C87.3425 29.5013 87.7632 30.8555 88.6047 31.8021C89.4724 32.7487 90.5505 33.222 91.839 33.222Z"
          />
          <path
            fill="black"
            d="M115.201 16.4194C116.753 16.4194 118.107 16.7349 119.264 17.366C120.447 17.9971 121.354 18.8254 121.985 19.8509C121.985 18.13 123.38 16.7349 125.101 16.7349H128.73V38.7046C128.73 40.7293 128.322 42.5568 127.507 44.1871C126.718 45.8437 125.496 47.1585 123.839 48.1314C122.209 49.1043 120.171 49.5908 117.726 49.5908C114.465 49.5908 111.822 48.8151 109.798 47.2637C107.773 45.7385 106.616 43.6612 106.327 41.0317H112.992C113.203 41.8731 113.702 42.5305 114.491 43.0038C115.28 43.5034 116.253 43.7533 117.41 43.7533C118.804 43.7533 119.908 43.3457 120.723 42.5305C121.565 41.7417 121.985 40.4664 121.985 38.7046V35.5886C121.328 36.6141 120.421 37.4556 119.264 38.1129C118.107 38.744 116.753 39.0596 115.201 39.0596C113.387 39.0596 111.743 38.5994 110.271 37.6791C108.798 36.7324 107.628 35.4045 106.76 33.6953C105.919 31.9599 105.498 29.9614 105.498 27.7C105.498 25.4386 105.919 23.4534 106.76 21.7442C107.628 20.035 108.798 18.7202 110.271 17.7999C111.743 16.8796 113.387 16.4194 115.201 16.4194ZM121.985 27.7395C121.985 26.0566 121.512 24.7287 120.565 23.7558C119.645 22.7828 118.514 22.2964 117.173 22.2964C115.832 22.2964 114.688 22.7828 113.742 23.7558C112.821 24.7024 112.361 26.0171 112.361 27.7C112.361 29.3829 112.821 30.724 113.742 31.7232C114.688 32.6961 115.832 33.1826 117.173 33.1826C118.514 33.1826 119.645 32.6961 120.565 31.7232C121.512 30.7503 121.985 29.4224 121.985 27.7395Z"
          />
          <path
            fill="black"
            d="M142.358 39.0596C140.202 39.0596 138.256 38.5994 136.52 37.6791C134.811 36.7587 133.457 35.444 132.458 33.7348C131.485 32.0256 130.998 30.0272 130.998 27.7395C130.998 25.4781 131.498 23.4928 132.497 21.7836C133.496 20.0481 134.864 18.7202 136.599 17.7999C138.335 16.8796 140.281 16.4194 142.437 16.4194C144.593 16.4194 146.539 16.8796 148.274 17.7999C150.01 18.7202 151.377 20.0481 152.376 21.7836C153.376 23.4928 153.875 25.4781 153.875 27.7395C153.875 30.0009 153.362 31.9993 152.337 33.7348C151.338 35.444 149.957 36.7587 148.195 37.6791C146.46 38.5994 144.514 39.0596 142.358 39.0596ZM142.358 33.222C143.646 33.222 144.738 32.7487 145.632 31.8021C146.552 30.8555 147.012 29.5013 147.012 27.7395C147.012 25.9777 146.565 24.6235 145.671 23.6769C144.803 22.7302 143.725 22.2569 142.437 22.2569C141.122 22.2569 140.031 22.7302 139.163 23.6769C138.295 24.5972 137.861 25.9514 137.861 27.7395C137.861 29.5013 138.282 30.8555 139.124 31.8021C139.991 32.7487 141.069 33.222 142.358 33.222Z"
          />
        </Fragment>
      ) : null}
      <path
        fill="#ef9834"
        d="M38 24.7441C43.5228 24.7441 48 20.267 48 14.7441C48 9.22129 43.5228 4.74414 38 4.74414C32.4772 4.74414 28 9.22129 28 14.7441C28 20.267 32.4772 24.7441 38 24.7441Z"
      />
      <path
        fill="#fff42b"
        d="M38 48.7441C43.5228 48.7441 48 44.267 48 38.7441C48 33.2213 43.5228 28.7441 38 28.7441C32.4772 28.7441 28 33.2213 28 38.7441C28 44.267 32.4772 48.7441 38 48.7441Z"
      />
      <path
        fill="#ff402b"
        d="M5 21.7441C5 12.3553 12.6112 4.74414 22 4.74414V31.7441C22 41.133 14.3888 48.7441 5 48.7441V21.7441Z"
      />
    </svg>
  )
}