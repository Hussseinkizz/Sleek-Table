import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import { useRouter } from "next/router";
import { _numberFormat } from "utils/utilities";

interface Props {
  title: string;
  icon: JSX.Element;
  data: number;
  percentText: string;
  percentAmount: number;
  route: string;
}

const MetricCard = (props: Props) => {
  const router = useRouter();

  function getPercent(numerator: number, total: number) {
    return (numerator / total) * 100;
  }

  return (
    <Card
      className="_hover-settings --hover:shadow-blue-200 --bg-gradient-to-l --from-blue-400 --to-blue-600 group mx-auto max-w-xs rounded-lg bg-blue-600 text-blue-50 shadow will-change-transform hover:-translate-y-4 hover:shadow-lg hover:transition-transform"
      onClick={() => router.push(props.route)}
    >
      <Text className="text-white">{props.title}</Text>
      <Metric className="mt-2">
        <span className="flex items-center justify-start gap-2">
          <span className="--group-hover:bg-blue-400 flex rounded-lg bg-blue-400 p-2 text-blue-50 transition ease-linear">
            {props.icon}
          </span>
          <span className="flex text-white transition ease-linear group-hover:text-blue-100">
            {_numberFormat(props.data)}
          </span>
        </span>
      </Metric>
      <Flex className="mt-4">
        <Text className="text-white">
          {getPercent(props.percentAmount, props.data)}% {props.percentText}
        </Text>
        <Text className="text-white">
          UGX {_numberFormat(props.percentAmount)}
        </Text>
      </Flex>
      <ProgressBar
        percentageValue={getPercent(props.percentAmount, props.data)}
        className="mt-2"
      />
    </Card>
  );
};

export default MetricCard;
