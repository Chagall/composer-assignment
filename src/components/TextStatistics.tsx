import "./TextStatistics.css";

const TextStatistics = (props: TextStatisticsProps) => {
  return (
    <div className="container">
      <p>
        <span className="description">Vowels: </span>
        {props.vowels}
        <span className="description"> / Consonants: </span>
        {props.consonants}
        <span className="description"> / Words: </span>
        {props.words}
      </p>
    </div>
  );
};

interface TextStatisticsProps {
  vowels: number,
  consonants: number,
  words: number
};

export default TextStatistics;
