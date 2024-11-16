import Image from 'next/image';

export function SchedulerLogoImage({ size }: { size: number }) {
  return (
    <Image
      src='/logos/scheduler_logo.png'
      alt='Scheduler Logo'
      width={size}
      height={size}
      priority
    />
  );
}
