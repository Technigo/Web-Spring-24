export const Hero = () => {
  return (
    <div className="py-20 bg-hero-pattern bg-no-repeat bg-bottom bg-cover h-500">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-4">
          Welcome to Your Website
        </h1>
        <p className="text-lg md:text-xl text-white">
          Craft beautiful landing pages with Tailwind CSS and React.js
        </p>
        <button className="bg-white text-technigoBlue font-bold px-8 py-3 mt-8 rounded-full hover:bg-blue-100">
          Get Started
        </button>
      </div>
    </div>
  )
}

/* 
In Tailwind CSS, the container class is used to constrain the width of an element to a maximum width. It's often applied to layout elements like div or section to limit their width, especially on larger screens, to improve readability and maintain a comfortable reading experience.

Here's how the container class works:

Max-width constraint: The container class sets a maximum width for the element it's applied to. By default, this maximum width is determined by the current breakpoint size. Tailwind CSS defines different maximum widths for different breakpoints, ensuring that the content doesn't stretch too wide on larger screens.

Centering: By default, elements with the container class are horizontally centered within their parent container. This ensures that the content remains visually centered and doesn't stick to one side of the screen, which can be jarring on larger displays.

 */
