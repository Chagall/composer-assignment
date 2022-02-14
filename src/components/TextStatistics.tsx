import { Segment, Statistic } from "semantic-ui-react";
import "../css/TextStatistics.css";

const TextStatistics = (props: TextStatisticsProps) => {
  return (
    <div className="statisticsContainer">
      <Segment padded>
        <Statistic.Group size="tiny" widths={2}>
          <Statistic>
            <Statistic.Value>{props.vowels}</Statistic.Value>
            <Statistic.Label>Vowels</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{props.consonants}</Statistic.Value>
            <Statistic.Label>Consonants</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{props.words}</Statistic.Value>
            <Statistic.Label>Words</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{props.digits}</Statistic.Value>
            <Statistic.Label>Digits</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </div>
  );
};

interface TextStatisticsProps {
  vowels: number,
  consonants: number,
  words: number,
  digits: number
};

export default TextStatistics;