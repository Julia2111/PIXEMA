// import { Group, Text, useMantineTheme } from '@mantine/core';

// import StarIcon from '@/components/icons/StarIcon';
// import { shortenNumber } from '@/utils/helpers';

// interface RatingBadgeProps {
//   voteAverage: number;
//   voteCount: number;
// }

// const RatingBadge = ({ voteAverage, voteCount }: RatingBadgeProps) => {
//   const theme = useMantineTheme();

//   return (
//     <Group gap="xxs">
//       <Group gap={4}>
//         <StarIcon fillColor="yellow" />
//         <Text fz="sm" fw={600} lh="xs">
//           {voteAverage ? voteAverage.toFixed(1) : '0.0'}
//         </Text>
//       </Group>
//       <Text c={theme.colors.grey[6]} fz="sm" fw={400} lh="xs">
//         {`(${shortenNumber(voteCount)})`}
//       </Text>
//     </Group>
//   );
// };

// export default RatingBadge;
