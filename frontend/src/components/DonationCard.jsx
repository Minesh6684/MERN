import { BsDashLg } from 'react-icons/bs'

function DonationCard({donation}) {
    return(
        <div>
            <p>{donation.description} <BsDashLg color={!donation.isDonated ? !donation.isReseved ? 'green' : 'orange' : 'red'} /></p>
            <p>{donation.address}</p>
        </div>
    )
}

export default DonationCard