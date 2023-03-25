import InBinDot from '../Components/CommonComponents/InBinDot'
import CollectedDot from '../Components/CommonComponents/CollectedDot'
export const TOP_BRANDING_DUMPY_DATA = [
    {
        rank: 1,
        brand: 'Coca cola - original',
        bottle: '105.748',
        weight: '200 kg'

    },
    {
        rank: 2,
        brand: 'Coca cola - original',
        bottle: '105.748',
        weight: '200 kg'

    },
    {
        rank: 3,
        brand: 'Al ain - zero sodium water',
        bottle: '105.748',
        weight: '200 kg'

    },
    {
        rank: 4,
        brand: 'Coca cola - original',
        bottle: '105.748',
        weight: '200 kg'

    },
    {
        rank: 5,
        brand: 'Coca cola - original',
        bottle: '105.748',
        weight: '200 kg'

    },
]
export const AREA_COLUMN = [
    {
        title: 'AREA',
        dataIndex: 'area',
        key: 'key',
    },
    {
        title: 'EMPLOYEE',
        dataIndex: 'employee',
        key: 'key',
    }
    ,
    {
        title: 'WMC',
        dataIndex: 'wmc',
        key: 'key',
    }
    ,
    {
        title: 'WEIGHT',
        dataIndex: 'weight',
        key: 'key',
    }
    ,
    {
        title: 'BIN ID',
        dataIndex: 'binId',
        key: 'key',
    }
    ,
    {
        title: 'BAG ID',
        dataIndex: 'bagID',
        key: 'key',
    }
]
export const AREA_DUMY_DATA = [
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
    {
        area: 'Burj khalifa',
        employee: 'SANDER VAN WAES',
        wmc: 'Beah',
        weight: '2,76kg',
        binId: '6334233',
        bagID: 'RBG-1234567891'
    },
]
export const DETAILED_TRACKING_COLUMN = [
    {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'key',
        render: (data) => {
            console.log(data)
            return (
                <div className='d-flex justify-content-center align-items-center'>
                    {data ? <InBinDot /> : <CollectedDot />}

                </div>
            )
        }
    },
    {
        title: 'AREA',
        dataIndex: 'area',
        key: 'key'
    },
    {
        title: 'BRAND',
        dataIndex: 'brand',
        key: 'key'
    },
    {
        title: 'WEIGHT G',
        dataIndex: 'weight',
        key: 'key'
    },
    {
        title: 'BIN ID',
        dataIndex: 'binId',
        key: 'key'
    },
    {
        title: 'ADDED',
        dataIndex: 'added',
        key: 'key'
    },
    {
        title: 'COLLECTED',
        dataIndex: 'collected',
        key: 'key'
    },
    {
        title: 'EMPLOYEE',
        dataIndex: 'employee',
        key: 'key'
    },
    {
        title: 'EAN',
        dataIndex: 'ean',
        key: 'key'
    },
    {
        title: 'TRACKING ID',
        dataIndex: 'trackingId',
        key: 'key'
    },
]
export const DETAILED_TRACKING_DUMY_DATA = [
    {
        status: true,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: true,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: true,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: true,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: true,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: true,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: true,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: true,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: false,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: false,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: false,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
    {
        status: false,
        area: 'Burj khalifa',
        brand: 'Coca cola - original',
        weight: '20',
        binId: '6334232',
        added: '12/03/2023  2:58pm',
        collected: 'Not collected',
        employee: 'N.A',
        wmc: 'Beah',
        ean: '6297001135501',
        trackingId: 'faa3ef'
    },
]
export const COLLECTION_DUMY_DATA =
{
    date: '12/03/2023',
    time: '01:46 PM',
    area: 'Burj khalifa',
    brand: 'Mai Dubai',
}

export const ACTIVITY_DUMY_DATA =
{
    date: '12/03/2023',
    time: '01:46 PM',
    area: 'Burj khalifa',
    weight: '2.76 KG',
}