import { useMantineTheme } from '@mantine/core';

interface StarIconProps {
  fillColor?: 'yellow' | 'purple' | 'gray';
}

const StarIcon = ({ fillColor = 'gray' }: StarIconProps) => {
  const theme = useMantineTheme();

  const colorsMap = {
    yellow: theme.colors.yellow[6],
    purple: theme.colors.purple[5],
    gray: theme.colors.grey[3],
  } as const;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 20.7083L6.79929 24.4941L8.17479 16.4756L2.34146 10.7974L10.3915 9.63078L13.9918 2.33561L17.5921 9.63078L25.6421 10.7974L19.8088 16.4756L21.1843 24.4941L14 20.7083Z"
        fill={colorsMap[fillColor]}
        stroke={colorsMap[fillColor]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
