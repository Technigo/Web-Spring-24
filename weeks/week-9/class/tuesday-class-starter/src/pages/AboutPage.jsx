import { Hero } from "../components/Hero";

export const AboutPage = () => {
  // Array of band members
  const bandMembers = [
    "Anthony Kiedis",
    "Flea",
    "Chad Smith",
    "John Frusciante",
  ];

  const image =
    "https://cdn.wegow.com/media/artists/red-hot-chili-peppers/red-hot-chili-peppers-1634893172.0399256.1780x720.jpg";

  return (
    <div>
      <h2>
        This page is constructed using a mix of a React component with props and
        HTML elements.
      </h2>
      <h3>About Red Hot Chili Peppers</h3>
      <Hero imageUrl={image} />
      <p>
        The Red Hot Chili Peppers (RHCP) are an American rock band formed in Los
        Angeles, California in 1983. The band's music incorporates elements of
        funk, punk rock, and psychedelic rock.
      </p>
      <p>
        The original lineup of the band consisted of vocalist Anthony Kiedis,
        bassist Flea, guitarist Hillel Slovak, and drummer Jack Irons. Over the
        years, the band's lineup has changed several times, with Flea and Kiedis
        being the only constant members.
      </p>
      <p>
        Some of the Red Hot Chili Peppers' most popular albums include "Blood
        Sugar Sex Magik," "Californication," and "Stadium Arcadium." They have
        won multiple Grammy Awards and have sold over 80 million records
        worldwide.
      </p>
      <h3>Band Members:</h3>
      <ul>
        {bandMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};
