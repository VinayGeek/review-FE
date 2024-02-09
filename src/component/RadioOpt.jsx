import { Flex, Radio } from "antd";

const RadioOpt = ({ data = [], defaultValue = "" }) => {
  return (
    <Flex vertical gap="middle">
      <Radio.Group defaultValue={defaultValue} buttonStyle="solid">
        {data?.map((val) => {
          return (
            <Radio.Button key={val} value={val}>
              {val}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </Flex>
  );
};

export default RadioOpt;
