import { LoaderIcon, LoaderWrapper, Text } from './Loader.styles';

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderIcon />
      <Text>Loading...</Text>
    </LoaderWrapper>
  );
};

export default Loader;
