type AdSizeProps = {
  size: 'sm' | 'md' | 'lg';
};

const Ad = ({ size }: AdSizeProps) => {
  return <div className={'p-4 bg-white rounded-lg shadow-md text-sm'}>AD</div>;
};

export default Ad;
