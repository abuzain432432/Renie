import Bottels from '.././assets/images/Bottles.svg'
import InBins from '.././assets/images/In Bins.svg'
import Collected from '.././assets/images/Collected.svg'
import Recycled from '.././assets/images/Recycle.svg'
import ActiveBins from '.././assets/images/Active Bins.svg'
const DASHBOARD_FILTER_CONST = [
    {
        name: 'Bottels',
        quantity: '101.247 pc',
        img: Bottels,
    },
    {
        name: 'In Bins',
        quantity: '257 kg',
        img: InBins,
    },
    {
        name: 'Collected',
        quantity: '50.398 kg',
        img: Collected,
    },
    {
        name: 'Recycled',
        quantity: '920 mt',
        img: Recycled,
    },
    {
        name: 'Active bins',
        quantity: '20 pc',
        img: ActiveBins,
    },
]
const DUMAY_FILTER_CONST = ['paksitan', 'india'];
export default DUMAY_FILTER_CONST;
export { DASHBOARD_FILTER_CONST };