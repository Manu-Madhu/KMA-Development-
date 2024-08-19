import { quick_actions } from '@/data/admin/quick_actions'

function QuickActions() {
    return (
        <div className='flex flex-col items-end pr-[54px] mt-20 gap-2'>
            <h1 className='text-xl font-medium mb-3'>Quick actions</h1>
            {
                quick_actions.map(action => (
                    <button key={action.id} className='text-xl text-gray-500 w-fit'>
                        {action.title}
                    </button>
                ))
            }
        </div>
    )
}

export default QuickActions
