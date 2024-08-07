import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { activities } from '@/data/admin/activities';

export default function RecentActivities() {
    return (
        <div className='w-fit flex flex-col items-center'>
            <h1 className='text-xl mb-3 font-medium'>Recent Activity</h1>
            <Timeline className='items-end' position="left">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" sx={{ borderWidth: 5 }} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='text-nowrap text-gray-600 text-lg'>{activities[0].title}</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" sx={{ borderWidth: 5 }} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='text-nowrap text-gray-600 text-lg'>{activities[1].title}</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" sx={{ borderWidth: 5 }} />
                        <TimelineConnector sx={{ width: 0, borderStyle: 'dashed', borderWidth: '1px', borderColor: 'gray', borderSpacing: '8px' }} className="dashed-connector" />
                    </TimelineSeparator>
                    <TimelineContent className='text-nowrap text-gray-600 text-lg'>{activities[2].title}</TimelineContent>
                </TimelineItem>
            </Timeline>
            <button className='text-primaryColor underline underline-offset-2 w-fit'>
                see all activity
            </button>
        </div>
    );
}
